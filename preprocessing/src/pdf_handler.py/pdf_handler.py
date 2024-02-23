import glob
from PyPDF2 import PdfReader
import pandas as pd

# @dataclass
# class PDF:
#     filename: str
#     number_of_pages: int
#     text: str

class Pdf_Handler:
    def __init__(
            self, 
            pdf_df: pd.DataFrame = pd.DataFrame(columns=[
                'filename',
                'number_of_pages',
                'text'
            ])):
        self.pdf_df = pdf_df

    def get_pdf_list(self, root_dir: str = './data/'):
        # root_dir needs a trailing slash (i.e. /root/dir/)
        for filename in glob.iglob(root_dir + '**/*.pdf', recursive=True):
            filename = filename.replace('\\', '/')
            pdf_df_single = pd.DataFrame([create_pdf_object(filename)])#, columns=self.pdf_df.columns)
            self.pdf_df = pd.concat([self.pdf_df, pdf_df_single])
            #pdf_list.append(create_pdf_object(filename))

def create_pdf_object(filename: str):
    reader = PdfReader(filename)
    number_of_pages = len(reader.pages)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
    
    filename = filename.split('/')[-1] + filename.split('/')[-2]
    return {'filename':filename,
            'number_of_pages':number_of_pages,
            'text':text}
    # return PDF(filename, number_of_pages, text)