import pandas as pd
from zenml import steps
from typing_extensions import Annotated
from pdf_handler import pdf_handler

@steps
def data_loader(
    is_inference: bool,
    target: str = "target"
) -> Annotated[pd.DataFrame, "Dataset"]:
    pass