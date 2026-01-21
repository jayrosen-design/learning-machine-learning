import slide01 from "@/assets/course-slides/deep-learning/slide-01.jpg";
import slide02 from "@/assets/course-slides/deep-learning/slide-02.jpg";
import slide03 from "@/assets/course-slides/deep-learning/slide-03.jpg";
import slide04 from "@/assets/course-slides/deep-learning/slide-04.jpg";
import slide05 from "@/assets/course-slides/deep-learning/slide-05.jpg";
import slide06 from "@/assets/course-slides/deep-learning/slide-06.jpg";
import slide07 from "@/assets/course-slides/deep-learning/slide-07.jpg";
import slide08 from "@/assets/course-slides/deep-learning/slide-08.jpg";
import slide09 from "@/assets/course-slides/deep-learning/slide-09.jpg";
import slide10 from "@/assets/course-slides/deep-learning/slide-10.jpg";
import slide11 from "@/assets/course-slides/deep-learning/slide-11.jpg";
import slide12 from "@/assets/course-slides/deep-learning/slide-12.jpg";
import slide13 from "@/assets/course-slides/deep-learning/slide-13.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  slideImage: string;
  codeExample?: string;
  notes?: string[];
}

export const deepLearningModules: Module[] = [
  {
    id: 1,
    title: "Building a Brain from Scratch",
    subtitle: "Anatomy of Deep Learning",
    content: "Artificial Neural Networks are bio-inspired computing systems. This course covers: The Atom (Perceptron), The Pivot (hidden layers), and The Engine (Backpropagation).",
    slideImage: slide01,
    notes: ["The Atom: Perceptron and linearity limits", "The Pivot: Hidden layers solve XOR", "The Engine: Backpropagation enables learning"]
  },
  {
    id: 2,
    title: "Biological vs Mathematical",
    subtitle: "The Inspiration",
    content: "Biological neurons fire spikes along axons when signals exceed a threshold. The Perceptron models firing rate as a continuous number (Rate Code Approximation).",
    slideImage: slide02,
    notes: ["Dendrites → Inputs", "Soma → Activation function", "Axon → Output", "Rate Code simplification"]
  },
  {
    id: 3,
    title: "The Perceptron Algorithm",
    subtitle: "Mathematical Foundation",
    content: "Inputs (x) multiplied by weights (w), summed with bias (b), passed through a step function. Invented by Rosenblatt (1957) for Mark I Perceptron hardware.",
    slideImage: slide03,
    notes: ["Weights: Importance of each input", "Bias: Shifts decision boundary", "Heaviside step function: Binary output"]
  },
  {
    id: 4,
    title: "Linear Classification",
    subtitle: "Slicing the Feature Space",
    content: "The Perceptron is a linear classifier that separates classes with a hyperplane (line in 2D, plane in 3D). Only works for linearly separable data.",
    slideImage: slide04,
    notes: ["Decision boundary: w·x + b = 0", "2D → Line, 3D → Plane, nD → Hyperplane", "Limitation: Linearity"]
  },
  {
    id: 5,
    title: "The XOR Problem",
    subtitle: "Limits of Linearity",
    content: "The XOR affair: Minsky & Papert (1969) proved single perceptrons cannot solve XOR, leading to the first 'AI Winter'. The solution: hidden layers.",
    slideImage: slide05,
    notes: ["AND: Linearly separable (solvable)", "XOR: No single line can separate", "Solution: Hidden layers"]
  },
  {
    id: 6,
    title: "Hidden Layers",
    subtitle: "Breaking the Linear Barrier",
    content: "Adding hidden layers between input and output allows networks to learn non-linear decision boundaries, solving XOR and much more complex problems.",
    slideImage: slide06,
    notes: ["Hidden layers add non-linearity", "MLP: Multilayer Perceptron", "Universal approximation"]
  },
  {
    id: 7,
    title: "Activation Functions",
    subtitle: "Introducing Non-Linearity",
    content: "Activation functions (ReLU, Sigmoid, Tanh) introduce non-linearity, allowing networks to learn complex patterns beyond linear relationships.",
    slideImage: slide07,
    notes: ["ReLU: max(0, x) - most common", "Sigmoid: Squashes to (0,1)", "Tanh: Squashes to (-1,1)"]
  },
  {
    id: 8,
    title: "Forward Propagation",
    subtitle: "Computing Predictions",
    content: "Data flows forward through the network: inputs → hidden layers → outputs. Each layer applies weights, biases, and activation functions.",
    slideImage: slide08,
    notes: ["Layer-by-layer computation", "Matrix multiplication + bias", "Activation at each layer"]
  },
  {
    id: 9,
    title: "The Loss Function",
    subtitle: "Measuring Error",
    content: "The loss function quantifies how wrong predictions are. Common losses: MSE for regression, Cross-Entropy for classification.",
    slideImage: slide09,
    notes: ["MSE: Mean Squared Error", "Cross-Entropy: Classification", "Lower loss = better model"]
  },
  {
    id: 10,
    title: "Backpropagation",
    subtitle: "The Learning Engine",
    content: "Backpropagation uses the chain rule to compute gradients of the loss with respect to each weight, enabling gradient descent to minimize error.",
    slideImage: slide10,
    notes: ["Chain rule application", "Compute gradients layer by layer", "Propagate error backwards"]
  },
  {
    id: 11,
    title: "Gradient Descent",
    subtitle: "Optimizing Weights",
    content: "Gradient descent iteratively updates weights in the direction that reduces loss. Learning rate controls step size.",
    slideImage: slide11,
    notes: ["w = w - lr * gradient", "Learning rate: Step size", "Converges to minimum"]
  },
  {
    id: 12,
    title: "Training Dynamics",
    subtitle: "Epochs, Batches, and Convergence",
    content: "Training involves multiple passes (epochs) through data, using mini-batches for efficiency. Monitoring loss curves reveals convergence.",
    slideImage: slide12,
    notes: ["Epoch: Full pass through data", "Mini-batch: Subset for gradient", "Loss curves show progress"]
  },
  {
    id: 13,
    title: "From Perceptrons to Transformers",
    subtitle: "The Path Forward",
    content: "The principles established here—layers, activations, backpropagation—scale to modern architectures like Transformers with billions of parameters.",
    slideImage: slide13,
    notes: ["Same principles at scale", "Transformers use attention", "Billions of parameters"]
  }
];
