import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, GraduationCap, Briefcase, BookOpen } from "lucide-react";

type Role = "student" | "alumni" | "faculty";

const roleOptions: { role: Role; label: string; icon: React.ElementType; desc: string }[] = [
  { role: "student", label: "Student", icon: GraduationCap, desc: "Currently studying at Hanken" },
  { role: "alumni", label: "Alumni", icon: Briefcase, desc: "Graduated from Hanken" },
  { role: "faculty", label: "Faculty", icon: BookOpen, desc: "Teaching or staff at Hanken" },
];

const Signup = () => {
  const [step, setStep] = useState<"role" | "form">("role");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [phone, setPhone] = useState("");
  const [shareContact, setShareContact] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;
    signup(
      {
        firstName, lastName, email, role: selectedRole,
        linkedIn: linkedIn || undefined,
        phone: phone || undefined,
        shareContact: selectedRole === "alumni" ? shareContact : undefined,
        country: selectedRole === "alumni" ? country : undefined,
        city: selectedRole === "alumni" ? city : undefined,
      },
      password
    );
    navigate("/home", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background px-6 py-8 max-w-lg mx-auto">
      <button
        onClick={() => step === "form" ? setStep("role") : navigate("/")}
        className="flex items-center gap-1 text-primary text-sm font-medium mb-6 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <AnimatePresence mode="wait">
        {step === "role" && (
          <motion.div
            key="role"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-foreground mb-1">Join Hanken Connect</h1>
            <p className="text-muted-foreground text-sm mb-8">Select your role to get started.</p>

            <div className="flex flex-col gap-3">
              {roleOptions.map((opt) => (
                <button
                  key={opt.role}
                  onClick={() => handleRoleSelect(opt.role)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <opt.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{opt.label}</p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Sign up as {selectedRole && selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
            </h1>
            <p className="text-muted-foreground text-sm mb-6">Fill in your details below.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  required value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                />
                <input
                  required value={lastName} onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <input
                required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                required type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)}
                placeholder="LinkedIn URL (optional)" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number (optional)" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
              />

              {selectedRole === "alumni" && (
                <div className="p-4 rounded-xl bg-accent/50 flex flex-col gap-3">
                  <p className="text-xs font-medium text-accent-foreground">Alumni Connect</p>
                  <input
                    value={country} onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country" className="h-10 px-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                  <input
                    value={city} onChange={(e) => setCity(e.target.value)}
                    placeholder="City" className="h-10 px-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox" checked={shareContact} onChange={(e) => setShareContact(e.target.checked)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-foreground">
                      Share my contact on the Alumni Connect board
                    </span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="h-12 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors mt-2"
              >
                Create Account
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Signup;
