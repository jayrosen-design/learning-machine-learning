import slide01 from "@/assets/course-slides/fm-strategic/slide-01.jpg";
import slide02 from "@/assets/course-slides/fm-strategic/slide-02.jpg";
import slide03 from "@/assets/course-slides/fm-strategic/slide-03.jpg";
import slide04 from "@/assets/course-slides/fm-strategic/slide-04.jpg";
import slide05 from "@/assets/course-slides/fm-strategic/slide-05.jpg";
import slide06 from "@/assets/course-slides/fm-strategic/slide-06.jpg";
import slide07 from "@/assets/course-slides/fm-strategic/slide-07.jpg";
import slide08 from "@/assets/course-slides/fm-strategic/slide-08.jpg";
import slide09 from "@/assets/course-slides/fm-strategic/slide-09.jpg";
import slide10 from "@/assets/course-slides/fm-strategic/slide-10.jpg";
import slide11 from "@/assets/course-slides/fm-strategic/slide-11.jpg";
import slide12 from "@/assets/course-slides/fm-strategic/slide-12.jpg";
import slide13 from "@/assets/course-slides/fm-strategic/slide-13.jpg";
import slide14 from "@/assets/course-slides/fm-strategic/slide-14.jpg";
import slide15 from "@/assets/course-slides/fm-strategic/slide-15.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const fmStrategicModules: Module[] = [
  {
    id: 1,
    title: "Foundation Models: The Strategic Shift",
    subtitle: "Paradigm, Open Models, Multimodal, Selection",
    content: "A strategic overview covering the paradigm shift, open revolution with BLOOM and LLaMA, multimodal frontiers, and frameworks for adoption.",
    slideImage: slide01,
    notes: ["Paradigm shift to generalists", "Open model revolution", "Multimodal convergence", "Strategic selection framework"]
  },
  {
    id: 2,
    title: "Task-Specific to Adaptable Generalists",
    subtitle: "A Paradigm Shift",
    content: "Traditional AI used smaller, task-specific datasets. Foundation Models train on vast, general datasets designed to generalize across many tasks.",
    slideImage: slide02,
    notes: ["Homogenization: One model for many tasks", "Examples: GPT, Gemini, Claude, Qwen, Llama", "Immense computational resources required"]
  },
  {
    id: 3,
    title: "Transformers and Data at Scale",
    subtitle: "The Engine",
    content: "The Transformer architecture enables parallelization and self-attention. LLaMA trained on 1.4T tokens from CommonCrawl, C4, GitHub, and more.",
    slideImage: slide03,
    notes: ["Transformer enables parallelization", "Self-attention mechanism", "Terabyte-scale training data"]
  },
  {
    id: 4,
    title: "Rethinking Scaling Laws",
    subtitle: "Efficiency Over Size",
    content: "The Chinchilla insight: most large models are undertrained. LLaMA-13B outperforms GPT-3 (175B) on most benchmarks by training on more data.",
    slideImage: slide04,
    notes: ["Chinchilla scaling laws", "LLaMA-13B > GPT-3 (175B)", "More data beats more parameters"]
  },
  {
    id: 5,
    title: "Beyond Text: Multimodal Systems",
    subtitle: "The Rise of Vision-Language Models",
    content: "Multimodal models combine text, image, audio, and video understanding. CLIP, Flamingo, and others enable image captioning, visual Q&A, and agentic action.",
    slideImage: slide05,
    notes: ["Joint text-image embedding (CLIP)", "Video: 10min = 1M images", "Agentic action capabilities"]
  },
  {
    id: 6,
    title: "The Open Model Revolution",
    subtitle: "BLOOM and LLaMA",
    content: "Open models challenged the 'bigger is better' dogma and democratized access to foundation model capabilities.",
    slideImage: slide06,
    notes: ["BLOOM: Open multilingual model", "LLaMA: Efficient open weights", "Democratized access"]
  },
  {
    id: 7,
    title: "Model Selection Framework",
    subtitle: "Choosing the Right Model",
    content: "A strategic framework for selecting models based on task requirements, cost constraints, latency needs, and deployment environment.",
    slideImage: slide07,
    notes: ["Task requirements analysis", "Cost-performance trade-offs", "Deployment constraints"]
  },
  {
    id: 8,
    title: "API vs Self-Hosted",
    subtitle: "Deployment Strategies",
    content: "Comparing API-based inference (OpenAI, Anthropic) with self-hosted solutions for different security, cost, and control requirements.",
    slideImage: slide08,
    notes: ["API: Easy, scalable, less control", "Self-hosted: Control, privacy, complexity", "Hybrid approaches"]
  },
  {
    id: 9,
    title: "Fine-Tuning Decisions",
    subtitle: "When and How",
    content: "Understanding when fine-tuning is necessary vs. prompt engineering, and the spectrum from full fine-tuning to parameter-efficient methods.",
    slideImage: slide09,
    notes: ["Prompt engineering first", "Fine-tuning for style/domain", "PEFT methods (LoRA, QLoRA)"]
  },
  {
    id: 10,
    title: "Cost Optimization",
    subtitle: "Managing AI Spend",
    content: "Strategies for optimizing AI costs including model selection, caching, batching, and efficient prompt design.",
    slideImage: slide10,
    notes: ["Right-size model selection", "Response caching", "Efficient prompt design"]
  },
  {
    id: 11,
    title: "Latency Considerations",
    subtitle: "Real-Time Requirements",
    content: "Understanding latency trade-offs between model size, infrastructure, and user experience requirements.",
    slideImage: slide11,
    notes: ["Model size vs. latency", "Streaming responses", "Edge deployment options"]
  },
  {
    id: 12,
    title: "Security and Privacy",
    subtitle: "Data Protection",
    content: "Addressing data security, privacy compliance, and risk mitigation when deploying foundation models.",
    slideImage: slide12,
    notes: ["Data handling policies", "Privacy compliance (GDPR, etc.)", "Risk mitigation strategies"]
  },
  {
    id: 13,
    title: "Governance Framework",
    subtitle: "Organizational Readiness",
    content: "Building organizational capability for responsible AI adoption including policies, training, and oversight mechanisms.",
    slideImage: slide13,
    notes: ["Policy development", "Team training", "Oversight mechanisms"]
  },
  {
    id: 14,
    title: "Build vs. Buy",
    subtitle: "Strategic Decisions",
    content: "Framework for deciding between building custom solutions, using commercial APIs, or adopting open-source models.",
    slideImage: slide14,
    notes: ["Core competency analysis", "Total cost of ownership", "Time-to-market considerations"]
  },
  {
    id: 15,
    title: "The Future Landscape",
    subtitle: "Trends and Predictions",
    content: "Emerging trends in foundation models including multimodal capabilities, efficiency improvements, and the path to AGI.",
    slideImage: slide15,
    notes: ["Multimodal convergence", "Efficiency breakthroughs", "Agent capabilities"]
  }
];
