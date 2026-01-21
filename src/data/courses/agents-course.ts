import slide01 from "@/assets/course-slides/agents/slide-01.jpg";
import slide02 from "@/assets/course-slides/agents/slide-02.jpg";
import slide03 from "@/assets/course-slides/agents/slide-03.jpg";
import slide04 from "@/assets/course-slides/agents/slide-04.jpg";
import slide05 from "@/assets/course-slides/agents/slide-05.jpg";
import slide06 from "@/assets/course-slides/agents/slide-06.jpg";
import slide07 from "@/assets/course-slides/agents/slide-07.jpg";
import slide08 from "@/assets/course-slides/agents/slide-08.jpg";
import slide09 from "@/assets/course-slides/agents/slide-09.jpg";
import slide10 from "@/assets/course-slides/agents/slide-10.jpg";
import slide11 from "@/assets/course-slides/agents/slide-11.jpg";
import slide12 from "@/assets/course-slides/agents/slide-12.jpg";
import slide13 from "@/assets/course-slides/agents/slide-13.jpg";
import slide14 from "@/assets/course-slides/agents/slide-14.jpg";
import slide15 from "@/assets/course-slides/agents/slide-15.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const agentsModules: Module[] = [
  {
    id: 1,
    title: "From LLMs to AI Agents",
    subtitle: "The Evolution of Capability",
    content: "A strategic guide for technical leaders covering the journey from generalist foundation models to knowledge-augmented RAG to autonomous action-taking agents.",
    slideImage: slide01,
    notes: ["Foundation Model (Generalist)", "RAG (Knowledge)", "Agents (Action)"]
  },
  {
    id: 2,
    title: "The Brilliant Generalist Paradox",
    subtitle: "The Gap",
    content: "Foundation models have impressive general knowledge but fail at proprietary context and specific behavior protocols. The challenge: turn a generalist into a specialist.",
    slideImage: slide02,
    notes: ["Impressive general knowledge", "Fails at proprietary context", "Generalist → Specialist challenge"]
  },
  {
    id: 3,
    title: "The Adaptation Spectrum",
    subtitle: "From Prompts to Fine-Tuning",
    content: "A decision framework: Start with Prompt Engineering, identify gaps (Knowledge vs Skill), then apply RAG or Fine-Tuning as needed.",
    slideImage: slide03,
    notes: ["Low cost → High customization", "Knowledge gap → RAG", "Skill gap → Fine-Tuning"]
  },
  {
    id: 4,
    title: "Prompt Engineering Strategies",
    subtitle: "Structuring Intelligence",
    content: "Key strategies: clear instructions, examples (in-context learning), personas, output format, and Chain-of-Thought for complex reasoning.",
    slideImage: slide04,
    notes: ["Clear instructions", "Few-shot examples", "Personas and format", "Chain-of-Thought"]
  },
  {
    id: 5,
    title: "Retrieval Augmented Generation",
    subtitle: "Solving the Knowledge Gap",
    content: "RAG retrieves from vector databases, combines context with query, and grounds LLM responses in proprietary, private, or rapidly changing data.",
    slideImage: slide05,
    notes: ["Vector DB search", "Context injection", "Grounded generation"]
  },
  {
    id: 6,
    title: "Fine-Tuning & PEFT",
    subtitle: "Solving the Skill Gap with LoRA",
    content: "When prompt engineering isn't enough, fine-tuning teaches new behaviors. LoRA injects trainable low-rank matrices while freezing original weights.",
    slideImage: slide06,
    notes: ["LoRA adapters", "Parameter efficient", "Skill/style adaptation"]
  },
  {
    id: 7,
    title: "What Makes an Agent?",
    subtitle: "Beyond Chat",
    content: "Agents plan, use tools, and execute multi-step tasks autonomously. Key components: reasoning, tool calling, and memory.",
    slideImage: slide07,
    notes: ["Planning capability", "Tool use", "Memory systems"]
  },
  {
    id: 8,
    title: "Agent Architectures",
    subtitle: "ReAct and Beyond",
    content: "ReAct interleaves reasoning and action. Other patterns: Plan-and-Execute, Reflexion, and multi-agent collaboration.",
    slideImage: slide08,
    notes: ["ReAct: Reason + Act", "Plan-and-Execute", "Multi-agent systems"]
  },
  {
    id: 9,
    title: "Tool Definitions",
    subtitle: "Function Calling",
    content: "Agents invoke external functions through structured JSON. Tool definitions describe capabilities, parameters, and expected outputs.",
    slideImage: slide09,
    notes: ["Structured JSON output", "Tool descriptions", "Parameter schemas"]
  },
  {
    id: 10,
    title: "Memory Systems",
    subtitle: "Short and Long-Term",
    content: "Agents need memory: conversation history (short-term), vector stores for knowledge (long-term), and working memory for task state.",
    slideImage: slide10,
    notes: ["Short-term: Conversation", "Long-term: Vector stores", "Working: Task state"]
  },
  {
    id: 11,
    title: "Agent Planning",
    subtitle: "Breaking Down Tasks",
    content: "Effective planning: decompose complex requests into subtasks, maintain task state, handle dependencies, and adapt to failures.",
    slideImage: slide11,
    notes: ["Task decomposition", "Dependency handling", "Failure adaptation"]
  },
  {
    id: 12,
    title: "Context Engineering",
    subtitle: "Optimizing Agent Prompts",
    content: "Context engineering optimizes system prompts, manages context windows, and implements caching for reliable agent behavior.",
    slideImage: slide12,
    notes: ["System prompt optimization", "Context window management", "Response caching"]
  },
  {
    id: 13,
    title: "Agent Evaluation",
    subtitle: "Measuring Autonomous Performance",
    content: "Evaluating agents: task completion rates, tool use accuracy, reasoning quality, and end-to-end workflow success.",
    slideImage: slide13,
    notes: ["Task completion metrics", "Tool use accuracy", "Workflow success"]
  },
  {
    id: 14,
    title: "Safety & Guardrails",
    subtitle: "Controlling Autonomous Systems",
    content: "Agent safety: action confirmation for sensitive operations, scope limitations, output filtering, and human-in-the-loop checkpoints.",
    slideImage: slide14,
    notes: ["Action confirmation", "Scope limitations", "Human checkpoints"]
  },
  {
    id: 15,
    title: "The Agentic Future",
    subtitle: "What's Next",
    content: "The future of agents: more capable reasoning, multi-modal actions, collaborative multi-agent systems, and increasingly autonomous workflows.",
    slideImage: slide15,
    notes: ["Enhanced reasoning", "Multi-modal capabilities", "Autonomous workflows"]
  }
];
