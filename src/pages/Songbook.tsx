import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { songs } from "@/data/songs";
import { motion } from "framer-motion";

const Songbook = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const sorted = [...songs].sort((a, b) => a.title.localeCompare(b.title));
  const filtered = sorted.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-4">Songbook</h1>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search songs..."
          className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

      <div className="flex flex-col">
        {filtered.map((song, i) => (
          <motion.button
            key={song.id}
            onClick={() => navigate(`/songbook/${song.id}`)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02 }}
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-secondary/60 transition-colors text-left"
          >
            <span className="w-8 text-xs font-medium text-muted-foreground text-right shrink-0">
              {song.id}
            </span>
            <span className="text-sm font-medium text-foreground">{song.title}</span>
          </motion.button>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">No songs found.</p>
        )}
      </div>
    </div>
  );
};

export default Songbook;
