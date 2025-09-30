import React from "react";
import {
  FooterWrapper,
  LogoRow,
  Newsletter,
  Form,
  BottomLinks,
  Copy,
  PrivacyPolicy,
} from "./Styled";

import Logo from "/Logo.png";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LogoRow>
        <img src={Logo} alt="TOTC Logo" />
        <span>
          Virtual Class <br /> for Zoom
        </span>
      </LogoRow>

      <Newsletter>
        <h4>Subscribe to get our Newsletter</h4>
        <Form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </Form>
      </Newsletter>

      <BottomLinks>
        <a href="#">Careers</a> <PrivacyPolicy>Privacy Policy</PrivacyPolicy>{" "}
        <a href="#">Terms & Conditions</a>
      </BottomLinks>

      <Copy>© 2025 Class Technologies Inc.</Copy>
    </FooterWrapper>
  );
};

export default Footer;
