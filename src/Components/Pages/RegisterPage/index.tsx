import React, { useState } from "react";
import {
  Wrapper,
  Left,
  Image,
  ImageCard,
  ImageOverlay,
  Right,
  Box,
  TabsWrapper,
  TabButton,
  Description,
  Form,
  Label,
  InputGroup,
  Input,
  EyeIcon,
  LoginButton,
  WelcomeTitle,
} from "./Styled";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import RegisterPic from "/RegisterPic1.png";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTab = (tab: "login" | "register") => {
    setActiveTab(tab);
    if (tab === "login") navigate("/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    if (!email.includes("@")) {
      return setError("Please enter a valid email address");
    }

    if (username.length < 3) {
      return setError("Username must be at least 3 characters long");
    }

    setLoading(true);

    try {
      const result = await signup(email, username, password);

      if (result.success) {
        navigate("/");
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred during registration");
    }

    setLoading(false);
  };

  const handleDemoSignup = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await signup(
        `demo${Date.now()}@totc.com`,
        `demo${Date.now()}`,
        "demo123"
      );

      if (result.success) {
        navigate("/");
      } else {
        setError("Demo registration failed");
      }
    } catch (err) {
      setError("Demo registration failed");
    }

    setLoading(false);
  };

  return (
    <Wrapper>
      <Left>
        <ImageCard>
          <Image src={RegisterPic} alt="register" />
          <ImageOverlay>
            <h1>Lorem Ipsum is simply</h1>
            <p>Lorem Ipsum is simply</p>
          </ImageOverlay>
        </ImageCard>
      </Left>

      <Right>
        <Box>
          <WelcomeTitle>Welcome to lorem!</WelcomeTitle>

          <TabsWrapper>
            <TabButton
              active={activeTab === "login"}
              onClick={() => handleTab("login")}
              aria-pressed={activeTab === "login"}
            >
              Login
            </TabButton>
            <TabButton
              active={activeTab === "register"}
              onClick={() => handleTab("register")}
              aria-pressed={activeTab === "register"}
            >
              Register
            </TabButton>
          </TabsWrapper>

          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Description>

          <Form onSubmit={handleSubmit}>
            {error && (
              <div
                style={{
                  color: "#e74c3c",
                  textAlign: "center",
                  marginBottom: "16px",
                  padding: "12px",
                  backgroundColor: "#fee",
                  borderRadius: "8px",
                  border: "1px solid #fed7d7",
                }}
              >
                {error}
              </div>
            )}

            <InputGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="username">User name</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password (min. 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <EyeIcon
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((s) => !s)}
                disabled={loading}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </EyeIcon>
            </InputGroup>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <LoginButton
                type="submit"
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1 }}
              >
                {loading ? "Creating Account..." : "Register"}
              </LoginButton>
            </div>
          </Form>
        </Box>
      </Right>
    </Wrapper>
  );
};

export default RegisterPage;
