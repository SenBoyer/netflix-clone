import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <userContext.Provider
      value={{ token, setToken, user, setUser, isMobile, setIsMobile }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
