// 1. 만든다

import { createContext, useContext, useState } from "react";

const initialValue = { isLoggedIn: true };
export const AuthContext = createContext(initialValue);

// 2. 사용하다.

// 3. 범위를 지정해서 값을 나려준다.

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
