"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { BASEURL } from "@/constant/constant";

interface AuthContextProps {
  userInfo: userContextData | null;
  setUserInfo: (userInfo: userContextData | null) => void;
  isActivated: boolean | null;
  setIsActivated: (isPublicView: boolean) => void;
  fetchUserInfo: () => Promise<void>;
}

interface userContextData {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // _State
  const [userInfo, setUserInfo] = useState<userContextData | null>(null);
  const [isActivated, setIsActivated] = useState<boolean | null>(null);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/user/`);
      setUserInfo(response.data);
      setIsActivated(true);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");

    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      fetchUserInfo();
    } else {
      console.error("No token found in Local Storage");
    }
  }, []);

  // useEffect(() => {
  //   if (isActivated === false) {
  //     localStorage.removeItem("auth_token");
  //   }
  // }, [isActivated]);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isActivated,
        setIsActivated,
        fetchUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a AuthProvider");
  }

  return context;
};
