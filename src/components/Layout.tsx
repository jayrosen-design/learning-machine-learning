import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  tag?: string;
  showSearch?: boolean;
}

const Layout = ({ children, title, subtitle, tag, showSearch = false }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <main className="flex-1 relative blueprint-grid">
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/30 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-primary/30 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-primary/30 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/30 pointer-events-none" />

          {/* Header */}
          <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="h-8 w-8" />
              
              <div className="flex-1" />

              {showSearch && (
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search modules..."
                      className="pl-9 w-64 bg-background"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </header>

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
    </SidebarProvider>
  );
};

export default Layout;
