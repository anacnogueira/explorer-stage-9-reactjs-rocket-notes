import { createContext, useContext } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ email: "anacnogueira@gmail.com" }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
