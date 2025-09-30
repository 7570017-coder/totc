// index.tsx
import React from "react";
import {
  Section,
  Heading,
  Grid,
  MainCard,
  MainImageWrap,
  Tag,
  MainContent,
  SideStack,
  SideCard,
  SideImageWrap,
  SideContent,
} from "./Styled";

import Pic13 from "/Pic13.png";
import Pic14 from "/Pic14.png";
import Pic15 from "/Pic15.png";
import Pic16 from "/Pic16.png";

type Article = {
  image: string;
  tag: "NEWS" | "PRESS RELEASE" | string;
  title: string;
  description: string;
};

const sideArticles: Article[] = [
  {
    image: Pic14,
    tag: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,…",
  },
  {
    image: Pic15,
    tag: "NEWS",
    title:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    description:
      "Zoom was never created to be a consumer product. Nonetheless, the…",
  },
  {
    image: Pic16,
    tag: "NEWS",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    description:
      "This year, investors have reaped big financial returns from betting on Zoom…",
  },
];

const NewsSection: React.FC = () => {
  return (
    <Section>
      <Heading>
        <h2>Lastest News and Resources</h2>
        <p>See the developments that have occurred to TOTC in the world</p>
      </Heading>

      <Grid>
        {/* Main big article on left */}
        <MainCard>
          <MainImageWrap>
            <img src={Pic13} alt="Main news" />
            <Tag variant={"news"}>NEWS</Tag>
          </MainImageWrap>

          <MainContent>
            <h3 className="title">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>
            <p className="desc">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="#" className="readmore">
              Read more
            </a>
          </MainContent>
        </MainCard>

        {/* Right column: stacked smaller articles */}
        <SideStack>
          {sideArticles.map((a, idx) => (
            <SideCard key={idx}>
              <SideImageWrap>
                <img src={a.image} alt={a.title} />
                <Tag
                  variant={
                    a.tag.toLowerCase().includes("press") ? "press" : "news"
                  }
                >
                  {a.tag}
                </Tag>
              </SideImageWrap>

              <SideContent>
                <h4 className="title">{a.title}</h4>
                <p className="desc">{a.description}</p>
              </SideContent>
            </SideCard>
          ))}
        </SideStack>
      </Grid>
    </Section>
  );
};

export default NewsSection;
