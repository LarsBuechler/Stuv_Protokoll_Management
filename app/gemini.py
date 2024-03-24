from zenml.steps import BaseStep
import lorem  # Assuming lorem for PDF content
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score


class PdfReader(BaseStep):
  """Simulates a PDF reader and extracts text."""

  def run(self) -> str:
    # Simulate PDF content with lorem ipsum
    pdf_text = lorem.paragraph()
    return pdf_text

class PreprocessData(BaseStep):
  """Preprocesses the extracted text."""

  def run(self, text: str) -> str:
    # Basic cleaning (replace with your specific logic)
    text = text.lower()  # Lowercase
    text = "".join([char for char in text if char.isalnum() or char.isspace()])  # Remove special characters
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

from zenml import pipeline

@pipeline
def train_pipeline() -> float:
  """
  Pipeline for training a Logistic Regression model with preprocessed PDF data.
  """
  pdf_text = PdfReader()()
  preprocessed_text = PreprocessData()(pdf_text)

  # Assuming preprocessed text can be treated as CSV-like data (split on lines)
  data = SplitData()(preprocessed_text)

  trained_model = TrainModel()(data)
  accuracy = EvaluateModel()(data, trained_model)
  return accuracy

# Run the pipeline (requires ZenML configuration)
# from zenml.runtime import PipelineRunner
# runner = PipelineRunner(config_file="zenml.yaml")
# accuracy = runner.run(train_pipeline)
# print(f"Model Accuracy: {accuracy}")
