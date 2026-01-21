import slide01 from "@/assets/course-slides/personas/slide-01.jpg";
import slide02 from "@/assets/course-slides/personas/slide-02.jpg";
import slide03 from "@/assets/course-slides/personas/slide-03.jpg";
import slide04 from "@/assets/course-slides/personas/slide-04.jpg";
import slide05 from "@/assets/course-slides/personas/slide-05.jpg";
import slide06 from "@/assets/course-slides/personas/slide-06.jpg";
import slide07 from "@/assets/course-slides/personas/slide-07.jpg";
import slide08 from "@/assets/course-slides/personas/slide-08.jpg";
import slide09 from "@/assets/course-slides/personas/slide-09.jpg";
import slide10 from "@/assets/course-slides/personas/slide-10.jpg";
import slide11 from "@/assets/course-slides/personas/slide-11.jpg";
import slide12 from "@/assets/course-slides/personas/slide-12.jpg";
import slide13 from "@/assets/course-slides/personas/slide-13.jpg";
import slide14 from "@/assets/course-slides/personas/slide-14.jpg";
import slide15 from "@/assets/course-slides/personas/slide-15.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const personasModules: Module[] = [
  {
    id: 1,
    title: "Role-Based Prompting",
    subtitle: "Directing Your AI",
    content: "Crafting specialized personas for high-quality LLM outputs. Act I: The Casting Call—understanding concept and problem definition.",
    slideImage: slide01,
    notes: ["Specialized personas", "High-quality outputs", "Concept and problem definition"]
  },
  {
    id: 2,
    title: "The Problem with Flat Performance",
    subtitle: "The Cold Read",
    content: "Without a specific role, the LLM defaults to the average of its training data—a 'helpful but plain' assistant lacking voice and personality.",
    slideImage: slide02,
    notes: ["Generic without role", "Defaults to average", "Lacks personality and voice"]
  },
  {
    id: 3,
    title: "Enter the Persona",
    subtitle: "Method Acting for AI",
    content: "The Role acts as a lens, constraining the model's vast vocabulary to a specific subset of style and knowledge.",
    slideImage: slide03,
    notes: ["Role as a lens", "Constrains vocabulary", "Specific style and knowledge"]
  },
  {
    id: 4,
    title: "Anatomy of a Role-Based Prompt",
    subtitle: "The Script",
    content: "Complex tasks require structural components: Role, Task, Output Format, and Examples to prevent the model from breaking character.",
    slideImage: slide04,
    notes: ["[Role]: Character definition", "[Task]: What to do", "[Format]: Output structure", "[Examples]: Demonstrations"]
  },
  {
    id: 5,
    title: "Genre Study: Fantasy Author",
    subtitle: "Using System Prompts for Atmosphere",
    content: "A Fantasy Author persona creates futuristic, atmospheric worlds with stark prose, realism focus, and underlying hope.",
    slideImage: slide05,
    notes: ["System prompt sets atmosphere", "Specific vocabulary style", "Consistent tone"]
  },
  {
    id: 6,
    title: "Genre Study: Senior Python Developer",
    subtitle: "Enforcing Standards through Persona",
    content: "A 'Senior Developer' persona writes robust error handling and maintainable code, not just happy-path implementations.",
    slideImage: slide06,
    codeExample: "def fibonacci_memoized(n: int, memo: dict = {}) -> int:\n  if n < 0:\n    raise ValueError('Input must be non-negative')\n  ...",
    notes: ["Error handling", "Docstrings and types", "Production-quality code"]
  },
  {
    id: 7,
    title: "Domain Expertise",
    subtitle: "Medical, Legal, Financial",
    content: "Domain-specific personas incorporate specialized vocabulary, ethical constraints, and professional standards.",
    slideImage: slide07,
    notes: ["Specialized vocabulary", "Domain ethics", "Professional standards"]
  },
  {
    id: 8,
    title: "Personality Dimensions",
    subtitle: "Tone and Style",
    content: "Controlling personality: formal vs casual, verbose vs concise, confident vs hedging, serious vs humorous.",
    slideImage: slide08,
    notes: ["Formality level", "Verbosity control", "Confidence calibration"]
  },
  {
    id: 9,
    title: "Multi-Persona Systems",
    subtitle: "Collaborative Roles",
    content: "Using multiple personas in conversation: critic reviews, devil's advocate challenges, synthesizer combines perspectives.",
    slideImage: slide09,
    notes: ["Critic role", "Devil's advocate", "Synthesis persona"]
  },
  {
    id: 10,
    title: "Character Consistency",
    subtitle: "Maintaining the Role",
    content: "Techniques for preventing character breaks: strong system prompts, periodic reinforcement, and guardrail examples.",
    slideImage: slide10,
    notes: ["Strong system prompts", "Periodic reinforcement", "Break prevention"]
  },
  {
    id: 11,
    title: "Negative Personas",
    subtitle: "What NOT to Be",
    content: "Defining what the AI should avoid: behaviors, tones, or patterns that conflict with the desired persona.",
    slideImage: slide11,
    notes: ["Avoid behaviors", "Negative examples", "Boundary setting"]
  },
  {
    id: 12,
    title: "Dynamic Role Switching",
    subtitle: "Context-Aware Personas",
    content: "Implementing systems that switch personas based on context, user needs, or task requirements.",
    slideImage: slide12,
    notes: ["Context detection", "Smooth transitions", "Appropriate selection"]
  },
  {
    id: 13,
    title: "Persona Testing",
    subtitle: "Validation Methods",
    content: "Methods for testing persona consistency: character probes, adversarial queries, and consistency metrics.",
    slideImage: slide13,
    notes: ["Character probes", "Adversarial testing", "Consistency metrics"]
  },
  {
    id: 14,
    title: "Cultural Considerations",
    subtitle: "Global Personas",
    content: "Adapting personas for cultural context: language nuances, social norms, and regional expectations.",
    slideImage: slide14,
    notes: ["Language nuances", "Social norms", "Regional adaptation"]
  },
  {
    id: 15,
    title: "From Personas to Agents",
    subtitle: "The Evolution",
    content: "Personas as the foundation for agent identity: combining role-based prompting with tool use and autonomous action.",
    slideImage: slide15,
    notes: ["Agent identity", "Tool integration", "Autonomous action"]
  }
];
