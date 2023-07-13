import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: "Matheus",
    uid: "57845547772783727",
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
