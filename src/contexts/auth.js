import { createContext, useState, useContext } from "react";

import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserFromStorage = () => {
    const user = JSON.parse(localStorage.getItem("@pp:user"));

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  };

  const getCurrentUser = () => {
    if (user) {
      return user;
    } else {
      const storedUser = JSON.parse(localStorage.getItem("@pp:user"));
      return storedUser;
    }
  };

  const register = async (data) => {
    try {
      const response = await api.post("/auth/register", data);

      if (response.status === 200) {
        window.location.replace("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      if (response.data.token) {
        const user = {
          _id: response.data.user._id,
          name: response.data.user.name,
          username: response.data.user.username,
          email: response.data.user.email,
          tel: response.data.user.tel,
        };

        localStorage.setItem("@pp:token", response.data.token);
        localStorage.setItem("@pp:user", JSON.stringify(user));

        setUser(user);

        window.location.replace("/admin");
      } else {
        window.location.replace("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const logout = async () => {
    localStorage.removeItem("@pp:user");
    localStorage.removeItem("@pp:token");

    setUser(null);

    window.location.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        login,
        setUserFromStorage,
        logout,
        getCurrentUser,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;