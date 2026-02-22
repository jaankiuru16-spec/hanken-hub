import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: "student" | "alumni" | "faculty";
  linkedIn?: string;
  phone?: string;
  shareContact?: boolean;
  country?: string;
  city?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (user: User, password: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("hanken_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email: string, _password: string) => {
    const stored = localStorage.getItem("hanken_users");
    const users: Array<User & { password: string }> = stored ? JSON.parse(stored) : [];
    const found = users.find((u) => u.email === email);
    if (found) {
      const { password: _, ...userData } = found;
      setUser(userData);
      localStorage.setItem("hanken_user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (userData: User, password: string) => {
    const stored = localStorage.getItem("hanken_users");
    const users = stored ? JSON.parse(stored) : [];
    users.push({ ...userData, password });
    localStorage.setItem("hanken_users", JSON.stringify(users));
    setUser(userData);
    localStorage.setItem("hanken_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hanken_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
