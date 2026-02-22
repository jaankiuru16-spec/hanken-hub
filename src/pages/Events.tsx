import { useState } from "react";
import { events, type HankenEvent } from "@/data/events";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const categories = [
  { key: "all", label: "All" },
  { key: "hanken", label: "Hanken" },
  { key: "shs", label: "SHS" },
  { key: "club", label: "Clubs" },
] as const;

const Events = () => {
  const [filter, setFilter] = useState<string>("all");

  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = filter === "all" ? sorted : sorted.filter((e) => e.category === filter);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-4">Events</h1>

      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setFilter(c.key)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              filter === c.key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-foreground text-sm">{event.title}</h3>
                <p className="text-xs text-muted-foreground">{event.organizer}</p>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                event.category === "hanken" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                event.category === "shs" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" :
                "bg-green-500/10 text-green-600 dark:text-green-400"
              }`}>
                {event.category === "shs" ? "SHS" : event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formatDate(event.date)} · {event.time}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
