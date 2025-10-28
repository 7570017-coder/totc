import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #49bbbd;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  position: relative;
  z-index: 1002;

  @media (max-width: 1200px) {
    padding: 10px 60px;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1003;

  img {
    width: auto;
    height: auto;
    cursor: pointer;
  }

  span {
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;

  li {
    cursor: pointer;
    transition: color 0.2s ease;
    color: #fff;
    font-family: "Avenir Next LT Pro Bold", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.44px;
    padding: 10px 32px;

    &:hover {
      color: #49bbbd;
      background-color: #fff;
      border-radius: 20px;
    }
  }

  @media (max-width: 1300px) {
    gap: 10px;

    li {
      padding: 10px 20px;
      font-size: 18px;
    }
  }

  @media (max-width: 1023px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #49bbbd;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    z-index: 1001;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    /* Prevent touch scroll on the menu itself */
    touch-action: ${({ isOpen }) => (isOpen ? "none" : "auto")};

    li {
      font-size: 24px;
      padding: 15px 40px;
      opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(0)" : "translateY(20px)"};
      transition: all 0.3s ease-in-out 0.2s;

      &:nth-child(1) {
        transition-delay: ${({ isOpen }) => (isOpen ? "0.2s" : "0s")};
      }
      &:nth-child(2) {
        transition-delay: ${({ isOpen }) => (isOpen ? "0.3s" : "0s")};
      }
      &:nth-child(3) {
        transition-delay: ${({ isOpen }) => (isOpen ? "0.4s" : "0s")};
      }
      &:nth-child(4) {
        transition-delay: ${({ isOpen }) => (isOpen ? "0.5s" : "0s")};
      }
      &:nth-child(5) {
        transition-delay: ${({ isOpen }) => (isOpen ? "0.6s" : "0s")};
      }
    }
  }
`;

export const ButtonGroup = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 1003;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 1023px) {
    position: fixed;
    bottom: 40px;
    left: 0;
    width: 100%;
    justify-content: center;
    gap: 20px;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(20px)"};
    transition: all 0.3s ease-in-out;
    transition-delay: ${({ isOpen }) =>
      isOpen ? "0.4s" : "0s"}; // Changed this line
    z-index: 1001;
  }
`;

export const Button = styled.button`
  padding: 14px 40px;
  border-radius: 80px;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 20px 24px 0 rgba(0, 0, 0, 0.03);

  &.login {
    background: conic-gradient(from 90deg at 50% 100%, #fff 0deg, #fff 360deg);
    color: #5b5b5b;
  }

  &.sign-up {
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
  }

  &.sign-up:hover {
    background: #fff;
    color: #49bbbd;
  }

  @media (max-width: 1200px) {
    padding: 12px 30px;
    font-size: 16px;
  }

  @media (max-width: 1023px) {
    padding: 15px 35px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1003;

  @media (max-width: 1023px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(8px, 8px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(4px, -4px)" : "rotate(0)"};
    }
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 1023px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease-in-out;
    touch-action: none;
  }
`;

export const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 1023px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

    /* Prevent any touch events when menu is open */
    ${({ isOpen }) =>
      isOpen &&
      `
      touch-action: none;
      -webkit-overflow-scrolling: none;
      overflow: hidden;
    `}
  }
`;

export const UserInfo = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 1003;

  @media (max-width: 1380px) {
    gap: 15px; // Reduce gap to save space
  }

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 1023px) {
    position: fixed;
    bottom: 120px;
    left: 0;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(20px)"};
    transition: all 0.3s ease-in-out;
    transition-delay: ${({ isOpen }) => (isOpen ? "0.4s" : "0s")};
    z-index: 1001;
  }
`;

export const UserName = styled.span`
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 1380px) {
    font-size: 18px; // Slightly smaller font
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 1023px) {
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LogoutButton = styled.button`
  padding: 14px 40px;
  border-radius: 80px;
  font-family: "Avenir Next LT Pro Bold", sans-serif;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 20px 24px 0 rgba(0, 0, 0, 0.03);
  background: #e74c3c;
  color: white;
  white-space: nowrap; // Prevent text wrapping

  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
  }

  @media (max-width: 1380px) {
    padding: 12px 25px; // Reduce padding for medium screens
    font-size: 18px; // Slightly smaller font
  }

  @media (max-width: 1200px) {
    padding: 12px 25px;
    font-size: 18px;
  }

  @media (max-width: 1023px) {
    padding: 15px 35px;
    font-size: 20px;
    width: auto;
    max-width: 200px;
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;
