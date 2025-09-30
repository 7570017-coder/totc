import React from "react";
import {
  FeaturesSection,
  FeaturesTitle,
  FeaturesText,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureHeading,
  FeatureDescription,
} from "./Styled";
import Icon1 from "/Icon1.png";
import Icon2 from "/Icon2.png";
import Icon3 from "/Icon3.png";
import AnimatedContent from "../../../UI/AnimatedContent/AnimatedContent";

const features = [
  {
    icon: Icon1,
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: Icon2,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: Icon3,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
  },
];

const CloudSoftware = () => {
  return (
    <FeaturesSection>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.1}
      >
        <FeaturesTitle>
          All-In-One <span>Cloud Software.</span>
        </FeaturesTitle>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.2}
      >
        <FeaturesText>
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </FeaturesText>
      </AnimatedContent>

      <FeaturesGrid>
        {features.map((item, idx) => (
          <AnimatedContent
            key={idx}
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.3}
          >
            <FeatureCard>
              <FeatureIcon>
                <img src={item.icon} alt={item.title} />
              </FeatureIcon>
              <FeatureHeading>{item.title}</FeatureHeading>
              <FeatureDescription>{item.description}</FeatureDescription>
            </FeatureCard>
          </AnimatedContent>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default CloudSoftware;
