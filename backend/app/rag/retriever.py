from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

VECTOR_FOLDER = "data/vectors"

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

vectorstore = FAISS.load_local(
    VECTOR_FOLDER,
    embeddings,
    allow_dangerous_deserialization=True
)


def retrieve_medical_context(query):

    docs = vectorstore.similarity_search(
        query,
        k=3
    )

    context = ""

    for doc in docs:

        context += doc.page_content + "\n\n"

    return context