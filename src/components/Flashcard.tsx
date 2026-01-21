import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlashcardProps {
  question: string;
  answer: string;
  className?: string;
  forceFlipped?: boolean;
}

const Flashcard = ({ question, answer, className, forceFlipped }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Sync with forceFlipped prop when it changes
  useEffect(() => {
    if (forceFlipped !== undefined) {
      setIsFlipped(forceFlipped);
    }
  }, [forceFlipped]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={cn(
        "flashcard-container w-[500px] min-w-[400px] aspect-[16/10] cursor-pointer",
        className
      )}
      onClick={handleFlip}
    >
      <div className={cn("flashcard-inner", isFlipped && "flipped")}>
        {/* Front Face - Question */}
        <div className="flashcard-face glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center glow-primary">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
            {question}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-6 gap-2 text-muted-foreground hover:text-primary"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(true);
            }}
          >
            <ExternalLink className="w-4 h-4" />
            See answer
          </Button>
        </div>

        {/* Back Face - Answer */}
        <div className="flashcard-face flashcard-back glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center glow-primary">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-success/10 to-transparent pointer-events-none" />
          <span className="text-xs font-display text-muted-foreground mb-4 tracking-wider uppercase">
            Answer
          </span>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            {answer}
          </p>
          <button
            className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            ← Back to question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
