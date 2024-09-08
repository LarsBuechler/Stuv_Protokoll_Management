from fastapi import FastAPI, UploadFile, File, Depends, HTTPException
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
import os

from . import crud, models, schemas, pdf_utils
from .database import engine, SessionLocal, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
async def docs_redirect():
    return RedirectResponse(url='/docs')


@app.post("/documents/", response_model=schemas.Document)
async def create_document(file: UploadFile = File(...), db: Session = Depends(get_db)):
    # Speichere die hochgeladene Datei temporär
    pdf_path = f"temp_{file.filename}"
    with open(pdf_path, "wb") as pdf_file:
        pdf_file.write(await file.read())

    try:
        # Extrahiere den Text aus dem PDF
        text = pdf_utils.extract_text_from_pdf(pdf_path)
        document_data = schemas.DocumentCreate(name=file.filename, content=text)
        db_document = crud.create_document(db=db, document=document_data)
    finally:
        os.remove(pdf_path)

    return db_document


@app.get("/documents/", response_model=list[schemas.Document])
def read_documents(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    documents = crud.get_documents(db, skip=skip, limit=limit)
    return documents


@app.get("/documents/{document_id}", response_model=schemas.Document)
def read_document(document_id: int, db: Session = Depends(get_db)):
    db_document = crud.get_document(db, document_id=document_id)
    if db_document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    return db_document
