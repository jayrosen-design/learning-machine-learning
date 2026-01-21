import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, ArrowLeft, List, Grid } from "lucide-react";
import { cn } from "@/lib/utils";
import { pytorchModules, type Module } from "@/data/courses/pytorch-course";
import { coursesData } from "@/data/flashcards";

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slide" | "grid">("slide");

  // Get course data based on courseId
  const course = coursesData.find((c) => c.id === Number(courseId));
  
  // For now, only PyTorch course has modules
  const modules = courseId === "1" ? pytorchModules : [];

  const totalModules = modules.length;
  const currentModule = modules[currentModuleIndex];
  const progress = ((currentModuleIndex + 1) / totalModules) * 100;

  const goToNext = useCallback(() => {
    setCurrentModuleIndex((prev) => Math.min(prev + 1, totalModules - 1));
  }, [totalModules]);

  const goToPrevious = useCallback(() => {
    setCurrentModuleIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToModule = useCallback((index: number) => {
    setCurrentModuleIndex(index);
    setViewMode("slide");
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === "slide") {
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, viewMode]);

  if (!course) {
    return (
      <Layout title="Course Not Found">
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-muted-foreground mb-4">This course doesn't exist.</p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </Layout>
    );
  }

  if (modules.length === 0) {
    return (
      <Layout title={course.title} subtitle={course.description} tag={course.tag}>
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-muted-foreground mb-4">Course content coming soon.</p>
          <Button variant="outline" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={course.title} subtitle={course.description} tag={course.tag}>
      <div className="space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Courses
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "slide" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("slide")}
              className="h-8 w-8"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="h-8 w-8"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {viewMode === "slide" ? (
          /* Slide View */
          <div className="space-y-6">
            {/* Main Slide Display */}
            <div className="relative bg-card border border-border rounded-lg overflow-hidden">
              {/* Slide Image */}
              <div className="aspect-[16/9] w-full relative">
                <img
                  src={currentModule.slideImage}
                  alt={currentModule.title}
                  className="w-full h-full object-contain bg-[#f5f5f0]"
                />
                
                {/* Navigation Overlays */}
                <button
                  onClick={goToPrevious}
                  disabled={currentModuleIndex === 0}
                  className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full",
                    "bg-background/80 backdrop-blur-sm border border-border",
                    "flex items-center justify-center transition-all",
                    "hover:bg-background hover:border-primary/50",
                    currentModuleIndex === 0 && "opacity-30 cursor-not-allowed"
                  )}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  disabled={currentModuleIndex === totalModules - 1}
                  className={cn(
                    "absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full",
                    "bg-background/80 backdrop-blur-sm border border-border",
                    "flex items-center justify-center transition-all",
                    "hover:bg-background hover:border-primary/50",
                    currentModuleIndex === totalModules - 1 && "opacity-30 cursor-not-allowed"
                  )}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm text-foreground text-sm px-3 py-1.5 rounded-full font-display border border-border/50">
                  {currentModuleIndex + 1} / {totalModules}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <Progress value={progress} className="flex-1 h-2" />
              <span className="text-sm font-display text-muted-foreground whitespace-nowrap">
                {Math.round(progress)}% Complete
              </span>
            </div>

            {/* Module Info */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-display text-primary tracking-wider uppercase">
                    Module {currentModuleIndex + 1}
                  </span>
                  <h2 className="text-2xl font-display font-bold text-foreground mt-1">
                    {currentModule.title}
                  </h2>
                  {currentModule.subtitle && (
                    <p className="text-lg text-muted-foreground mt-1">
                      {currentModule.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground">{currentModule.content}</p>

              {/* Code Example */}
              {currentModule.codeExample && (
                <div className="bg-surface rounded-lg p-4 border border-border">
                  <pre className="text-sm font-mono text-foreground overflow-x-auto">
                    <code>{currentModule.codeExample}</code>
                  </pre>
                </div>
              )}

              {/* Notes */}
              {currentModule.notes && currentModule.notes.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-border">
                  <h4 className="text-sm font-display font-medium text-foreground">
                    Key Points
                  </h4>
                  <ul className="space-y-1">
                    {currentModule.notes.map((note, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={goToPrevious}
                disabled={currentModuleIndex === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Module
              </Button>
              <Button
                onClick={goToNext}
                disabled={currentModuleIndex === totalModules - 1}
              >
                Next Module
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          /* Grid View - Module Overview */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => goToModule(index)}
                className={cn(
                  "group text-left bg-card border border-border rounded-lg overflow-hidden",
                  "hover:border-primary/50 transition-all",
                  index === currentModuleIndex && "ring-2 ring-primary"
                )}
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-surface">
                  <img
                    src={module.slideImage}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-display text-primary tracking-wider">
                    Module {index + 1}
                  </span>
                  <h3 className="text-sm font-medium text-foreground line-clamp-2 mt-0.5">
                    {module.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CoursePage;
