"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

interface AuthContextProps {
  userInfo: userContextData | null;
  setUserInfo: (userInfo: userContextData | null) => void;
  isActivated: boolean | null;
  setIsActivated: (isPublicView: boolean) => void;
}

interface userContextData {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  token: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // _State
  const [userInfo, setUserInfo] = useState<userContextData | null>(null);
  const [isActivated, setIsActivated] = useState<boolean | null>(null);

  if (typeof window !== "undefined") {
    // นี่คือบริบทที่รันบนเว็บเบราว์เซอร์
    const token = localStorage.getItem("auth_token");
    if (token) {
      // ตั้งค่า Authorization Header ใน Axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      // กรณีที่ไม่มี Token
      console.error("No token found in Local Storage");
    }
  }

  // _Effect
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users/me/");
        setUserInfo(response.data);
        setIsActivated(true);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []); // ทำงานเพียงครั้งเมื่อ Component ถูก mount

  // useEffect(() => {
  //   if (isActivated === false) {
  //     localStorage.removeItem("auth_token");
  //   }
  // }, [isActivated]);

  // console.log(isActivated);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isActivated,
        setIsActivated,
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
