import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  return (
    <userContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
