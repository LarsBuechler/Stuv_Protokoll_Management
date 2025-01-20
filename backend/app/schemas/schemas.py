from pydantic import BaseModel

class DocumentBase(BaseModel):
    name: str

class DocumentCreate(DocumentBase):
    content: str

class Document(DocumentBase):
    id: int

    class Config:
        from_attributes = True
