/* eslint-disable react/prop-types */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState();
  const [isEmail, setIsEmail] = useState("");

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe;
    };
  }, [refetch]);

  const updateUser = (user) => {
    setUser(user);
  };

  const signOutUser = () => {
    signOut(auth);
    setUser(null);
    setLoading(false);
    Cookies.remove("isLoggedIn");
  };
  const value = {
    updateUser,
    user,
    loading,
    setUser,
    setLoading,
    signOutUser,
    isEmail,
    setIsEmail,
    setRefetch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
