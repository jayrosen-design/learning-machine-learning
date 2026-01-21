import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Flashcard from "./Flashcard";
import type { Flashcard as FlashcardType } from "@/data/flashcards";

interface FlashcardDeckProps {
  cards: FlashcardType[];
  title?: string;
}

const FlashcardDeck = ({ cards, title = "Flashcards" }: FlashcardDeckProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const resetDeck = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  const progress = ((currentIndex + 1) / totalCards) * 100;

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [goToNext, goToPrevious]
  );

  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        No flashcards available
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[600px] py-8 px-4 glow-ambient"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Main flashcard area */}
      <div className="relative flex items-center justify-center w-full max-w-4xl gap-6 md:gap-12 px-4">
        {/* Previous button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Card container with stacked effect */}
        <div className="relative">
          {/* Background cards for stack effect */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90%] h-full bg-card/30 rounded-2xl border border-border/30" />
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[80%] h-full bg-card/20 rounded-2xl border border-border/20" />
          
          {/* Main card */}
          <Flashcard
            key={currentCard.id}
            question={currentCard.question}
            answer={currentCard.answer}
          />
        </div>

        {/* Next button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/50 transition-all"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress bar and controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 flex items-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={resetDeck}
          title="Reset deck"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>

        <div className="flex-1">
          <Progress value={progress} className="h-1.5" />
        </div>

        <span className="text-sm font-display text-muted-foreground whitespace-nowrap">
          {currentIndex + 1} / {totalCards} cards
        </span>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          title="Download deck"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>

      {/* Category badge */}
      {currentCard.category && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <span className="tech-badge">{currentCard.category}</span>
        </div>
      )}
    </div>
  );
};

export default FlashcardDeck;
