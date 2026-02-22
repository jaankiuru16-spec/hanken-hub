import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useThemeToggle } from "@/hooks/useThemeToggle";

const Landing = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { isDark, toggle } = useThemeToggle();

  useEffect(() => {
    if (isLoggedIn) navigate("/home", { replace: true });
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background relative">
      <button
        onClick={toggle}
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center"
      >
        {/* Logo */}
        <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-6 shadow-lg">
          <span className="text-4xl font-bold text-primary-foreground">H</span>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-2 tracking-tight">Hanken Connect</h1>
        <p className="text-muted-foreground text-sm mb-10 max-w-xs">
          Your community hub for students, alumni, and faculty of Hanken School of Economics.
        </p>

        <div className="w-full max-w-xs flex flex-col gap-3">
          <button
            onClick={() => navigate("/login")}
            className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="w-full h-12 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-base hover:bg-secondary/80 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
