import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("is_verified");

    if (isVerified) {
      setIsLoggedIn(true);
    }
  }, []);
  const logInHandler = () => {
    localStorage.setItem("is_verified", 1);
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    localStorage.removeItem("is_verified");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: logInHandler,
        onLogout: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
