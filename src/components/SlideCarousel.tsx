import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
}

interface SlideCarouselProps {
  slides: Slide[];
  className?: string;
}

const SlideCarousel = ({ slides, className }: SlideCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsGridView(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setIsGridView(false);
    },
    [goToNext, goToPrevious]
  );

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        No slides available
      </div>
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={cn("relative", className)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Grid view overlay */}
      {isGridView && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-lg">All Slides</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsGridView(false)}
              >
                <Maximize2 className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={cn(
                    "aspect-video rounded-lg border overflow-hidden transition-all hover:ring-2 hover:ring-primary",
                    index === currentIndex && "ring-2 ring-primary"
                  )}
                  onClick={() => goToSlide(index)}
                >
                  <div className="w-full h-full bg-surface flex flex-col items-center justify-center p-4">
                    <span className="text-xs font-display text-muted-foreground mb-2">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-center line-clamp-2">
                      {slide.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main slide view */}
      <div className="relative bg-card border border-border rounded-xl overflow-hidden">
        {/* Slide content */}
        <div className="aspect-video relative">
          {currentSlide.imageUrl ? (
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-surface blueprint-grid flex flex-col items-center justify-center p-8 text-center">
              {/* Decorative corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/50" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-primary/50" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-primary/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/50" />

              <span className="tech-badge mb-4">
                Slide {currentIndex + 1} of {slides.length}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {currentSlide.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                {currentSlide.content}
              </p>
            </div>
          )}
        </div>

        {/* Navigation overlay */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
          {/* Slide dots */}
          <div className="flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <div className="w-px h-4 bg-border" />

          {/* Grid view toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsGridView(true)}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="mt-4 text-center">
        <span className="text-sm font-display text-muted-foreground">
          {currentIndex + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default SlideCarousel;
