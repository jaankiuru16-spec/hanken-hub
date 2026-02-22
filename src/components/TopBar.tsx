import { Moon, Sun, LogOut } from "lucide-react";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { isDark, toggle } = useThemeToggle();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between h-12 px-4 max-w-lg mx-auto">
        <span className="text-base font-bold tracking-tight text-foreground">
          Hanken Connect
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-foreground" /> : <Moon className="w-4 h-4 text-foreground" />}
          </button>
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Log out"
          >
            <LogOut className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
