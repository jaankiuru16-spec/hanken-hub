import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/home", { replace: true });
    } else {
      setError("No account found with that email. Please sign up first.");
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-8 max-w-lg mx-auto">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1 text-primary text-sm font-medium mb-6 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back</h1>
        <p className="text-muted-foreground text-sm mb-8">Log in to Hanken Connect.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="Email" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            required type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }}
            placeholder="Password" className="h-12 px-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary outline-none"
          />
          {error && <p className="text-destructive text-xs">{error}</p>}
          <button
            type="submit"
            className="h-12 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
          >
            Log In
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
