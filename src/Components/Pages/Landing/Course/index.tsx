import React from "react";
import Pic9 from "/Pic9.png";
import Pic10 from "/Pic10.png";
import Pic11 from "/Pic11.png";
import Icon7 from "/Icon7.png";
import Icon8 from "/Icon8.png";
import Icon9 from "/Icon9.png";
import FadeContent from "../../../UI/FadeContent/FadeContent";
import { useNavigate } from "react-router";
import {
  Section,
  Title,
  Subtitle,
  CategoryRow,
  Card,
  CardImage,
  StickCard,
  StickOuter,
  StickInner,
  StickText,
  Bar,
  LayerFlex,
  LayerContainer,
  LayerHeader,
  LayerTitle,
  SeeAllLink,
  LayerContent,
  IconImage,
} from "./Styled";

const layers = [
  {
    title: "Lorem Ipsum",
    categories: [
      { label: "Ut Sed Eros", color: "#FF6F00" },
      { label: "Curabitur Egestas", color: "#FF8374" },
      { label: "Quisque Conseq…", color: "#B45A1B" },
      { label: "Cras Convallis", color: "#FFB300" },
      { label: "Vestibulum fauci…", color: "#C583FF" },
      { label: "Ut Sed Eros", color: "#00A8FF" },
      { label: "Vestibulum faucibu", color: "#6DB4A7" },
    ],
    courses: [{ image: Pic9 }],
  },
  {
    title: "Quisque a Consequat",
    categories: [
      { label: "Ut Sed Eros", color: "#FF6F00" },
      { label: "Curabitur Egestas", color: "#FF8374" },
      { label: "Quisque Conseq…", color: "#B45A1B" },
      { label: "Cras Convallis", color: "#FFB300" },
      { label: "Vestibulum fauci…", color: "#C583FF" },
      { label: "Ut Sed Eros", color: "#00A8FF" },
      { label: "Vestibulum faucibu", color: "#6DB4A7" },
    ],
    courses: [{ image: Pic10 }],
  },
  {
    title: "Aenean Facilisis",
    categories: [
      { label: "Ut Sed Eros", color: "#FF6F00" },
      { label: "Curabitur Egestas", color: "#FF8374" },
      { label: "Quisque Conseq…", color: "#B45A1B" },
      { label: "Cras Convallis", color: "#FFB300" },
      { label: "Vestibulum fauci…", color: "#C583FF" },
      { label: "Ut Sed Eros", color: "#00A8FF" },
      { label: "Vestibulum faucibu", color: "#6DB4A7" },
    ],
    courses: [{ image: Pic11 }],
  },
];

const Course = () => {
  const nav = useNavigate();

  return (
    <Section>
      <Title>Explore Course</Title>
      <Subtitle>Ut sed eros finibus, placerat orci id, dapibus.</Subtitle>

      {layers.map((layer, idx) => {
        const sticks: { label: string; color: string }[] = layer.categories;
        let leftSticks: { label: string; color: string }[] = sticks;
        let rightSticks: { label: string; color: string }[] = [];
        let image = layer.courses[0].image;
        let imageComponent: React.ReactNode = null;
        let icon: string = Icon7;
        if (idx === 1) icon = Icon8;
        if (idx === 2) icon = Icon9;

        if (idx === 2) {
          leftSticks = sticks.slice(0, 1);
          rightSticks = sticks.slice(1);
          imageComponent = (
            <Card key={"pic11"}>
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <CardImage>
                  <img src={image} alt="Course 3" />
                </CardImage>
              </FadeContent>
            </Card>
          );
        } else if (idx === 1) {
          leftSticks = sticks.slice(0, 4);
          rightSticks = sticks.slice(4);
          imageComponent = (
            <Card key={"pic10"}>
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <CardImage>
                  <img src={image} alt="Course 2" />
                </CardImage>
              </FadeContent>
            </Card>
          );
        } else if (idx === 0) {
          leftSticks = sticks;
          rightSticks = [];
          imageComponent = null;
        }

        return (
          <LayerContainer key={idx}>
            <LayerHeader>
              <LayerTitle>
                <IconImage src={icon} alt={`Icon${idx + 7}`} />
                {layer.title}
              </LayerTitle>
              <SeeAllLink onClick={() => nav("/Course")}>
                SEE ALL &rarr;
              </SeeAllLink>
            </LayerHeader>
            <LayerFlex>
              <Bar />
              <LayerContent>
                <CategoryRow>
                  {leftSticks.map((cat, i) => (
                    <StickCard key={i} delay={i * 100}>
                      <StickOuter>
                        <StickInner bg={cat.color}>
                          <StickText>{cat.label}</StickText>
                        </StickInner>
                      </StickOuter>
                    </StickCard>
                  ))}
                </CategoryRow>

                {idx === 2 && imageComponent}
                {idx === 1 && imageComponent}

                <CategoryRow>
                  {rightSticks.map((cat, i) => (
                    <StickCard
                      key={i + leftSticks.length}
                      delay={(i + leftSticks.length) * 100}
                    >
                      <StickOuter>
                        <StickInner bg={cat.color}>
                          <StickText>{cat.label}</StickText>
                        </StickInner>
                      </StickOuter>
                    </StickCard>
                  ))}
                </CategoryRow>

                {idx === 0 && (
                  <Card key={"pic9"}>
                    <FadeContent
                      blur={true}
                      duration={1000}
                      easing="ease-out"
                      initialOpacity={0}
                    >
                      <CardImage>
                        <img src={layer.courses[0].image} alt="Course 1" />
                      </CardImage>
                    </FadeContent>
                  </Card>
                )}
              </LayerContent>
            </LayerFlex>
          </LayerContainer>
        );
      })}
    </Section>
  );
};

export default Course;
