// Slide imports for Machinery of Thought course
import slide01 from "@/assets/course-slides/machinery/slide-01.jpg";
import slide02 from "@/assets/course-slides/machinery/slide-02.jpg";
import slide03 from "@/assets/course-slides/machinery/slide-03.jpg";
import slide04 from "@/assets/course-slides/machinery/slide-04.jpg";
import slide05 from "@/assets/course-slides/machinery/slide-05.jpg";
import slide06 from "@/assets/course-slides/machinery/slide-06.jpg";
import slide07 from "@/assets/course-slides/machinery/slide-07.jpg";
import slide08 from "@/assets/course-slides/machinery/slide-08.jpg";
import slide09 from "@/assets/course-slides/machinery/slide-09.jpg";
import slide10 from "@/assets/course-slides/machinery/slide-10.jpg";
import slide11 from "@/assets/course-slides/machinery/slide-11.jpg";
import slide12 from "@/assets/course-slides/machinery/slide-12.jpg";
import slide13 from "@/assets/course-slides/machinery/slide-13.jpg";
import slide14 from "@/assets/course-slides/machinery/slide-14.jpg";
import slide15 from "@/assets/course-slides/machinery/slide-15.jpg";

import type { Module } from "./pytorch-course";

export const machineryModules: Module[] = [
  {
    id: 1,
    title: "The Machinery of Thought",
    subtitle: "From Probabilistic Autocomplete to System 2 Reasoning",
    slideImage: slide01,
    content: "Generative AI is often mistaken for an omniscient retrieval system. In reality, it is a dual-process engine. This deck deconstructs the anatomy of Large Language Models (LLMs) and Diffusion Models.",
    notes: ["Moving from intuitive 'System 1' mechanics to 'System 2' reasoning capabilities unlocked through advanced prompting"]
  },
  {
    id: 2,
    title: "Constructing, Not Retrieving",
    slideImage: slide02,
    content: "The Randomness Factor: Because models sample from a distribution, outputs are stochastic. This is the engine of creativity, but the enemy of consistency.",
    notes: [
      "Discriminative Models: Classifies existing data, maps input to a specific label",
      "Generative Models: Learns underlying probability distributions, samples to construct new artifacts",
      "A model might generate a perfect dog, or an abstract representation, depending on the roll of the probabilistic dice"
    ]
  },
  {
    id: 3,
    title: "The Sophisticated Autocomplete",
    subtitle: "Next-Token Prediction",
    slideImage: slide03,
    content: "Key Concept: Autoregression. Transformers process data in chunks called tokens. The model iteratively calculates the probability of the next token based strictly on the sequence of previous tokens.",
    notes: [
      "It is a cascading chain of probability, not a database query",
      "Each token is predicted based on all previous tokens",
      "The model answers based on statistical likelihood"
    ]
  },
  {
    id: 4,
    title: "Sculpting Images from Noise",
    slideImage: slide04,
    content: "The Diffusion Mechanism: Unlike the 'next token' logic of text, image models act like a 'magic eraser.' They construct coherent visuals by sculpting them out of random static.",
    notes: [
      "Trained by systematically destroying images with noise and learning to reverse the process",
      "Text conditioning guides the denoising toward specific visual outcomes",
      "Google DeepMind: Diffusion and Flow Matching models are mathematically equivalent"
    ]
  },
  {
    id: 5,
    title: "The Education of an Algorithm",
    slideImage: slide05,
    content: "Two-phase training: Pre-training for broad world knowledge, Post-training for alignment.",
    notes: [
      "Phase 1 - Pre-training: Goal is Next-Token Prediction, Result is Broad World Knowledge",
      "Phase 2 - SFT: Supervised Fine-Tuning encourages the model to mimic a gold-standard dataset",
      "Phase 2 - RLHF: Reinforcement Learning encourages sequences that are 'preferred'"
    ]
  },
  {
    id: 6,
    title: "Aligning Intent: SFT vs. RLHF",
    slideImage: slide06,
    content: "Two complementary approaches to alignment: mimicry through instruction tuning, and preference optimization through reward modeling.",
    notes: [
      "Supervised Fine-Tuning (SFT): Goal is Mimicry via instruction tuning on gold-standard datasets",
      "Result: The model learns how to chat, translate, and format",
      "RLHF: Goal is Preference via reward modeling based on human ranking",
      "Result: The model optimizes for helpfulness, safety, and nuance"
    ]
  },
  {
    id: 7,
    title: "System 1 vs. System 2",
    subtitle: "Mapping Kahneman's Psychology to AI",
    slideImage: slide07,
    content: "The cognitive architecture of AI mirrors human dual-process theory: fast intuition vs. slow deliberation.",
    notes: [
      "System 1 (Intuition): Fast, automatic, associative, prone to error",
      "AI Equivalent: Standard Prompting - immediate statistical likelihood",
      "System 2 (Reasoning): Slow, deliberate, logical, calculating",
      "AI Equivalent: Chain-of-Thought Prompting - forced intermediate steps"
    ]
  },
  {
    id: 8,
    title: "Chain-of-Thought Elicits Reasoning",
    slideImage: slide08,
    content: "Intermediate reasoning steps restructure the processing path, leading to correct answers where direct prompting fails.",
    codeExample: `// Standard Prompt (System 1) - INCORRECT
Q: The cafeteria had 23 apples...
A: The answer is 27 ❌

// Chain-of-Thought (System 2) - CORRECT  
Q: The cafeteria had 23 apples...
A: 23 - 20 = 3, then 3 + 6 = 9 ✓`,
    notes: [
      "Source: Wei et al., Google Research",
      "Direct leap based on probability often fails on multi-step problems",
      "Explicit reasoning steps force accurate calculation"
    ]
  },
  {
    id: 9,
    title: "The Emergence of Reason",
    slideImage: slide09,
    content: "Chain-of-Thought is an 'emergent ability.' Only at ~100B+ parameters does the model acquire the semantic coherence to maintain a logical thread.",
    notes: [
      "Reasoning capabilities are unlocked only at scale",
      "Small models produce fluent but illogical chains",
      "8B → 62B → 540B shows dramatic improvement with CoT",
      "Standard prompting shows minimal gains with scale"
    ]
  },
  {
    id: 10,
    title: "Anatomy of an Error",
    slideImage: slide10,
    content: "Sufficient Scale + Explicit Steps = Reliable Logic. Scaling from 62B to 540B parameters significantly reduces 'One Step Missing' errors.",
    notes: [
      "Semantic Errors: The model fails to grasp the nuance of the scenario",
      "One Step Missing: The model identifies the logic but skips a crucial calculation",
      "The Scale Fix: Larger models maintain complete reasoning chains"
    ]
  },
  {
    id: 11,
    title: "Prompting is Programming",
    subtitle: "Navigating Latent Space",
    slideImage: slide11,
    content: "We are not asking the AI; we are hacking the probability distribution to steer the model.",
    notes: [
      "Models translate inputs into a fixed point in 'Latent Space'",
      "Latent Space: A multi-dimensional map of all learned concepts",
      "Seed (Random Integer): Sets the starting universe",
      "Prompt (Text): Vectors the trajectory"
    ]
  },
  {
    id: 12,
    title: "Engineering Thought (Text)",
    subtitle: "Few-Shot CoT Exemplars",
    slideImage: slide12,
    content: "The Exemplars serve as a template. The model mimics the structure of the reasoning provided in the examples to solve the new problem.",
    codeExample: `// PROMPT STRUCTURE:
Exemplar 1:
Q: [Input Question]
A: [Step-by-step reasoning] -> [Answer]

Exemplar 2:
Q: [Input Question]  
A: [Step-by-step reasoning] -> [Answer]

Task:
Q: [New Unseen Question]
A: [Model generates reasoning here...]`,
    notes: ["The model mimics the structure of reasoning provided in examples"]
  },
  {
    id: 13,
    title: "Engineering Aesthetics (Image)",
    subtitle: "Prompt = Frame + Subject + Style (+ Seed)",
    slideImage: slide13,
    content: "Structured prompting for image generation: Frame dictates texture, Subject defines content, Style influences atmosphere.",
    notes: [
      "Frame (The Medium): Oil Painting, Polaroid, 3D Render - dictates texture and borders",
      "Subject (The Content): Keep to 1-2 subjects to avoid composition failures",
      "Style (The Vibe): Cyberpunk, Surrealist, Cinematic Lighting",
      "Changing the Frame drastically alters output while preserving the Subject"
    ]
  },
  {
    id: 14,
    title: "Beyond Generation: Editing & Extending",
    slideImage: slide14,
    content: "Advanced image manipulation techniques that leverage the model's understanding of visual coherence.",
    notes: [
      "Inpainting (Smart Erase): Generates new content within a masked region",
      "References surrounding pixels to match lighting and perspective",
      "Outpainting (Extending the Canvas): Generates coherent scenes beyond original borders",
      "Maintains the style of the seed image"
    ]
  },
  {
    id: 15,
    title: "The Conductor",
    slideImage: slide15,
    content: "Generative AI is a biological mimic. Left to its own devices, it defaults to 'System 1'—fast, probabilistic, and prone to hallucination. You are the conductor.",
    notes: [
      "By utilizing Chain-of-Thought (for text) and Structured Framing (for images), you force the model to slow down and compute",
      "The reliability of the output is strictly defined by the structure of your input",
      "You are not asking the AI—you are programming it"
    ]
  }
];
