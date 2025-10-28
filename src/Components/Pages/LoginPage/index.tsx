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
  Options,
  LoginButton,
  WelcomeTitle,
} from "./Styled";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import LoginPic from "/LoginPic1.png";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTab = (tab: "login" | "register") => {
    setActiveTab(tab);
    if (tab === "register") navigate("/Register");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        navigate("/");
      } else {
        setError(result.message || "Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
    }

    setLoading(false);
  };

  return (
    <Wrapper>
      <Left>
        <ImageCard>
          <Image src={LoginPic} alt="login" />
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
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

            <Options>
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  disabled={loading}
                />
                Remember me
              </label>
              <Link to="/ForgotPassword">Forgot Password ?</Link>
            </Options>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <LoginButton
                type="submit"
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1 }}
              >
                {loading ? "Signing In..." : "Login"}
              </LoginButton>
            </div>
          </Form>
        </Box>
      </Right>
    </Wrapper>
  );
};

export default Login;
