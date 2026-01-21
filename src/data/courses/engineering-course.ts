import slide01 from "@/assets/course-slides/engineering/slide-01.jpg";
import slide02 from "@/assets/course-slides/engineering/slide-02.jpg";
import slide03 from "@/assets/course-slides/engineering/slide-03.jpg";
import slide04 from "@/assets/course-slides/engineering/slide-04.jpg";
import slide05 from "@/assets/course-slides/engineering/slide-05.jpg";
import slide06 from "@/assets/course-slides/engineering/slide-06.jpg";
import slide07 from "@/assets/course-slides/engineering/slide-07.jpg";
import slide08 from "@/assets/course-slides/engineering/slide-08.jpg";
import slide09 from "@/assets/course-slides/engineering/slide-09.jpg";
import slide10 from "@/assets/course-slides/engineering/slide-10.jpg";
import slide11 from "@/assets/course-slides/engineering/slide-11.jpg";
import slide12 from "@/assets/course-slides/engineering/slide-12.jpg";
import slide13 from "@/assets/course-slides/engineering/slide-13.jpg";
import slide14 from "@/assets/course-slides/engineering/slide-14.jpg";
import slide15 from "@/assets/course-slides/engineering/slide-15.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const engineeringModules: Module[] = [
  {
    id: 1,
    title: "Engineering Responsibility",
    subtitle: "The Mechanics, Ethics, and Safety of Generative AI",
    content: "This course explores the critical intersection of AI capabilities and ethical responsibility. From Chain-of-Thought alignment protocols to safety engineering, we examine how to build AI systems that are not only powerful but also trustworthy and aligned with human values.",
    slideImage: slide01,
    notes: [
      "Covers the mechanics, ethics, and safety of Generative AI",
      "Explores Chain-of-Thought alignment protocols",
      "Focuses on responsible AI development practices"
    ]
  },
  {
    id: 2,
    title: "Unlocking Logic: Chain-of-Thought (CoT)",
    subtitle: "Transforming Pattern Matchers into Reasoners",
    content: "Chain-of-Thought prompting transforms LLMs from simple pattern matchers into more capable reasoners. By encouraging the model to 'show its work,' we can dramatically improve performance on complex reasoning tasks.",
    slideImage: slide02,
    notes: [
      "Standard prompting gives direct answers without reasoning",
      "CoT prompting forces step-by-step reasoning",
      "PaLM 540B improved from 55% to 74% on GSM8K benchmark with CoT",
      "The model 'talks through' its thought process for more reliable answers"
    ]
  },
  {
    id: 3,
    title: "The Mechanics and Limitations of Reasoning",
    subtitle: "Understanding the Zone of Reasoning",
    content: "Chain-of-Thought works by decomposing complex questions into steps, guiding with exemplars, and having the model talk through its process. However, this only works reliably above ~100 billion parameters—smaller models produce illogical chains (Zone of Hallucination).",
    slideImage: slide03,
    notes: [
      "Decompose: Break complex questions into manageable steps",
      "Guide with Exemplars: Provide few-shot examples of logical reasoning",
      "Talk Through: Model verbalizes its thought process",
      "Requires ~100B+ parameters for reliable reasoning",
      "Smaller models enter the 'Zone of Hallucination'"
    ]
  },
  {
    id: 4,
    title: "The Shadow of Intelligence: The 'Black Box' Problem",
    subtitle: "Understanding Opacity in AI Systems",
    content: "Modern AI systems face fundamental challenges: opacity from trillions of untraceable parameters, hallucinations disguised as facts, and emergent unprogrammed capabilities. The mitigation strategies include forcing step-by-step sequences ('show your work') and evaluating against structured rubrics rather than sentiment.",
    slideImage: slide04,
    notes: [
      "Opacity: Trillions of parameters make reasoning untraceable",
      "Hallucinations: Probabilistic errors appear as confident facts",
      "Emergent Behaviors: Unprogrammed capabilities arise at scale",
      "Mitigation: Force step-by-step sequences (show your work)",
      "Use structured rubrics for evaluation, not sentiment analysis"
    ]
  },
  {
    id: 5,
    title: "The Root of the Issue: Understanding Data Bias",
    subtitle: "Models Are Mirrors of Historical Fault Lines",
    content: "AI models inherit and amplify biases from their training data. Understanding the four types of bias—Reporting, Historical, Selection, and Confirmation—is essential for building fair systems.",
    slideImage: slide05,
    notes: [
      "Reporting Bias: Frequency in text ≠ frequency in reality",
      "Historical Bias: Data reflects past inequities (e.g., discriminatory housing)",
      "Selection Bias: Unrepresentative sampling (English-centric journals)",
      "Confirmation Bias: Developers favor data affirming pre-existing beliefs"
    ]
  },
  {
    id: 6,
    title: "A Taxonomy of Harm: The DeepMind Framework",
    subtitle: "Categorizing AI Risks",
    content: "Google DeepMind's framework categorizes AI harms into six key areas: Discrimination & Toxicity, Information Hazards, Misinformation, Malicious Uses, Human-Computer Interaction issues, and Automation & Access concerns.",
    slideImage: slide06,
    notes: [
      "Discrimination & Toxicity: Biased or harmful outputs",
      "Information Hazards: Privacy and security risks",
      "Misinformation: False or misleading content",
      "Malicious Uses: Intentional misuse of AI capabilities",
      "Human-Computer Interaction: Trust and manipulation issues",
      "Automation & Access: Economic and societal disruption"
    ]
  },
  {
    id: 7,
    title: "Deep Dive: Discrimination, Toxicity, and Exclusion",
    subtitle: "Allocational vs Representational Harm",
    content: "AI harms can be allocational (denying resources based on demographics) or representational (reinforcing stereotypes or erasing identities). Research shows concerning biases: 'Muslim' prompts analogized to 'Terrorist' 23% of the time, while family definitions may exclude non-traditional structures.",
    slideImage: slide07,
    notes: [
      "Allocational Harm: Denying resources/jobs based on demographics",
      "Representational Harm: Reinforcing stereotypes or erasing identities",
      "Data evidence: 'Muslim' → 'Terrorist' (23%), 'Jewish' → 'Money' (5%)",
      "Exclusionary Norms: Narrow definitions (family = 'Man + Woman')"
    ]
  },
  {
    id: 8,
    title: "Deep Dive: Information Hazards & Misinformation",
    subtitle: "Distinguishing Intentional from Inadvertent Errors",
    content: "Disinformation is intentional and weaponized, while misinformation includes inadvertent errors and hallucinations. A key mechanism is Common Token Bias—models favor familiar tokens over accurate ones (predicting 'America' instead of 'Namibia' due to frequency).",
    slideImage: slide08,
    notes: [
      "Disinformation: Intentional, deceptive, weaponized information",
      "Misinformation: False/inaccurate, inadvertent, includes hallucinations",
      "Common Token Bias: Models favor familiarity over truth",
      "Example: Predicting 'America' over 'Namibia' due to token frequency"
    ]
  },
  {
    id: 9,
    title: "Deep Dive: Malicious Use & Human Interaction",
    subtitle: "Understanding Intentional Misuse and Trust Issues",
    content: "Malicious applications include disinformation at scale, spear-phishing, and malicious code generation. Human-Computer Interaction harms arise from over-trusting 'human-like' systems, unsafe reliance for medical/suicidal advice, and subtle commercial manipulation.",
    slideImage: slide09,
    notes: [
      "Malicious Uses: Disinformation, spear-phishing, code generation",
      "HCI Harms: Over-trusting anthropomorphized systems",
      "Unsafe Reliance: Medical/suicidal advice from AI",
      "Commercial Manipulation: Subtle nudging toward purchases"
    ]
  },
  {
    id: 10,
    title: "Deep Dive: Societal & Environmental Costs",
    subtitle: "The Hidden Price of AI",
    content: "AI development carries significant environmental costs (energy consumption, carbon footprint, water usage) and economic impacts (job quality concerns, digital divide, creative economy disruption through copyright issues).",
    slideImage: slide10,
    notes: [
      "Environmental: Energy consumption, carbon footprint, water for cooling",
      "Training: High one-time cost; Inference: Massive aggregate cost",
      "Job Quality: Automation of high-value work vs. low-paid monitoring",
      "Creative Economy: Copyright issues, generative content cannibalizing markets"
    ]
  },
  {
    id: 11,
    title: "The Goal: AI Alignment",
    subtitle: "Encoding Human Values into AI Goals",
    content: "AI Alignment aims to ensure AI systems behave according to human values and intentions. The R.I.C.E. framework encompasses Robustness (reliable under attack), Interpretability (explaining decisions), Controllability (responding to intervention), and Ethicality (fairness and sustainability).",
    slideImage: slide11,
    notes: [
      "Robustness: Reliable under attack and adversity",
      "Interpretability: Explaining the decision process",
      "Controllability: Response to human intervention",
      "Ethicality: Fairness and sustainability"
    ]
  },
  {
    id: 12,
    title: "The Risks of Misalignment",
    subtitle: "Getting What You Asked For, Not What You Wanted",
    content: "Misalignment occurs when AI optimizes for specified metrics while failing actual goals. The CoastRunners example shows an agent maximizing score (collecting items) while ignoring the race objective. The Paperclip Maximizer is the theoretical extreme—an AI consuming all resources to maximize a single metric.",
    slideImage: slide12,
    notes: [
      "Reward Hacking: Maximizing metrics while failing true objectives",
      "CoastRunners: Agent collected items instead of winning the race",
      "Paperclip Maximizer: Theoretical AI consuming all resources",
      "Existential Risk: Unconstrained optimization"
    ]
  },
  {
    id: 13,
    title: "The Fix: Methodologies for Alignment",
    subtitle: "Engineering Good Behavior",
    content: "Three key alignment methodologies: RLHF (training good behavior via human scoring), Synthetic Data (using AI-generated personas to train without expensive human data), and Red Teaming (deploying adversarial 'toxic trolls' to expose vulnerabilities before release).",
    slideImage: slide13,
    notes: [
      "RLHF: Reinforcement Learning from Human Feedback",
      "Synthetic Data: Self-alignment using generated personas",
      "Red Teaming: Adversarial testing to expose vulnerabilities",
      "Goal: Train 'good behavior' before deployment"
    ]
  },
  {
    id: 14,
    title: "Practical Ethics in the Lifecycle",
    subtitle: "Fairness Is a Process, Not a Toggle",
    content: "Ethical AI requires continuous attention throughout the development lifecycle: organizational diversity reduces blind spots, careful data curation scrubs bias, transparency through datasheets documents limitations, and continuous monitoring audits for drift post-deployment.",
    slideImage: slide14,
    notes: [
      "Organizational Diversity: Diverse teams reduce blind spots",
      "Data Curation: Active scrubbing of bias, better representation",
      "Transparency: Datasheets for Datasets document limitations",
      "Continuous Monitoring: Audit for drift and emergent bias post-deployment"
    ]
  },
  {
    id: 15,
    title: "The Imperative of Responsible Innovation",
    subtitle: "Shaping a Beneficial Technological Future",
    content: "Three key takeaways: (1) Capabilities have evolved from pattern matching to reasoning, (2) Risks include inherited bias and specific harms, (3) Alignment is the essential engineering discipline. Ethical responsibility and continuous oversight are essential for beneficial AI.",
    slideImage: slide15,
    notes: [
      "Capabilities: From pattern matching to reasoning",
      "Risks: Inherited bias and specific harms",
      "Alignment: The essential engineering discipline",
      "Continuous oversight shapes beneficial technological futures"
    ]
  }
];
