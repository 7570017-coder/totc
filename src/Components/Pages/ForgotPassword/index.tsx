import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
  gap: 48px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    padding: 16px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  max-width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 29px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
`;

const Image = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  height: auto;
`;

const ImageOverlay = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);

  h1 {
    margin: 0;
    color: #fff;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 37px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    margin: 0;
    color: #fff;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  max-width: 420px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 0 16px;
  }
`;

const WelcomeTitle = styled.div`
  text-align: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  margin-bottom: 24px;
`;

const Description = styled.p`
  text-align: left;
  color: #5b5b5b;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  color: #000;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 16px 44px 16px 16px;
  border-radius: 24px;
  border: 1.5px solid #49bbbd;
  color: #acacac;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: #fff;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }

  &:focus {
    box-shadow: 0 8px 18px rgba(33, 192, 190, 0.12);
  }
`;

const Button = styled.button`
  margin-left: auto;
  display: inline-block;
  padding: 16px 80px;
  border-radius: 36px;
  background: #49bbbd;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px 20px;
    margin-left: 0;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin: 1rem 0;
  color: #666;

  a {
    color: #49bbbd;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee;
  color: #e74c3c;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: center;
  border: 1px solid #fed7d7;
`;

const SuccessMessage = styled.div`
  background-color: #f0fff4;
  color: #2d7d32;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: center;
  border: 1px solid #c6f6d5;
`;

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    if (newPassword.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    setLoading(true);

    try {
      const result = await resetPassword(email, newPassword);

      if (result.success) {
        setSuccess(
          "Password reset successfully! You can now login with your new password."
        );
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      } else {
        setError(result.message || "Password reset failed");
      }
    } catch (err) {
      setError("An error occurred during password reset");
    }

    setLoading(false);
  };

  return (
    <Wrapper>
      <Left>
        <ImageCard>
          <Image src="/LoginPic1.png" alt="forgot password" />
          <ImageOverlay>
            <h1>Reset Password</h1>
            <p>Get back to your account</p>
          </ImageOverlay>
        </ImageCard>
      </Left>

      <Right>
        <Box>
          <WelcomeTitle>Reset Your Password</WelcomeTitle>

          <Description>
            Enter your email and new password to reset your account.
          </Description>

          <Form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

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
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                disabled={loading}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            </InputGroup>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                disabled={loading}
                style={{ opacity: loading ? 0.6 : 1 }}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </div>

            <LinkText style={{ textAlign: "center", marginTop: "1rem" }}>
              <Link to="/Login">Back to Login</Link>
            </LinkText>
          </Form>
        </Box>
      </Right>
    </Wrapper>
  );
};

export default ForgotPassword;
