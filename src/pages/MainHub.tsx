import { useNavigate } from "react-router-dom";
import { Music, PlayCircle, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const sections = [
  { path: "/songbook", icon: Music, label: "Songbook", desc: "Traditional Hanken songs", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { path: "/classics", icon: PlayCircle, label: "Classics", desc: "Iconic Hanken videos", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  { path: "/events", icon: Calendar, label: "Events", desc: "Upcoming happenings", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
  { path: "/connect", icon: Users, label: "Connect", desc: "Alumni & job board", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
];

const MainHub = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-sm text-muted-foreground mb-1">
          Hi, {user?.firstName || "there"} 👋
        </p>
        <div className="p-4 rounded-2xl bg-accent/50 mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            Your all-in-one hub for students, alumni, and faculty of Hanken — songs, events, videos, and a community that stays connected.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {sections.map((s, i) => (
          <motion.button
            key={s.path}
            onClick={() => navigate(s.path)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-start p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-left"
          >
            <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
              <s.icon className="w-5 h-5" />
            </div>
            <p className="font-semibold text-foreground text-sm">{s.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MainHub;
