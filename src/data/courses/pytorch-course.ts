// Slide imports for PyTorch course
import slide01 from "@/assets/course-slides/pytorch/slide-01.jpg";
import slide02 from "@/assets/course-slides/pytorch/slide-02.jpg";
import slide03 from "@/assets/course-slides/pytorch/slide-03.jpg";
import slide04 from "@/assets/course-slides/pytorch/slide-04.jpg";
import slide05 from "@/assets/course-slides/pytorch/slide-05.jpg";
import slide06 from "@/assets/course-slides/pytorch/slide-06.jpg";
import slide07 from "@/assets/course-slides/pytorch/slide-07.jpg";
import slide08 from "@/assets/course-slides/pytorch/slide-08.jpg";
import slide09 from "@/assets/course-slides/pytorch/slide-09.jpg";
import slide10 from "@/assets/course-slides/pytorch/slide-10.jpg";
import slide11 from "@/assets/course-slides/pytorch/slide-11.jpg";
import slide12 from "@/assets/course-slides/pytorch/slide-12.jpg";
import slide13 from "@/assets/course-slides/pytorch/slide-13.jpg";
import slide14 from "@/assets/course-slides/pytorch/slide-14.jpg";
import slide15 from "@/assets/course-slides/pytorch/slide-15.jpg";

export interface Module {
  id: number;
  title: string;
  subtitle?: string;
  slideImage: string;
  content: string;
  codeExample?: string;
  notes?: string[];
}

export const pytorchModules: Module[] = [
  {
    id: 1,
    title: "Building the Neural Network",
    subtitle: "A Mechanic's Guide to PyTorch",
    slideImage: slide01,
    content: "From Tensors to Training Loops—Mastering the Mechanics of Deep Learning.",
    notes: ["Based on PyTorch 2.10 Documentation"]
  },
  {
    id: 2,
    title: "The Five Pillars of the PyTorch Ecosystem",
    slideImage: slide02,
    content: "PyTorch is modular; we build separate components and wire them together to create a learning system.",
    notes: [
      "1. Tensors (The Atomic Unit)",
      "2. Datasets & Loaders (Logistics)",
      "3. The Model (nn.Module)",
      "4. Loss & Optimizers (Navigation)",
      "5. Training Loop (Ignition)"
    ]
  },
  {
    id: 3,
    title: "Tensors are the atomic unit of deep learning",
    slideImage: slide03,
    content: "Optimized for GPU acceleration and Automatic Differentiation (Autograd)",
    codeExample: `x_data = torch.tensor([[[1, 2], [3, 4]]])

# Moving to hardware accelerator
if torch.cuda.is_available():
    tensor = tensor.to('cuda')`,
    notes: [
      "Standard Array (NumPy): Stores data in memory. CPU bound.",
      "PyTorch Tensor: Optimized for GPU acceleration and Automatic Differentiation (Autograd)"
    ]
  },
  {
    id: 4,
    title: "Manipulating the raw material",
    slideImage: slide04,
    content: "PyTorch offers over 1200 operations to reshape and modify tensors.",
    codeExample: `# Matrix Multiplication
y = tensor @ tensor.T

# In-place operation (saves memory)
tensor.add_(5)`,
    notes: [
      "Slicing: Indexing data (e.g., tensor[:, 0])",
      "Joining: Concatenating along dimensions (torch.cat)",
      "Arithmetic: Matrix multiplication (matmul)",
      "Warning: In-place operations (denoted by the '_' suffix) save memory but can cause history loss during derivative computation."
    ]
  },
  {
    id: 5,
    title: "The Dataset class decouples storage from logic",
    slideImage: slide05,
    content: "Encapsulate data retrieval in torch.utils.data.Dataset. Must implement three methods.",
    codeExample: `def __getitem__(self, idx):
    img_path = os.path.join(self.img_dir, self.labels.iloc[idx, 0])
    image = decode_image(img_path)  # Convert to tensor
    return image, label`,
    notes: [
      "__init__: Initializes directories and transforms",
      "__len__: Returns the size of the dataset",
      "__getitem__: Loads and returns a sample/label from a specific index"
    ]
  },
  {
    id: 6,
    title: "DataLoaders manage the logistics of delivery",
    slideImage: slide06,
    content: "The DataLoader wraps the dataset to provide efficient batch minibatches, shuffling, and multiprocessing.",
    codeExample: `train_dataloader = DataLoader(training_data, batch_size=64, shuffle=True)

# Returns a batch of 64 features and 64 labels
train_features, train_labels = next(iter(train_dataloader))`,
    notes: [
      "batch_size=64: Samples propagated before parameter update",
      "shuffle=True: Randomizes order to reduce overfitting"
    ]
  },
  {
    id: 7,
    title: "Transforms prepare raw data for the engine",
    slideImage: slide07,
    content: "ToTensor converts PIL images or NumPy arrays into FloatTensors. Normalize adjusts values for effective training.",
    codeExample: `transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])`,
    notes: [
      "ToTensor: Converts PIL images or NumPy arrays into FloatTensors",
      "Normalize: Adjusts values (e.g., mean 0.5, std 0.5) for effective training"
    ]
  },
  {
    id: 8,
    title: "The nn.Module is the blueprint for every network",
    slideImage: slide08,
    content: "Every neural network in PyTorch subclasses nn.Module.",
    codeExample: `def __init__(self):              def forward(self, x):
    super().__init__()               x = self.flatten(x)
    self.flatten = nn.Flatten()      return self.stack(x)
    self.stack = nn.Linear(28*28, 512)`,
    notes: [
      "__init__ (The Inventory): Define the layers and components",
      "forward (The Flow): Define how data moves through the layers"
    ]
  },
  {
    id: 9,
    title: "Assembling the layers",
    slideImage: slide09,
    content: "Building blocks for neural network architecture.",
    codeExample: `hidden = nn.ReLU()(hidden)  # Introduces non-linearity`,
    notes: [
      "nn.Flatten: Unrolls multidimensional input into a 1D array",
      "nn.Linear: Applies transformation y = xA^T + b",
      "nn.ReLU: Introduces non-linearity to learn complex patterns"
    ]
  },
  {
    id: 10,
    title: "Organizing stack and interpreting output",
    slideImage: slide10,
    content: "nn.Sequential is an ordered container. Data passes through modules in the order defined.",
    codeExample: `logits = model(x)  # Call model instance, NOT model.forward()
pred_probab = nn.Softmax(dim=1)(logits)`,
    notes: [
      "The model outputs Logits (raw scores)",
      "CRUCIAL: Do not call 'model.forward(x)' directly. Calling 'model(x)' handles necessary background hooks."
    ]
  },
  {
    id: 11,
    title: "The Goal: Loss Functions",
    slideImage: slide11,
    content: "You cannot improve what you cannot measure. The loss function calculates the distance between model's prediction and the truth.",
    codeExample: `loss = loss_fn(prediction, label)`,
    notes: [
      "nn.CrossEntropyLoss: For Classification tasks. Combines LogSoftmax and NLLLoss.",
      "nn.MSELoss: Mean Squared Error. For Regression tasks."
    ]
  },
  {
    id: 12,
    title: "The Navigator: Optimizers",
    slideImage: slide12,
    content: "The optimizer adjusts model parameters to reduce the loss.",
    notes: [
      "Learning Rate: Step size. Too small = slow; too big = unstable.",
      "Momentum: Accelerates gradients in the right direction.",
      "SGD: Stochastic Gradient Descent. Explicit and controllable.",
      "Adam / RMSprop: Adaptive algorithms. Often converge faster."
    ]
  },
  {
    id: 13,
    title: "The Training Loop: The heartbeat of learning",
    slideImage: slide13,
    content: "The five-step process that drives neural network learning.",
    codeExample: `# 1. Reset
optimizer.zero_grad()
# 2. Forward
pred = model(x)
# 3. Measure
loss = loss_fn(pred, y)
# 4. Backward
loss.backward()
# 5. Update
optimizer.step()`,
    notes: [
      "Reset: Clear previous gradients",
      "Forward: Pass data through the model",
      "Measure: Calculate the loss",
      "Backward: Compute gradients",
      "Update: Adjust parameters"
    ]
  },
  {
    id: 14,
    title: "Validation checks if the model is learning or memorizing",
    slideImage: slide14,
    content: "Distinguishing between learning and memorization through evaluation.",
    codeExample: `with torch.no_grad():
    for X, y in dataloader:
        pred = model(X)
        test_loss += loss_fn(pred, y).item()`,
    notes: [
      "Training Mode (model.train()): Tracks gradients",
      "Evaluation Mode (model.eval()): Disables Dropout/Batch Norm specific behaviors",
      "Context Manager (torch.no_grad()): Disables gradient calculation to save memory"
    ]
  },
  {
    id: 15,
    title: "PyTorch provides the tools; you provide the blueprint.",
    slideImage: slide15,
    content: "Deep learning is an iterative process of guessing, measuring error, and adjusting. PyTorch simply standardizes the mechanics.",
    notes: [
      "1. Data: Wrapped in Dataset, delivered by DataLoader",
      "2. Architecture: Defined in nn.Module",
      "3. Logic: The forward pass",
      "4. Correction: loss_fn and optimizer"
    ]
  }
];
