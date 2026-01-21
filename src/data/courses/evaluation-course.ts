import slide01 from "@/assets/course-slides/evaluation/slide-01.jpg";
import slide02 from "@/assets/course-slides/evaluation/slide-02.jpg";
import slide03 from "@/assets/course-slides/evaluation/slide-03.jpg";
import slide04 from "@/assets/course-slides/evaluation/slide-04.jpg";
import slide05 from "@/assets/course-slides/evaluation/slide-05.jpg";
import slide06 from "@/assets/course-slides/evaluation/slide-06.jpg";
import slide07 from "@/assets/course-slides/evaluation/slide-07.jpg";
import slide08 from "@/assets/course-slides/evaluation/slide-08.jpg";
import slide09 from "@/assets/course-slides/evaluation/slide-09.jpg";
import slide10 from "@/assets/course-slides/evaluation/slide-10.jpg";
import slide11 from "@/assets/course-slides/evaluation/slide-11.jpg";
import slide12 from "@/assets/course-slides/evaluation/slide-12.jpg";
import slide13 from "@/assets/course-slides/evaluation/slide-13.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const evaluationModules: Module[] = [
  {
    id: 1,
    title: "GenAI Evaluation Methods",
    subtitle: "A Practitioner's Toolkit",
    content: "A comprehensive guide to moving from strict, deterministic metrics to nuanced, LLM-based judgments for evaluating generative AI models.",
    slideImage: slide01,
    notes: ["Exact Match to LLM Judge", "Text, Code, and Subjective quality", "Practical implementation"]
  },
  {
    id: 2,
    title: "The Evaluation Paradox",
    subtitle: "Measuring Probabilistic Outputs",
    content: "Traditional unit testing fails for GenAI: deterministic software has binary Pass/Fail, but GenAI outputs are probabilistic and nuanced.",
    slideImage: slide02,
    notes: ["Deterministic: Binary outcomes", "GenAI: Probabilistic, varied", "Three pillars: Text, Code, Subjective"]
  },
  {
    id: 3,
    title: "Exact Match",
    subtitle: "The Strict Standard",
    content: "The simplest metric: check if output is perfectly identical to reference. Normalize case and whitespace. Best for MCQ, classification, strict formatting.",
    slideImage: slide03,
    codeExample: "def exact_match(pred, label):\n  return int(normalize(pred) == normalize(label))",
    notes: ["Perfect identity check", "Normalize before comparing", "Best for rigid tasks"]
  },
  {
    id: 4,
    title: "ROUGE: Lexical Similarity",
    subtitle: "Measuring Overlap",
    content: "ROUGE measures word overlap rather than perfect identity. ROUGE-1 for n-gram overlap, ROUGE-L for longest common subsequence.",
    slideImage: slide04,
    codeExample: "from evaluate import load\nrouge = load('rouge')\nresults = rouge.compute(predictions=[pred], references=[label])",
    notes: ["Recall-Oriented metric", "N-gram overlap (ROUGE-1)", "Best for summarization/translation"]
  },
  {
    id: 5,
    title: "Semantic Similarity",
    subtitle: "Meaning Beyond Words",
    content: "ROUGE fails when words differ but meaning is identical. Embeddings capture semantic meaning, enabling cosine similarity comparison.",
    slideImage: slide05,
    notes: ["Embeddings capture meaning", "Cosine similarity comparison", "Handles paraphrases"]
  },
  {
    id: 6,
    title: "BLEU Score",
    subtitle: "Translation Quality",
    content: "BLEU quantifies text quality by comparing n-gram overlap between generated and reference translations, with brevity penalty.",
    slideImage: slide06,
    notes: ["N-gram precision", "Brevity penalty", "Standard for translation"]
  },
  {
    id: 7,
    title: "Code Evaluation: Pass@k",
    subtitle: "Functional Correctness",
    content: "Pass@k measures the probability that at least one of the top k generated code samples passes unit tests.",
    slideImage: slide07,
    notes: ["Generate k samples", "Run unit tests", "Measure pass rate"]
  },
  {
    id: 8,
    title: "Code Evaluation: Syntax & Logic",
    subtitle: "Beyond Execution",
    content: "Evaluating code quality beyond execution: syntax checking, logical correctness, style compliance, and security analysis.",
    slideImage: slide08,
    notes: ["Syntax validation", "Logic verification", "Style and security"]
  },
  {
    id: 9,
    title: "LLM-as-a-Judge",
    subtitle: "AI Evaluating AI",
    content: "Using a stronger LLM to grade the performance and output of another model, enabling evaluation of subjective qualities.",
    slideImage: slide09,
    notes: ["Stronger model grades output", "Rubric-based scoring", "Handles subjectivity"]
  },
  {
    id: 10,
    title: "Designing Rubrics",
    subtitle: "Structured Evaluation",
    content: "Creating effective rubrics for LLM judges: clear criteria, scoring guidelines, and calibration examples.",
    slideImage: slide10,
    notes: ["Clear criteria definition", "Numerical or categorical scores", "Calibration examples"]
  },
  {
    id: 11,
    title: "Human Evaluation",
    subtitle: "The Gold Standard",
    content: "Human evaluation remains the gold standard for subjective qualities. Design considerations: annotator training, inter-rater reliability, bias mitigation.",
    slideImage: slide11,
    notes: ["Annotator guidelines", "Inter-rater agreement", "Bias awareness"]
  },
  {
    id: 12,
    title: "Building Eval Pipelines",
    subtitle: "Production Systems",
    content: "Implementing automated evaluation pipelines: dataset management, metric computation, regression detection, and continuous monitoring.",
    slideImage: slide12,
    notes: ["Automated pipelines", "Regression detection", "Continuous monitoring"]
  },
  {
    id: 13,
    title: "Evaluation Best Practices",
    subtitle: "Putting It Together",
    content: "Combining metrics strategically: use exact match for factual, semantic for meaning, LLM-judge for reasoning, human eval for final validation.",
    slideImage: slide13,
    notes: ["Multi-metric approach", "Task-appropriate selection", "Continuous improvement"]
  }
];
