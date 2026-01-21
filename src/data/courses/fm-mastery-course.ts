import slide01 from "@/assets/course-slides/fm-mastery/slide-01.jpg";
import slide02 from "@/assets/course-slides/fm-mastery/slide-02.jpg";
import slide03 from "@/assets/course-slides/fm-mastery/slide-03.jpg";
import slide04 from "@/assets/course-slides/fm-mastery/slide-04.jpg";
import slide05 from "@/assets/course-slides/fm-mastery/slide-05.jpg";
import slide06 from "@/assets/course-slides/fm-mastery/slide-06.jpg";
import slide07 from "@/assets/course-slides/fm-mastery/slide-07.jpg";
import slide08 from "@/assets/course-slides/fm-mastery/slide-08.jpg";
import slide09 from "@/assets/course-slides/fm-mastery/slide-09.jpg";
import slide10 from "@/assets/course-slides/fm-mastery/slide-10.jpg";
import slide11 from "@/assets/course-slides/fm-mastery/slide-11.jpg";
import slide12 from "@/assets/course-slides/fm-mastery/slide-12.jpg";
import slide13 from "@/assets/course-slides/fm-mastery/slide-13.jpg";
import slide14 from "@/assets/course-slides/fm-mastery/slide-14.jpg";
import slide15 from "@/assets/course-slides/fm-mastery/slide-15.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const fmMasteryModules: Module[] = [
  {
    id: 1,
    title: "The Art & Science of Foundation Models",
    subtitle: "From Zero-Shot to Advanced Reasoning",
    content: "A practitioner's guide to prompt engineering and model architecture, covering the journey from basic instructions to sophisticated reasoning agents.",
    slideImage: slide01,
    notes: ["Prompt Engineering fundamentals", "Model Architecture understanding", "Zero-Shot to reasoning agents"]
  },
  {
    id: 2,
    title: "Foundation Models (FMs)",
    subtitle: "The Paradigm Shift",
    content: "Foundation Models represent a paradigm shift from bespoke, single-task models to adaptable, general-purpose infrastructure trained on internet-scale data.",
    slideImage: slide02,
    notes: ["High fixed cost (pre-training)", "Low marginal cost (prompting/fine-tuning)", "Adapts to Text, Vision, Robotics"]
  },
  {
    id: 3,
    title: "Anatomy of an Effective Prompt",
    subtitle: "The Interface",
    content: "Prompt Engineering is the process of guiding the model to predict the desired next token through precise inputs: Persona, Task, Context, and Format.",
    slideImage: slide03,
    notes: ["Persona: Sets tone/expertise", "Task: The core instruction", "Context: Constraints & background", "Format: Output structure"]
  },
  {
    id: 4,
    title: "Temperature and Sampling",
    subtitle: "Configuring the Engine",
    content: "Controlling the trade-off between deterministic fact and creative randomness through Temperature, Top-K, and Top-P (Nucleus) sampling strategies.",
    slideImage: slide04,
    notes: ["Temperature: Controls randomness", "Top-K: Limits to K most likely tokens", "Top-P: Cumulative probability threshold"]
  },
  {
    id: 5,
    title: "Zero-Shot Instruction",
    subtitle: "Level 1: Direct Commands",
    content: "Asking the model to perform a task without examples, relying entirely on pre-training knowledge. Effective for simple, well-defined tasks.",
    slideImage: slide05,
    notes: ["No examples provided", "Relies on pre-training", "Best for simple tasks"]
  },
  {
    id: 6,
    title: "Few-Shot Learning",
    subtitle: "Level 2: Learning from Examples",
    content: "Providing a small number of input-output examples within the prompt to demonstrate the desired pattern and output format.",
    slideImage: slide06,
    notes: ["Include 2-5 examples", "Shows desired pattern", "Improves accuracy significantly"]
  },
  {
    id: 7,
    title: "Chain-of-Thought Prompting",
    subtitle: "Level 3: Step-by-Step Reasoning",
    content: "Instructing the model to break down complex problems into intermediate reasoning steps, dramatically improving performance on math and logic tasks.",
    slideImage: slide07,
    notes: ["Show your work approach", "Intermediate steps visible", "Best for reasoning tasks"]
  },
  {
    id: 8,
    title: "Self-Consistency",
    subtitle: "Improving Reliability",
    content: "Generating multiple reasoning paths and selecting the most frequent answer via majority vote, improving accuracy on complex reasoning tasks.",
    slideImage: slide08,
    notes: ["Multiple reasoning paths", "Majority voting", "Higher accuracy"]
  },
  {
    id: 9,
    title: "Tree of Thoughts",
    subtitle: "Branching Exploration",
    content: "Allowing models to explore multiple reasoning paths simultaneously in a branching structure, enabling backtracking and strategic planning.",
    slideImage: slide09,
    notes: ["Branching exploration", "Backtracking enabled", "Strategic planning"]
  },
  {
    id: 10,
    title: "ReAct: Reason + Act",
    subtitle: "Interleaving Thought and Action",
    content: "A prompting paradigm that interleaves reasoning traces with task-specific actions like API calls, enabling more capable agent behaviors.",
    slideImage: slide10,
    notes: ["Thought traces + Actions", "API call integration", "Agent-like behavior"]
  },
  {
    id: 11,
    title: "Prompt Chaining",
    subtitle: "Complex Workflows",
    content: "Breaking complex tasks into a sequence of simpler prompts, where each step's output becomes the next step's input.",
    slideImage: slide11,
    notes: ["Sequential prompts", "Output → Input chains", "Complex task decomposition"]
  },
  {
    id: 12,
    title: "System Prompts",
    subtitle: "Persistent Context",
    content: "Defining the context, role, and boundaries for an LLM's behavior throughout an entire interaction session.",
    slideImage: slide12,
    notes: ["Persistent across turns", "Defines role and boundaries", "Sets behavioral constraints"]
  },
  {
    id: 13,
    title: "Output Formatting",
    subtitle: "Structured Responses",
    content: "Techniques for ensuring consistent, parseable output including JSON mode, XML tags, and structured templates.",
    slideImage: slide13,
    notes: ["JSON mode", "XML tags", "Structured templates"]
  },
  {
    id: 14,
    title: "Prompt Optimization",
    subtitle: "Iterative Improvement",
    content: "Systematic approaches to improving prompt effectiveness through testing, measurement, and iteration.",
    slideImage: slide14,
    notes: ["A/B testing prompts", "Measuring effectiveness", "Iterative refinement"]
  },
  {
    id: 15,
    title: "From Prompts to Agents",
    subtitle: "The Evolution",
    content: "The journey from simple prompts to sophisticated agents that can plan, use tools, and accomplish complex multi-step tasks.",
    slideImage: slide15,
    notes: ["Tool use integration", "Planning capabilities", "Multi-step execution"]
  }
];
