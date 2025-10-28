import React from "react";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButtons,
} from "./Styled";
import HeroImage from "/HeroImage.png";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import Waves from "../../../UI/Waves/Waves";
const Hero = () => {
  const nav = useNavigate();
  const navigate = () => {
    nav("/Course");
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          <span className="highlight">Studying</span> Online is now <br /> much
          easier
        </HeroTitle>
        <HeroText>
          TOTC is an interesting platform that will teach <br /> you in a more
          interactive way
        </HeroText>

        <HeroButtons>
          <button onClick={() => nav("/Course")} className="primary">
            Join for free
          </button>

          <button className="secondary">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                textDecoration: "none",
              }}
            >
              <FaPlayCircle />
              Watch how it works
            </a>
          </button>
        </HeroButtons>
      </HeroContent>

      <img src={HeroImage} alt="Hero" className="hero-img" />
      <Waves
        lineColor="#2F8C8A"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={8}
        yGap={36}
      />
    </HeroSection>
  );
};

export default Hero;
