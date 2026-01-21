import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, Grid, Layers, FlipVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Flashcard from "./Flashcard";
import { cn } from "@/lib/utils";
import type { Flashcard as FlashcardType } from "@/data/flashcards";

interface FlashcardDeckProps {
  cards: FlashcardType[];
  title?: string;
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const FlashcardDeck = ({ cards, title = "Flashcards" }: FlashcardDeckProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState<FlashcardType[]>(cards);
  const [viewMode, setViewMode] = useState<"single" | "grid">("single");
  const [showAnswers, setShowAnswers] = useState(false);
  
  const totalCards = shuffledCards.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const resetDeck = useCallback(() => {
    setCurrentIndex(0);
    setShuffledCards(cards);
    setShowAnswers(false);
  }, [cards]);

  const shuffleDeck = useCallback(() => {
    setShuffledCards(shuffleArray(shuffledCards));
    setCurrentIndex(0);
  }, [shuffledCards]);

  const goToCard = useCallback((index: number) => {
    setCurrentIndex(index);
    setViewMode("single");
  }, []);

  const toggleShowAnswers = useCallback(() => {
    setShowAnswers((prev) => !prev);
  }, []);

  const progress = ((currentIndex + 1) / totalCards) * 100;

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (viewMode === "single") {
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      }
    },
    [goToNext, goToPrevious, viewMode]
  );

  if (cards.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        No flashcards available
      </div>
    );
  }

  const currentCard = shuffledCards[currentIndex];

  return (
    <div
      className="relative flex flex-col min-h-[600px] py-8 px-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* View mode toggle and controls */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Button
          variant={viewMode === "single" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setViewMode("single")}
          className="gap-2"
        >
          <Layers className="h-4 w-4" />
          Single
        </Button>
        <Button
          variant={viewMode === "grid" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setViewMode("grid")}
          className="gap-2"
        >
          <Grid className="h-4 w-4" />
          Grid
        </Button>
        <div className="w-px h-6 bg-border mx-2" />
        <Button
          variant={showAnswers ? "secondary" : "ghost"}
          size="sm"
          onClick={toggleShowAnswers}
          className="gap-2"
        >
          <FlipVertical className="h-4 w-4" />
          {showAnswers ? "Answers" : "Questions"}
        </Button>
        <div className="w-px h-6 bg-border mx-2" />
        <Button
          variant="ghost"
          size="sm"
          onClick={shuffleDeck}
          className="gap-2"
        >
          <Shuffle className="h-4 w-4" />
          Shuffle
        </Button>
      </div>

      {viewMode === "single" ? (
        <>
          {/* Main flashcard area */}
          <div className="flex-1 flex items-center justify-center">
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
                  key={`${currentCard.id}-${showAnswers}`}
                  question={currentCard.question}
                  answer={currentCard.answer}
                  forceFlipped={showAnswers}
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
          </div>

          {/* Progress bar and controls */}
          <div className="mt-auto pt-8 flex items-center justify-center gap-6 max-w-2xl mx-auto w-full">
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
          </div>

          {/* Category badge */}
          {currentCard.category && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <span className="tech-badge">{currentCard.category}</span>
            </div>
          )}
        </>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {shuffledCards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => goToCard(index)}
              className={cn(
                "group text-left bg-card border border-border rounded-lg p-4 min-h-[120px]",
                "hover:border-primary/50 hover:shadow-md transition-all",
                index === currentIndex && "ring-2 ring-primary border-primary"
              )}
            >
              <div className="flex flex-col h-full">
                <span className="text-[10px] font-display text-primary tracking-wider mb-2">
                  #{index + 1} • {card.category}
                </span>
                {showAnswers ? (
                  <p className="text-sm font-semibold text-primary line-clamp-4 flex-1">
                    {card.answer}
                  </p>
                ) : (
                  <p className="text-sm text-foreground line-clamp-4 flex-1">
                    {card.question}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashcardDeck;
