from zenml.steps import BaseStep
import re
import spacy
from mistralai import MistralAsyncClient, PromptTemplate
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# Load spaCy German model
nlp = spacy.load("de_core_news_sm")

def preprocess_pdf(pdf_text):
  text = re.sub(r'[^\w\s]', '', pdf_text.lower())  # Remove non-alphanumeric characters
  tokens = nlp(text)
  stop_words = nlp.vocab.stop_words  # Get stop words list from spaCy
  return [token.text for token in tokens if token.text not in stop_words]


class ExtractChatbotData(BaseStep):
  """Extracts questions & answers from PDFs using spaCy."""

  def run(self, pdf_path: str) -> list:
    chatbot_data = []
    with open(pdf_path, 'rb') as pdf_file:
      # ... (Extract text from PDF - replace with your PDF parsing logic)
      text = preprocess_pdf(pdf_text)

      for sentence in nlp(text).sents:
        # Check for question words
        if any(token.text.lower() in ["was", "wer", "warum", "wie"] for token in sentence):
          question = sentence.text
          answer = self.find_answer(sentence, text)  # Find answer within the text
          chatbot_data.append({"question": question, "answer": answer})

    return chatbot_data

  def find_answer(self, question_sentence, text):
    # Implement logic to find the answer within the text based on the question
    # This is a simplified example, replace with your approach (e.g., following sentence)
    next_sentence = next(iter(nlp(text).sents), None)
    if next_sentence:
      return next_sentence.text
    else:
      return "Answer not found in following sentence"


class PrepareTrainingData(BaseStep):
  """Prepares data for Mixtral training."""

  def run(self, data: list) -> list:
    # Clean, format, and structure data for Mixtral training
    formatted_data = []
    for item in data:
      question, answer = item["question"], item["answer"]
      # Format data as conversation snippets (replace with your desired format)
      formatted_data.append(f"USER: {question}\nSYSTEM: {answer}")
    return formatted_data


class FineTuneMixtralModel(BaseStep):
  """Fine-tunes a Mixtral model using prepared data."""

  def run(self, data: list) -> object:
    # Connect to Mixtral API (replace with your API key)
    client = MistralAsyncClient(api_key="YOUR_MIXTRAL_API_KEY")

    # Define prompt template for training (adjust as needed)
    prompt_template = PromptTemplate(template="{}")

    # Load pre-trained Mixtral model (replace with appropriate tokenizer for 7x8b)
    model_name = "mixtral/7B"  # Adjust model name if needed
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

    # Fine-tune the model with prepared data
    future = client.llms.finetune(
        model_name=model_name,
        prompts=data,
        prompt_template=prompt_template,
        tokenizer=tokenizer,
        model=model,
        batch_size=8,
        epochs=3,
    )

    # Retrieve fine-tuned model (replace with appropriate error handling)
    fine_tuned_model = future.result()
    return fine_tuned_model


from zenml import pipeline

@pipeline
def train_pipeline(pdf_path: str) -> object:
  """
  Pipeline for fine-tuning a Mixtral model with question-answer data extracted from PDFs.
  """
  chatbot_data = ExtractChatbotData()(pdf_path)
  formatted_data = PrepareTrainingData()(chatbot_data)
  model = FineTuneMixtralModel()(formatted_data)
  return model

# ... code for running the pipeline with ZenML ...
