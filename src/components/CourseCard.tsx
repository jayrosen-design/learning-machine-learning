import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  description: string;
  moduleCount: number;
  progress: number;
  status: "not-started" | "in-progress" | "completed" | "locked";
  tag?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const CourseCard = ({
  title,
  description,
  moduleCount,
  progress,
  status,
  tag,
  imageUrl,
  onClick,
}: CourseCardProps) => {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";
  const isInProgress = status === "in-progress";

  return (
    <div
      className={cn(
        "course-card group",
        isLocked && "opacity-60 cursor-not-allowed",
        !isLocked && "cursor-pointer"
      )}
      onClick={isLocked ? undefined : onClick}
    >
      {/* Thumbnail area */}
      <div className="aspect-video w-full overflow-hidden bg-surface border-b border-border relative">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        
        {isLocked ? (
          <div className="w-full h-full flex items-center justify-center">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-lg bg-primary/20" />
            </div>
          </div>
        )}

        {/* Module count badge */}
        <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded font-display border border-border/50">
          {isLocked ? "Upcoming" : `${moduleCount} Modules`}
        </div>

        {/* Status badge */}
        {(isInProgress || isCompleted) && (
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider",
                isCompleted
                  ? "bg-success text-success-foreground"
                  : "bg-primary text-primary-foreground"
              )}
            >
              {isCompleted ? "Completed" : "In Progress"}
            </span>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tag */}
        {tag && (
          <span className="text-[10px] font-display font-bold text-primary tracking-wider mb-2">
            {tag}
          </span>
        )}

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {description}
        </p>

        {/* Progress section */}
        <div className="mt-auto pt-4 border-t border-dashed border-border">
          {isLocked ? (
            <button
              className="w-full py-1 text-xs font-medium text-center border border-border rounded text-muted-foreground cursor-not-allowed"
              disabled
            >
              Available Soon
            </button>
          ) : (
            <>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="font-medium text-muted-foreground">Progress</span>
                <span
                  className={cn(
                    "font-display",
                    isCompleted
                      ? "text-success"
                      : progress > 0
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {progress}%
                </span>
              </div>
              <Progress
                value={progress}
                className={cn(
                  "h-1.5",
                  isCompleted && "[&>div]:bg-success"
                )}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
