/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut as logOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object from Firebase
  const [refetch, setRefetch] = useState();
  const [loading, setLoading] = useState(true);

  const updateUser = (user) => {
    setUser(user);
  };
  const signOut = () => {
    setUser(null);
    logOut(auth);
    setLoading(false);
    Cookies.remove("token");
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe;
    };
  }, [refetch]);

  const value = {
    updateUser,
    user,
    loading,
    setUser,
    setLoading,
    signOut,
    setRefetch,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
