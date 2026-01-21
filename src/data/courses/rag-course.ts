// Slide imports for RAG course
import slide01 from "@/assets/course-slides/rag/slide-01.jpg";
import slide02 from "@/assets/course-slides/rag/slide-02.jpg";
import slide03 from "@/assets/course-slides/rag/slide-03.jpg";
import slide04 from "@/assets/course-slides/rag/slide-04.jpg";
import slide05 from "@/assets/course-slides/rag/slide-05.jpg";
import slide06 from "@/assets/course-slides/rag/slide-06.jpg";
import slide07 from "@/assets/course-slides/rag/slide-07.jpg";
import slide08 from "@/assets/course-slides/rag/slide-08.jpg";
import slide09 from "@/assets/course-slides/rag/slide-09.jpg";
import slide10 from "@/assets/course-slides/rag/slide-10.jpg";
import slide11 from "@/assets/course-slides/rag/slide-11.jpg";
import slide12 from "@/assets/course-slides/rag/slide-12.jpg";
import slide13 from "@/assets/course-slides/rag/slide-13.jpg";
import slide14 from "@/assets/course-slides/rag/slide-14.jpg";
import slide15 from "@/assets/course-slides/rag/slide-15.jpg";

import type { Module } from "./pytorch-course";

export const ragModules: Module[] = [
  {
    id: 1,
    title: "Retrieval Augmented Generation (RAG) on AWS",
    subtitle: "Architectures, Options, and Decision Frameworks for Enterprise Data",
    slideImage: slide01,
    content: "An overview of RAG architectures and how to implement them on AWS for enterprise data retrieval.",
    notes: [
      "Sources: AWS Prescriptive Guidance, LangChain Documentation, IBM Research"
    ]
  },
  {
    id: 2,
    title: "The Training Trap: Why Models Cannot Simply 'Learn' Your Data",
    slideImage: slide02,
    content: "Catastrophic Forgetting occurs when neural networks forget previously learned tasks after being trained on new data.",
    notes: [
      "The Definition: As new weights overwrite the old, the model loses its original capabilities",
      "The Mechanism: Network weights are optimized during backpropagation to minimize loss on new data",
      "The Consequence: Retraining is computationally expensive, creates stale data, and degrades reasoning",
      "Key Insight: 'In the process of learning new tasks the model has catastrophically forgotten how to approach old ones.' — IBM Research"
    ]
  },
  {
    id: 3,
    title: "The Solution: Retrieval Augmented Generation (RAG)",
    slideImage: slide03,
    content: "The process of optimizing LLM output by referencing an authoritative knowledge base outside of its training data before generating a response.",
    notes: [
      "Accuracy: Reduces hallucinations by grounding answers in facts",
      "Recency: Access to live data without retraining",
      "Security: Respects document-level permissions (ACLs)",
      "Attribution: Citations enhance user trust"
    ]
  },
  {
    id: 4,
    title: "Strategic Choice: RAG vs. Fine-Tuning",
    slideImage: slide04,
    content: "Decision Rule: Use RAG for what the model knows (facts). Use Fine-Tuning for how the model acts (behavior/style).",
    notes: [
      "Fine-Tuning: Best for teaching skills, form, or style. Risk: Catastrophic Forgetting",
      "RAG: Best for accessing knowledge, facts, and specific documents. Risk: Context window limits",
      "LoRA freezes weights and trains small adapter matrices (~2.67% of parameters)",
      "RAG uses Vector search + Prompt Engineering at inference time"
    ]
  },
  {
    id: 5,
    title: "Anatomy of a Production RAG System",
    slideImage: slide05,
    content: "Key components of a RAG system: Connectors, Orchestrator, Embeddings Model, Vector Database, Retriever, and Generator.",
    notes: [
      "Connectors: S3, SharePoint, WebBaseLoader",
      "Embeddings Model: Converts text to numerical vectors",
      "Vector Database: Stores embeddings (e.g., OpenSearch, Aurora)",
      "Retriever: Performs similarity search (k-NN)",
      "Generator: The Foundation Model (Bedrock, SageMaker)"
    ]
  },
  {
    id: 6,
    title: "The AWS RAG Spectrum",
    slideImage: slide06,
    content: "AWS offers solutions ranging from fully managed to fully custom, balancing convenience against customization.",
    notes: [
      "Fully Managed: Amazon Q Business - Turnkey, Enterprise-Ready, SaaS",
      "Balanced Platform: Knowledge Bases for Amazon Bedrock - Managed RAG pipeline, API access",
      "Visual/No-Code: SageMaker Canvas - Visual interface, Analyst focused",
      "Custom Architecture: SageMaker, OpenSearch, LangChain - Maximum Control"
    ]
  },
  {
    id: 7,
    title: "Fully Managed: Amazon Q Business",
    slideImage: slide07,
    content: "Target: Rapid deployment of secure enterprise assistants.",
    notes: [
      "40+ supported connectors out-of-the-box including SharePoint, Salesforce, Jira, and S3",
      "ACL-Aware Retrieval: Automatically indexes Access Control Lists",
      "Document Enrichment: Built-in pipelines with optional Lambda hooks for pre-processing",
      "Plugins: Supports read/write actions via built-in or custom plugins",
      "Use Case: Internal enterprise search and chat without infrastructure management"
    ]
  },
  {
    id: 8,
    title: "The Balanced Path: Amazon Bedrock",
    slideImage: slide08,
    content: "Knowledge Bases for Amazon Bedrock automates the 'heavy lifting': fetching documents, chunking, embedding, and syncing.",
    notes: [
      "Target: Developers needing a managed backend with API flexibility",
      "RetrieveAndGenerate: End-to-end RAG with short-term memory management",
      "Retrieve: Returns raw text chunks for custom reranking or formatting",
      "Supported stores: OpenSearch Serverless, Aurora PostgreSQL, Pinecone, Redis Enterprise, MongoDB Atlas"
    ]
  },
  {
    id: 9,
    title: "No-Code & Analyst Tools: SageMaker Canvas",
    slideImage: slide09,
    content: "Visual interface for business analysts and data scientists to rapidly experiment with RAG.",
    notes: [
      "Target: Business analysts and data scientists for rapid experimentation",
      "Feature: Document Querying via visual interface",
      "Workflow: Connect Foundation Models directly to Amazon Kendra indexes",
      "Benefit: Test RAG performance and compare models without writing Python"
    ]
  },
  {
    id: 10,
    title: "Custom Architecture: The Retrieval Layer",
    slideImage: slide10,
    content: "Choose between managed semantic search (Amazon Kendra) or custom vector stores.",
    notes: [
      "Amazon Kendra: ML-powered semantic search, no embedding management needed",
      "Amazon OpenSearch Service: Scalable, k-NN, Serverless",
      "Amazon Aurora PostgreSQL: pgvector for SQL + Vector workloads",
      "Amazon MemoryDB: Ultra-low latency, in-memory search",
      "Amazon Neptune: GraphRAG for complex relationships"
    ]
  },
  {
    id: 11,
    title: "Decision Logic: Choosing Your Vector Store",
    slideImage: slide11,
    content: "Match your requirements to the appropriate vector store technology.",
    notes: [
      "Serverless/High Scalability → Amazon OpenSearch Serverless",
      "Existing Relational Data/SQL → Amazon Aurora PostgreSQL + pgvector",
      "Ultra-low Latency (Microseconds) → Amazon MemoryDB",
      "Complex Data Relationships → Amazon Neptune Analytics (Graph)",
      "Managed/Specialized Ecosystem → Pinecone / MongoDB Atlas"
    ]
  },
  {
    id: 12,
    title: "Implementation Logic: The RAG Agent",
    slideImage: slide12,
    content: "Moving beyond simple Q&A with agentic RAG patterns.",
    codeExample: `// Standard RAG Chain
Retrieve -> Generate

// Agentic RAG
User -> LLM -> Need Info? -> Retrieve -> Final Answer
              ↑___________________|`,
    notes: [
      "Standard RAG Chain: Linear sequence, best for simple queries, fast and low latency",
      "RAG Agent: Multi-step reasoning to decide if it needs to search again",
      "Example: 'What is task decomposition? Once answered, look up extensions of that method.'"
    ]
  },
  {
    id: 13,
    title: "Code Reality: Indexing with LangChain",
    slideImage: slide13,
    content: "The standard LangChain indexing pipeline: Load, Split, Embed, Store.",
    codeExample: `# 1. LOAD
loader = WebBaseLoader("https://lilianweng.github.io/posts/agent/")
docs = loader.load()

# 2. SPLIT
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
all_splits = text_splitter.split_documents(docs)

# 3. EMBED & 4. STORE
vector_store.add_documents(documents=all_splits)`,
    notes: [
      "Load: Fetch documents from various sources",
      "Split: Break into chunks with overlap for context",
      "Embed: Convert text to vectors",
      "Store: Persist in vector database"
    ]
  },
  {
    id: 14,
    title: "The Architect's Decision Matrix",
    slideImage: slide14,
    content: "A decision tree for choosing your RAG strategy on AWS.",
    notes: [
      "Need turnkey, out-of-the-box? → Amazon Q Business",
      "Want managed pipeline but custom frontend? → Bedrock Knowledge Bases",
      "Need full control over Retriever/Vector DB? → Choose Custom Architecture",
      "Semantic Search? → Amazon Kendra",
      "SQL/Relational? → Aurora + pgvector",
      "Speed/In-Memory? → MemoryDB",
      "Graph? → Neptune"
    ]
  },
  {
    id: 15,
    title: "Conclusion & Glossary",
    slideImage: slide15,
    content: "Key takeaways and terminology for RAG on AWS.",
    notes: [
      "RAG > Fine-Tuning: Use RAG for facts and retrieval to avoid catastrophic forgetting",
      "The Spectrum: AWS offers solutions from fully managed (Amazon Q) to fully custom",
      "Embeddings: Numeric representations of text capturing semantic meaning",
      "Vector Databases: Specialized storage optimized for similarity search"
    ]
  }
];
