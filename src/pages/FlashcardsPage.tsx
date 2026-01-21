import Layout from "@/components/Layout";
import FlashcardDeck from "@/components/FlashcardDeck";
import { flashcardsData } from "@/data/flashcards";

const FlashcardsPage = () => {
  return (
    <Layout
      title="Flashcard Deck"
      subtitle="Test your knowledge with 80 AI/ML concept flashcards. Click a card to reveal the answer."
      tag="STUDY MODE"
    >
      <FlashcardDeck cards={flashcardsData} />
    </Layout>
  );
};

export default FlashcardsPage;
