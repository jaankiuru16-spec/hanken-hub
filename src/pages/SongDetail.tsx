import { useParams, useNavigate } from "react-router-dom";
import { songs } from "@/data/songs";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const SongDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const song = songs.find((s) => String(s.id) === id);

  if (!song) {
    return (
      <div className="px-4 py-8 text-center">
        <p className="text-muted-foreground">Song not found.</p>
        <button onClick={() => navigate("/songbook")} className="text-primary text-sm mt-2">Back to Songbook</button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <button
        onClick={() => navigate("/songbook")}
        className="flex items-center gap-1 text-primary text-sm font-medium mb-4 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" /> Songbook
      </button>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-lg">
            #{song.id}
          </span>
          <h1 className="text-xl font-bold text-foreground">{song.title}</h1>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border">
          <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">
            {song.lyrics}
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default SongDetail;
