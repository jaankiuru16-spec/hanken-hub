import { classics } from "@/data/classics";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Classics = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-4">Classics</h1>
      <p className="text-sm text-muted-foreground mb-6">Iconic Hanken videos through the years.</p>

      <div className="flex flex-col gap-4">
        {classics.map((video, i) => (
          <motion.a
            key={video.id}
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video bg-secondary">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-foreground ml-1" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground text-sm">{video.title}</h3>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              </div>
              {video.year && <span className="text-xs text-muted-foreground">{video.year}</span>}
              <p className="text-xs text-muted-foreground mt-1">{video.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Classics;
