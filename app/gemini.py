from zenml.steps import BaseStep
from zenml import pipeline
import re
import lorem  # Assuming lorem for PDF content (replace with actual PDF reader)
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import spacy
from gensim import corpora, models

# Load spaCy English model
nlp = spacy.load("en_core_web_sm")

def preprocess_pdf(pdf_text):
  text = re.sub(r'[^\w\s]', '', pdf_text.lower())  # Remove non-alphanumeric characters
  tokens = nlp(text)
  stop_words = nlp.vocab.stop_words  # Get stop words list from spaCy
  return [token.text for token in tokens if token.text not in stop_words]


class ExtractProtocolInfo(BaseStep):
  """Extracts information from protocols within PDFs."""

  def run(self, pdf_path: str) -> list:
    tables = camelot.read_pdf(pdf_path, flavor="stream")  # Extract tables from PDF
    protocol_data = []

    for table in tables:
      # Assuming protocol sections have a specific heading (replace with your logic)
      if "Protocol" in table[0][0]:
        for row in table[1:]:  # Skip header row
          # Replace with your logic to extract specific information from rows
          step_number = int(row[0])
          procedure = row[1]
          protocol_data.append({"step": step_number, "procedure": procedure})

    return protocol_data


class GenerateTrainingData(BaseStep):
  """Generates training data from extracted information."""

  def run(self, protocol_info: list) -> list:
    training_data = []
    for step in protocol_info:
      question = f"What is step {step['step']} of the protocol?"
      answer = step["procedure"]
      training_data.append({"question": question, "answer": answer})
    return training_data


class PdfReader(BaseStep):
  """Simulates a PDF reader and extracts text."""

  def run(self) -> str:
    # Simulate PDF content with lorem ipsum (replace with actual logic)
    pdf_text = lorem.paragraph()
    return pdf_text


class PreprocessData(BaseStep):
  """Preprocesses the extracted text."""

  def run(self, text: str) -> str:
    # Basic cleaning (replace with your specific logic)
    text = text.lower()
    text = "".join([char for char in text if char.isalnum() or char.isspace()])
    return text


class SplitData(BaseStep):
  """Splits the preprocessed text into features and target (replace with your logic)."""

  def run(self, text: str) -> dict:
    # Assuming lines in the text represent data points with features and target separated by a delimiter (e.g., comma)
    features, target = [], []
    for line in text.splitlines():
      feature, label = line.split(",")
      features.append(feature)
      target.append(int(label))  # Assuming target is numeric

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2)
    return {"X_train": X_train, "X_test": X_test, "y_train": y_train, "y_test": y_test}


class TrainModel(BaseStep):
  """Trains a Logistic Regression model."""

  def run(self, data: dict) -> dict:
    model = LogisticRegression()
    model.fit(data["X_train"], data["y_train"])
    return {"model": model}


class EvaluateModel(BaseStep):
  """Evaluates the trained model."""

  def run(self, data: dict, model: object) -> float:
    predictions = model.predict(data["X_test"])
    accuracy = accuracy_score(data["y_test"], predictions)
    return accuracy


class ClusterDocuments(BaseStep):
  """Performs document clustering using LDA."""

  def run(self, preprocessed_text: str) -> list:
    # Preprocess text further for clustering (replace with your logic)
    
    documents = preprocess_pdf(preprocessed_text)

    # Create dictionary and corpus
    dictionary = corpora.Dictionary(documents)
    corpus = [dictionary.doc2bow(doc) for doc in documents]

    # Train LDA model
    lda_model = models.LdaModel(corpus, id2word=dictionary, num_topics=10)

    # Assign clusters to documents
    document_clusters = []
    for i, doc in enumerate(corpus):
      topics = lda_model[doc]
      dominant_topic = max(topics, key=lambda tup: tup[1])[0]  # Get most likely topic
      document_clusters.append(dominant_topic)

    return document_clusters

@pipeline
def train_pipeline(pdf_path: str) -> (list, float):
  """
  Pipeline for training a model, evaluating, generating training data, and clustering preprocessed PDF data.
  """
  protocol_info = ExtractProtocolInfo()(pdf_path)
  training_data = GenerateTrainingData()(protocol_info)

  # ... previous steps for data splitting, training, and evaluation ...

  document_clusters = ClusterDocuments()(preprocessed_text)
  return document_clusters, accuracy

# ... code for running the pipeline with ZenML ...
