import Layout from "@/components/Layout";
import AudioPlayer from "@/components/AudioPlayer";
import SlideCarousel from "@/components/SlideCarousel";

const sampleSlides = [
  {
    id: 1,
    title: "The Transformer Architecture",
    content: "Self-attention mechanisms allow the model to weigh the importance of different parts of the input sequence, enabling parallel processing of sequential data.",
  },
  {
    id: 2,
    title: "Attention Is All You Need",
    content: "The groundbreaking 2017 paper that introduced the Transformer architecture, revolutionizing NLP by replacing recurrent layers with attention mechanisms.",
  },
  {
    id: 3,
    title: "Multi-Head Attention",
    content: "Multiple attention heads allow the model to jointly attend to information from different representation subspaces at different positions.",
  },
  {
    id: 4,
    title: "Positional Encoding",
    content: "Since Transformers don't have recurrence, positional encodings are added to give the model information about the position of tokens in the sequence.",
  },
  {
    id: 5,
    title: "Layer Normalization",
    content: "Applied before each sub-layer to stabilize the learning process and enable faster training of deep networks.",
  },
];

const lectures = [
  {
    id: 1,
    title: "Deep Dive: Transformer Architecture",
    subtitle: "Episode 1 • NotebookLM Audio Overview",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Understanding Backpropagation",
    subtitle: "Episode 2 • The Engine of Learning",
    duration: "15:22",
  },
  {
    id: 3,
    title: "RAG Systems in Production",
    subtitle: "Episode 3 • Enterprise Architecture Patterns",
    duration: "18:45",
  },
];

const LecturesPage = () => {
  return (
    <Layout
      title="Audio Lectures"
      subtitle="Listen to deep-dive discussions on AI/ML concepts, generated from NotebookLM Audio Overviews."
      tag="AUDIO LEARNING"
    >
      <div className="space-y-12 animate-fade-in">
        {/* Featured Slides Section */}
        <section>
          <h2 className="font-display font-bold text-xl mb-6 text-foreground">
            Current Slide Deck
          </h2>
          <SlideCarousel slides={sampleSlides} />
        </section>

        {/* Audio Lectures Section */}
        <section>
          <h2 className="font-display font-bold text-xl mb-6 text-foreground">
            Audio Lectures
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lectures.map((lecture) => (
              <AudioPlayer
                key={lecture.id}
                title={lecture.title}
                subtitle={lecture.subtitle}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LecturesPage;
