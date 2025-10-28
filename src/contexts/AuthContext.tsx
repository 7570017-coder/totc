import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  email: string;
  name: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  signup: (
    email: string,
    username: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  resetPassword: (
    email: string,
    newPassword: string
  ) => Promise<{ success: boolean; message?: string }>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  // Get all registered users from localStorage
  const getRegisteredUsers = (): (User & { password: string })[] => {
    const users = localStorage.getItem("registeredUsers");
    return users ? JSON.parse(users) : [];
  };

  // Save a new user to registered users
  const saveRegisteredUser = (userData: User & { password: string }) => {
    const existingUsers = getRegisteredUsers();
    const newUsers = [...existingUsers, userData];
    localStorage.setItem("registeredUsers", JSON.stringify(newUsers));
  };

  const login = async (email: string, password: string) => {
    try {
      // Check against registered users
      const registeredUsers = getRegisteredUsers();
      const foundUser = registeredUsers.find((u) => u.email === email);

      if (foundUser) {
        const userWithPassword = registeredUsers.find(
          (u) => u.email === email && u.password === password
        );

        if (userWithPassword) {
          const { password: _, ...userData } = userWithPassword; // Remove password from user object

          localStorage.setItem("token", "user-token");
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          return { success: true };
        } else {
          return { success: false, message: "Invalid password" };
        }
      } else {
        return { success: false, message: "No account found with this email" };
      }
    } catch (error) {
      return { success: false, message: "Login failed. Please try again." };
    }
  };

  const signup = async (email: string, username: string, password: string) => {
    try {
      // Check if user already exists
      const registeredUsers = getRegisteredUsers();
      const existingUser = registeredUsers.find((u) => u.email === email);

      if (existingUser) {
        return {
          success: false,
          message: "An account with this email already exists",
        };
      }

      const userData = {
        id: Date.now().toString(),
        email,
        username,
        name: username,
      };

      // Save user with password to registered users
      saveRegisteredUser({ ...userData, password });

      // Also log the user in
      localStorage.setItem("token", "user-token");
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: "Registration failed. Please try again.",
      };
    }
  };

  const resetPassword = async (email: string, newPassword: string) => {
    try {
      const registeredUsers = getRegisteredUsers();
      const userIndex = registeredUsers.findIndex((u) => u.email === email);

      if (userIndex === -1) {
        return { success: false, message: "No account found with this email" };
      }

      // Update the password
      registeredUsers[userIndex].password = newPassword;
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

      return { success: true, message: "Password reset successfully" };
    } catch (error) {
      return { success: false, message: "Password reset failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    resetPassword,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
