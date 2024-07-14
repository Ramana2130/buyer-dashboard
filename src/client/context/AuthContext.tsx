import axios from "axios";
import React, { ReactNode } from "react";
import { User } from "@/types/user";
import { useNavigate } from "react-router-dom";

type Auth = {
  saveCredentials: (user: User) => void;
  logout: () => void;
} & (
  | {
      isAuthenticated: true;
      user: User;
      token: string;
    }
  | {
      isAuthenticated: false;
      token: null;
      user: null;
    }
);

function isAuthenticated() {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  return (
    JSON.parse(atob(token.split(".")[1])).exp * 1000 > new Date().getTime()
  );
}

const AuthContext = React.createContext<Auth>({
  isAuthenticated: false,
  token: null,
  user: null,
  saveCredentials: () => {},
  logout: () => {},
});

AuthContext.displayName = "AuthContext";

export const useAuth = () => {
  return React.useContext(AuthContext);
};

type Props = {
  children?: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [value, setValue] = React.useState<Auth>({} as Auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const isAuth = isAuthenticated();
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user") ?? "{}");
      axios.defaults.headers["Authorization"] = token;

      if (isAuth === true) {
        setValue((prev) => ({
          ...prev,
          isAuthenticated: true,
          token: token!,
          user: user! as User,
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          isAuthenticated: false,
          token: null,
          user: null,
        }));

        localStorage.clear();

        setTimeout(() => {
          navigate("/login");
        }, 500);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (!value.isAuthenticated) {
      return;
    }

    axios
      .get("/auth/verify")
      .then(/* Do nothing! */)
      .catch((err) => {
        console.log(err);
        setValue((prev) => ({
          ...prev,
          isAuthenticated: false,
          user: null,
          token: null,
        }));

        setTimeout(() => {
          navigate("/login");
        }, 500);
      });
  }, [isAuthenticated]);

  async function saveCredentials(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.token);
    axios.defaults.headers["Authorization"] = user.token;
    setValue((prev) => ({
      ...prev,
      user: user,
      token: user.token,
      isAuthenticated: true,
    }));
  }

  async function logout() {
    localStorage.clear();
    axios.defaults.headers["Authorization"] = null;
    setValue((prev) => ({
      ...prev,
      isAuthenticated: false,
      user: null,
      token: null,
    }));
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ ...value, saveCredentials, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
