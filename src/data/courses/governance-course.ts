import slide01 from "@/assets/course-slides/governance/slide-01.jpg";
import slide02 from "@/assets/course-slides/governance/slide-02.jpg";
import slide03 from "@/assets/course-slides/governance/slide-03.jpg";
import slide04 from "@/assets/course-slides/governance/slide-04.jpg";
import slide05 from "@/assets/course-slides/governance/slide-05.jpg";
import slide06 from "@/assets/course-slides/governance/slide-06.jpg";
import slide07 from "@/assets/course-slides/governance/slide-07.jpg";
import slide08 from "@/assets/course-slides/governance/slide-08.jpg";
import slide09 from "@/assets/course-slides/governance/slide-09.jpg";
import slide10 from "@/assets/course-slides/governance/slide-10.jpg";
import slide11 from "@/assets/course-slides/governance/slide-11.jpg";
import slide12 from "@/assets/course-slides/governance/slide-12.jpg";
import slide13 from "@/assets/course-slides/governance/slide-13.jpg";
import slide14 from "@/assets/course-slides/governance/slide-14.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const governanceModules: Module[] = [
  {
    id: 1,
    title: "GenAI Practice & Governance",
    subtitle: "From Precision Engineering to Global Oversight",
    content: "A practitioner's guide to workflows, application, and oversight. Synthesized from OpenAI, NIST, UNESCO, and practical application guides.",
    slideImage: slide01,
    notes: ["Precision Engineering", "Practical Application", "Rigorous Oversight"]
  },
  {
    id: 2,
    title: "From Chat to Agentic Ecosystems",
    subtitle: "The Engineering Shift",
    content: "Success no longer depends on a single prompt. It requires integrating advanced prompting, rigorous testing, and adherence to global safety standards.",
    slideImage: slide02,
    notes: ["Structured Planning with Tool Use", "Complex System Prompts and TDD", "NIST SSDF Profiles and UNESCO Ethics"]
  },
  {
    id: 3,
    title: "Engineering Eager Agents",
    subtitle: "The GPT-4.1 Shift",
    content: "Moving from passive chatbots to active problem solvers requires explicit system instructions covering persistence, tool-calling, and planning.",
    slideImage: slide03,
    notes: ["Persistence: Prevent premature hand-offs", "Tool-calling: Reduce hallucinations via verification", "Planning: Enforce reflection before action"]
  },
  {
    id: 4,
    title: "Steerability and Context Management",
    subtitle: "Strategies for Long Context",
    content: "Managing long context (1M tokens) requires placing instructions at both beginning and end, using XML tags over JSON, and implementing Chain of Thought reasoning.",
    slideImage: slide04,
    notes: ["Place instructions at start AND end of context", "Use XML tags over JSON for parsing", "Implement Chain of Thought reasoning"]
  },
  {
    id: 5,
    title: "Prompt Architecture",
    subtitle: "Building Robust System Prompts",
    content: "A well-structured system prompt includes identity, instructions, examples, and guardrails to ensure consistent and reliable agent behavior.",
    slideImage: slide05,
    notes: ["Define clear identity and role", "Provide explicit instructions", "Include examples and guardrails"]
  },
  {
    id: 6,
    title: "Tool Integration",
    subtitle: "Function Calling Best Practices",
    content: "Effective tool use requires clear tool definitions, proper error handling, and structured output formats to enable reliable agent actions.",
    slideImage: slide06,
    notes: ["Clear tool definitions", "Proper error handling", "Structured output formats"]
  },
  {
    id: 7,
    title: "Testing Agentic Systems",
    subtitle: "Test-Driven Development for AI",
    content: "Applying TDD principles to AI systems: unit testing prompts, integration testing tool chains, and end-to-end testing of agent workflows.",
    slideImage: slide07,
    notes: ["Unit testing for prompts", "Integration testing for tool chains", "E2E testing for workflows"]
  },
  {
    id: 8,
    title: "Error Handling Patterns",
    subtitle: "Graceful Degradation",
    content: "Building resilient agents requires anticipating failures, implementing fallback strategies, and maintaining user trust through transparent error communication.",
    slideImage: slide08,
    notes: ["Anticipate common failures", "Implement fallback strategies", "Communicate errors transparently"]
  },
  {
    id: 9,
    title: "NIST AI Risk Management",
    subtitle: "Framework Overview",
    content: "The NIST AI RMF provides a structured approach to identifying, assessing, and mitigating AI risks across the development lifecycle.",
    slideImage: slide09,
    notes: ["Govern: Establish policies", "Map: Identify risks", "Measure: Assess impact", "Manage: Mitigate risks"]
  },
  {
    id: 10,
    title: "UNESCO AI Ethics",
    subtitle: "Global Ethical Standards",
    content: "UNESCO's Recommendation on AI Ethics establishes global standards for human rights, transparency, and accountability in AI systems.",
    slideImage: slide10,
    notes: ["Human rights protection", "Transparency requirements", "Accountability frameworks"]
  },
  {
    id: 11,
    title: "Compliance Frameworks",
    subtitle: "Regulatory Landscape",
    content: "Navigating the evolving regulatory landscape including EU AI Act, NIST guidelines, and industry-specific requirements.",
    slideImage: slide11,
    notes: ["EU AI Act requirements", "NIST SSDF profiles", "Industry-specific regulations"]
  },
  {
    id: 12,
    title: "Monitoring & Observability",
    subtitle: "Production Oversight",
    content: "Implementing comprehensive monitoring for AI systems including performance metrics, safety signals, and user feedback loops.",
    slideImage: slide12,
    notes: ["Performance metrics", "Safety signal detection", "User feedback integration"]
  },
  {
    id: 13,
    title: "Incident Response",
    subtitle: "When Things Go Wrong",
    content: "Establishing protocols for AI incidents including detection, response, communication, and post-incident review processes.",
    slideImage: slide13,
    notes: ["Incident detection", "Response protocols", "Post-incident review"]
  },
  {
    id: 14,
    title: "The Path Forward",
    subtitle: "Responsible Innovation",
    content: "Balancing innovation with responsibility requires ongoing commitment to safety, ethics, and continuous improvement in AI systems.",
    slideImage: slide14,
    notes: ["Continuous improvement", "Safety-first mindset", "Ethical responsibility"]
  }
];
