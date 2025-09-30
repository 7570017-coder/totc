import React from "react";
import { Section, Title, Grid, Card, Label } from "./Styled";

import Pic15 from "/Pic15.2.png";
import Pic17 from "/Pic17.png";
import Pic18 from "/Pic18.png";
import Pic19 from "/Pic19.png";

const Reading: React.FC = () => {
  const blogs = [
    { img: Pic15, label: "UX/UI" },
    { img: Pic17, label: "React" },
    { img: Pic18, label: "PHP" },
    { img: Pic19, label: "JavaScript" },
  ];

  return (
    <Section>
      <Title>Reading blog list</Title>
      <Grid>
        {blogs.map((blog, index) => (
          <Card key={index}>
            <img src={blog.img} alt={blog.label} />
            <Label>{blog.label}</Label>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Reading;
