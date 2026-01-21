import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { GraduationCap, Layers, PlayCircle, BarChart3, Settings, Moon, Sun, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { title: "Courses", url: "/", icon: GraduationCap },
  { title: "Flashcards", url: "/flashcards", icon: Layers },
  { title: "Lectures", url: "/lectures", icon: PlayCircle },
  { title: "Progress", url: "/progress", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
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
    <Sidebar className={cn("border-r border-sidebar-border", collapsed ? "w-14" : "w-64")}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shrink-0">
            <Network className="w-4 h-4" />
          </div>
          {!collapsed && (
            <h1 className="font-display font-bold text-lg tracking-tight text-sidebar-foreground">
              NeuroLearn
            </h1>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={cn(
                          "nav-link",
                          isActive && "nav-link-active"
                        )}
                      >
                        <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {/* User info */}
        <div className={cn("flex items-center gap-3 mb-4", collapsed && "justify-center")}>
          <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">
            AE
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-sidebar-foreground">Alex Engineer</span>
              <span className="text-[10px] text-muted-foreground">Pro Member</span>
            </div>
          )}
        </div>

        {/* Theme toggle */}
        <Button
          variant="outline"
          size={collapsed ? "icon" : "sm"}
          className={cn(
            "gap-2 text-muted-foreground hover:text-sidebar-foreground",
            !collapsed && "w-full justify-start"
          )}
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {!collapsed && <span>Toggle Theme</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
