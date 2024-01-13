import glob
from PyPDF2 import PdfReader
from pydantic.dataclasses import dataclass 

@dataclass
class PDF:
    filename: str
    number_of_pages: int
    text: str

class Pdf_Handler:
    def __init__(
            self, 
            minio_api_key: str,
            pdf_list: list[PDF] = None,
            pdf: PDF = None):
        self.pdf_list = minio_api_key
        self.pdf_list = pdf_list
        self.pdf = pdf

    def get_pdf_list(self, root_dir: str = './data/'):
        # root_dir needs a trailing slash (i.e. /root/dir/)
        pdf_list = []
        for filename in glob.iglob(root_dir + '**/*.pdf', recursive=True):
            filename = filename.replace('\\', '/')
            pdf_list.append(create_pdf_object(filename))
        return pdf_list

def create_pdf_object(filename: str):
    reader = PdfReader(filename)
    number_of_pages = len(reader.pages)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
    return PDF(filename, number_of_pages, text)