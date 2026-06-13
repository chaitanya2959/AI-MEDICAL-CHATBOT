from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

import os


DATA_FOLDER = "data/diseases"
VECTOR_FOLDER = "data/vectors"


def build_vector_database():

    documents = []

    for file in os.listdir(DATA_FOLDER):

        if file.endswith(".pdf"):

            loader = PyPDFLoader(
                os.path.join(DATA_FOLDER, file)
            )

            documents.extend(
                loader.load()
            )

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )

    docs = splitter.split_documents(
        documents
    )

    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    vectorstore = FAISS.from_documents(
        docs,
        embeddings
    )

    vectorstore.save_local(
        VECTOR_FOLDER
    )

    print("Medical Knowledge Base Created")