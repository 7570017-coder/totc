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
import { useNavigate } from "react-router-dom";
import LoginPic from "/LoginPic1.png";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleTab = (tab: "login" | "register") => {
    setActiveTab(tab);
    if (tab === "register") navigate("/register");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login", { username, password, remember });
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
            <InputGroup>
              <Label htmlFor="username">User name</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
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
              />
              <EyeIcon
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((s) => !s)}
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
                />
                Remember me
              </label>
              <a href="#">Forgot Password ?</a>
            </Options>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <LoginButton type="submit">Login</LoginButton>
            </div>
          </Form>
        </Box>
      </Right>
    </Wrapper>
  );
};

export default LoginPage;
