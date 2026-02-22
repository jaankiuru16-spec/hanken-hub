import { useNavigate, useLocation } from "react-router-dom";
import { Music, PlayCircle, Calendar, Users, Home } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { path: "/home", icon: Home, label: "Home" },
  { path: "/songbook", icon: Music, label: "Songbook" },
  { path: "/classics", icon: PlayCircle, label: "Classics" },
  { path: "/events", icon: Calendar, label: "Events" },
  { path: "/connect", icon: Users, label: "Connect" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const isActive = location.pathname.startsWith(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="relative flex flex-col items-center justify-center gap-0.5 w-16 h-full transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-px left-3 right-3 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                className={`w-5 h-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
