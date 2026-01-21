// Slide imports for GenAI Foundations course
import slide01 from "@/assets/course-slides/genai/slide-01.jpg";
import slide02 from "@/assets/course-slides/genai/slide-02.jpg";
import slide03 from "@/assets/course-slides/genai/slide-03.jpg";
import slide04 from "@/assets/course-slides/genai/slide-04.jpg";
import slide05 from "@/assets/course-slides/genai/slide-05.jpg";
import slide06 from "@/assets/course-slides/genai/slide-06.jpg";
import slide07 from "@/assets/course-slides/genai/slide-07.jpg";
import slide08 from "@/assets/course-slides/genai/slide-08.jpg";
import slide09 from "@/assets/course-slides/genai/slide-09.jpg";
import slide10 from "@/assets/course-slides/genai/slide-10.jpg";
import slide11 from "@/assets/course-slides/genai/slide-11.jpg";
import slide12 from "@/assets/course-slides/genai/slide-12.jpg";
import slide13 from "@/assets/course-slides/genai/slide-13.jpg";
import slide14 from "@/assets/course-slides/genai/slide-14.jpg";
import slide15 from "@/assets/course-slides/genai/slide-15.jpg";

import type { Module } from "./pytorch-course";

export const genaiModules: Module[] = [
  {
    id: 1,
    title: "Foundations of Generative AI",
    subtitle: "From Deep Learning Architectures to Enterprise Scale",
    slideImage: slide01,
    content: "This presentation covers architectural definitions, business value, and ethical responsibilities.",
    notes: ["Based on MIT xPRO, IBM watsonx.ai, and NVIDIA research"]
  },
  {
    id: 2,
    title: "Generative AI is a Specialized Subset of Deep Learning",
    slideImage: slide02,
    content: "Traditional AI analyzes existing data based on rules. GenAI uses massive, self-supervised foundation models to synthesize entirely new outputs.",
    notes: [
      "Artificial Intelligence (AI): Machines mimicking human tasks",
      "Machine Learning (ML): Improving at tasks via pattern recognition",
      "Deep Learning (DL): Neural networks inspired by the human brain",
      "Generative AI: Creating new, realistic content from patterns"
    ]
  },
  {
    id: 3,
    title: "Moving from Analysis to Synthesis",
    slideImage: slide03,
    content: "The fundamental shift from reactive, task-oriented AI to creative, open-ended generation.",
    notes: [
      "Traditional AI: Classification & Prediction within strict, pre-defined boundaries",
      "Examples: Spam Filters, Fraud Detection, Recommendation Engines",
      "Generative AI: Pattern Synthesis that acts as a partner to generate novel outputs",
      "Examples: Code Generation, Image Synthesis, Complex Summarization"
    ]
  },
  {
    id: 4,
    title: "The Power of Foundation Models",
    slideImage: slide04,
    content: "The Breakthrough: Self-supervision solves the 'data labeling bottleneck' by allowing models to learn from raw data by predicting the next token.",
    notes: [
      "Pre-trained on massive unlabeled data from the web/internet",
      "Self-Supervised Learning: The 'Smart Auto-Correct' Mechanism",
      "Fine-Tuning / Adaptation for specific tasks",
      "Applications: Question Answering, Data Extraction"
    ]
  },
  {
    id: 5,
    title: "Architectures of Creation",
    slideImage: slide05,
    content: "The three main architectures powering generative AI: Transformers, Diffusion Models, and VAEs/GANs.",
    notes: [
      "Transformers (Text): Self-Attention processes entire sequences at once for long-range dependencies",
      "Diffusion Models (Images): Denoising - adds noise then learns to reverse the process",
      "VAEs & GANs (Legacy/Speed): Adversarial Training & Latent Space, good for speed but Diffusion offers higher detail"
    ]
  },
  {
    id: 6,
    title: "Scale, Emergence, and the Capability Jump",
    slideImage: slide06,
    content: "Emergence: Capabilities not explicitly trained for appear suddenly as models grow in scale.",
    notes: [
      "The Predictable Scale: As models grow, they get smoothly better at predicting the next token",
      "The Emergent Step-Function: Sudden capability jumps at certain scales",
      "The Debate: Some argue 'Emergence' is a mirage caused by all-or-nothing metrics",
      "But the capability jump at scale remains a defining feature of GenAI"
    ]
  },
  {
    id: 7,
    title: "The Evolution to Multimodal Large Language Models (MLLMs)",
    slideImage: slide07,
    content: "Key Challenge: Alignment. Transforming visual or audio data into a 'language' the LLM can understand, allowing it to reason across senses.",
    notes: [
      "CNN/ViT (Visual) Encoders for images",
      "Audio Encoders for speech and sound",
      "Video Encoders for temporal data",
      "Fusion layer combines modalities for LLM Reasoning & Generation"
    ]
  },
  {
    id: 8,
    title: "Capabilities Across Modalities",
    slideImage: slide08,
    content: "GenAI applications span text, code, image, video, and audio generation.",
    notes: [
      "Text Generation: Summarization, RAG, Translation, Complex Reasoning",
      "Code Generation: Developer Productivity (Copilot), Documentation, Test Cases",
      "Image & Video: Scene Generation (Sora), Photo Editing, Design Ideation",
      "Audio: Voice Cloning, Music Composition, Text-to-Speech Synthesis"
    ]
  },
  {
    id: 9,
    title: "The Business Case: Hybrid AI",
    slideImage: slide09,
    content: "80% of enterprises are adopting GenAI, but the strongest results come from augmenting, not replacing, traditional predictive stacks.",
    notes: [
      "Generative AI: Great at Unstructured Data (Text/Images) & Creation",
      "Traditional ML: Great at Structured Data, Forecasting & Anomaly Detection",
      "GenAI summarizes insights found by ML predictions",
      "GenAI creates Synthetic Data to train ML models"
    ]
  },
  {
    id: 10,
    title: "Strategic Implementation: Four Pillars",
    slideImage: slide10,
    content: "A framework for responsible enterprise AI adoption.",
    notes: [
      "01. Open: Use a variety of models, avoid vendor lock-in, architecture flexibility",
      "02. Trusted: Transparency in data origin, robust governance against bias, explainable AI",
      "03. Targeted: Curated for specific business domains (HR, Code, Legal)",
      "04. Empowering: Tools for 'AI Builders', enable fine-tuning and training"
    ]
  },
  {
    id: 11,
    title: "The Environmental Toll of Virtual Intelligence",
    slideImage: slide11,
    content: "Data centers are the 11th largest global electricity consumer. Inference costs will eventually dwarf training costs.",
    notes: [
      "1 ChatGPT query uses ~5x the energy of 1 web search",
      "~2 Liters of water for cooling per kWh of server energy",
      "The 'Gold Rush' for GPUs adds hidden carbon footprint through fabrication and mining",
      "Responsible AI must consider environmental impact"
    ]
  },
  {
    id: 12,
    title: "Ethical Risks and Societal Responsibility",
    slideImage: slide12,
    content: "Critical ethical considerations for deploying generative AI systems.",
    notes: [
      "Bias & Fairness: Garbage In, Garbage Out - models amplify training data biases",
      "Hallucinations & Accuracy: Models can confidently state falsehoods",
      "IP & Copyright: Legal risks regarding training data ownership",
      "Security & Misinformation: Deepfakes erode trust, risk of jailbreaking safety rails"
    ]
  },
  {
    id: 13,
    title: "Displacement vs. Augmentation",
    slideImage: slide13,
    content: "Humans will not be replaced by AI, but by humans who use AI. The future is humans directing AI Agents to perform multi-step reasoning.",
    notes: [
      "Industrial Revolution: Physical Augmentation",
      "Information Age: Computational Augmentation",
      "Generative Age: Cognitive Augmentation",
      "The Shift to Agentic Workflows: Human-AI collaboration"
    ]
  },
  {
    id: 14,
    title: "The Future is Agentic and Responsible",
    slideImage: slide14,
    content: "Success depends not on the size of the model, but on the responsibility of its deployment—managing trust, environmental impact, and human-centric design.",
    notes: [
      "Reasoning & Agency: Systems that can plan, use tools, and act autonomously",
      "Evolution from Traditional AI → Machine Learning → LLMs → Agentic Systems",
      "Focus on responsible deployment over raw capability",
      "Human-centric design principles"
    ]
  },
  {
    id: 15,
    title: "Sources",
    slideImage: slide15,
    content: "References and further reading for Generative AI foundations.",
    notes: [
      "MIT xPRO: Introduction to Generative AI Foundations",
      "IBM: Generative AI for Business & watsonx.ai",
      "NVIDIA Glossary: Generative AI, Multimodal LLMs, Diffusion Models",
      "CSET (Georgetown): Emergent Abilities in Large Language Models",
      "MIT News: Generative AI's environmental impact"
    ]
  }
];
