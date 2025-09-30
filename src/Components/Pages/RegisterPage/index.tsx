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
import RegisterPic from "/RegisterPic1.png";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTab = (tab: "login" | "register") => {
    setActiveTab(tab);
    if (tab === "login") navigate("/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("register", { email, username, password });
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

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <LoginButton type="submit">Register</LoginButton>
            </div>
          </Form>
        </Box>
      </Right>
    </Wrapper>
  );
};

export default RegisterPage;
