import { useState } from "react";
import { motion } from "framer-motion";
import { alumni } from "@/data/alumni";
import { jobs } from "@/data/jobs";
import { Linkedin, Mail, Phone, MapPin, ExternalLink, Briefcase } from "lucide-react";

const jobTypes = [
  { key: "all", label: "All" },
  { key: "full-time", label: "Full-time" },
  { key: "part-time", label: "Part-time" },
  { key: "club", label: "Clubs" },
  { key: "school", label: "School" },
  { key: "research", label: "Research" },
] as const;

const Connect = () => {
  const [tab, setTab] = useState<"alumni" | "jobs">("alumni");
  const [countryFilter, setCountryFilter] = useState("all");
  const [jobFilter, setJobFilter] = useState("all");

  const countries = ["all", ...Array.from(new Set(alumni.map((a) => a.country))).sort()];
  const filteredAlumni = countryFilter === "all" ? alumni : alumni.filter((a) => a.country === countryFilter);
  const filteredJobs = jobFilter === "all" ? jobs : jobs.filter((j) => j.type === jobFilter);

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-4">Connect</h1>

      {/* Tab Toggle */}
      <div className="flex bg-secondary rounded-xl p-1 mb-5">
        <button
          onClick={() => setTab("alumni")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === "alumni" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
        >
          Alumni
        </button>
        <button
          onClick={() => setTab("jobs")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === "jobs" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
        >
          Job Board
        </button>
      </div>

      {tab === "alumni" && (
        <>
          <div className="mb-4 overflow-x-auto pb-1">
            <div className="flex gap-2">
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => setCountryFilter(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    countryFilter === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {c === "all" ? "All Countries" : c}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filteredAlumni.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="p-4 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{a.firstName} {a.lastName}</h3>
                    {a.currentRole && (
                      <p className="text-xs text-muted-foreground">{a.currentRole} at {a.company}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                    Class of {a.graduationYear}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3 h-3" /> {a.city}, {a.country}
                </div>
                <div className="flex items-center gap-3">
                  <a href={`mailto:${a.email}`} className="flex items-center gap-1 text-xs text-primary hover:underline">
                    <Mail className="w-3 h-3" /> Email
                  </a>
                  {a.linkedIn && (
                    <a href={a.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-primary hover:underline">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </a>
                  )}
                  {a.phone && (
                    <a href={`tel:${a.phone}`} className="flex items-center gap-1 text-xs text-primary hover:underline">
                      <Phone className="w-3 h-3" /> Call
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {tab === "jobs" && (
        <>
          <div className="mb-4 overflow-x-auto pb-1">
            <div className="flex gap-2">
              {jobTypes.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setJobFilter(t.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    jobFilter === t.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="p-4 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-foreground text-sm">{job.title}</h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    job.type === "full-time" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                    job.type === "part-time" ? "bg-orange-500/10 text-orange-600 dark:text-orange-400" :
                    job.type === "research" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" :
                    job.type === "school" ? "bg-green-500/10 text-green-600 dark:text-green-400" :
                    "bg-pink-500/10 text-pink-600 dark:text-pink-400"
                  }`}>
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Briefcase className="w-3 h-3" /> {job.company} · {job.location}
                </div>
                <p className="text-xs text-muted-foreground">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Connect;
