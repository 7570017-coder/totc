import React, { useEffect, useRef, useState } from "react";
import {
  SuccessSection,
  SuccessTitle,
  SuccessText,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
} from "./Styled";
import FadeContent from "../../../UI/FadeContent/FadeContent";

const stats = [
  { number: 15000, label: "Students" },
  { number: 75, label: "Total success" },
  { number: 35, label: "Main questions" },
  { number: 26, label: "Chief experts" },
  { number: 16, label: "Years of experience" },
];

const useCountUp = (end: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start]);

  return count;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formatNumber = (num: number, index: number) => {
    const stat = stats[index];

    if (stat.label === "Total success") {
      return `${num}%`;
    }

    if (stat.number >= 1000) {
      if (num >= 1000) {
        const formatted = (num / 1000).toFixed(num === stat.number ? 0 : 1);
        return `${formatted}K`;
      }
      return num.toString();
    }

    return num.toString();
  };

  return (
    <SuccessSection ref={sectionRef}>
      <SuccessTitle>Our Success</SuccessTitle>
      <SuccessText>
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </FadeContent>
      </SuccessText>

      <StatsGrid>
        {stats.map((item, idx) => {
          const count = useCountUp(item.number, 2000, isVisible);

          return (
            <StatItem key={idx}>
              <StatNumber>{formatNumber(count, idx)}</StatNumber>
              <StatLabel>{item.label}</StatLabel>
            </StatItem>
          );
        })}
      </StatsGrid>
    </SuccessSection>
  );
};

export default About;
