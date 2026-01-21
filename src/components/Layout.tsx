import { Link, useLocation } from "react-router-dom";
import { Network, GraduationCap, Layers, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  tag?: string;
}

const navItems = [
  { title: "Courses", url: "/", icon: GraduationCap },
  { title: "Flashcards", url: "/flashcards", icon: Layers },
];

const Layout = ({ children, title, subtitle, tag }: LayoutProps) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shrink-0">
              <Network className="w-4 h-4" />
            </div>
            <h1 className="font-display font-bold text-lg tracking-tight text-foreground">
              Learning ML
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.url || 
                (item.url === "/" && location.pathname.startsWith("/course/"));
              return (
                <Link
                  key={item.title}
                  to={item.url}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative blueprint-grid">
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/30 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-primary/30 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-primary/30 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/30 pointer-events-none" />

        {/* Page header */}
        {title && (
          <div className="px-6 md:px-12 pt-8 pb-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                {tag && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tech-badge">{tag}</span>
                    <span className="text-muted-foreground text-xs font-display">v2.10.4</span>
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="px-6 md:px-12 pb-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
