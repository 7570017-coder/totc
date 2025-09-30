import React from "react";
import {
  Section,
  Title,
  Grid,
  Card,
  IconWrap,
  CardTitle,
  Desc,
} from "./Styled";

import {
  FaPaintBrush,
  FaDesktop,
  FaDatabase,
  FaBriefcase,
  FaFilm,
  FaBook,
  FaSlideshare,
} from "react-icons/fa";

const FavoriteCourse: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Design",
      icon: <FaPaintBrush />,
      bg: "#49BBBD4D",
      iconColor: "#49BBBD",
    },
    {
      id: 2,
      title: "Development",
      icon: <FaDesktop />,
      bg: "#5B72EE4D",
      iconColor: "#5B72EE",
    },
    {
      id: 3,
      title: "Development",
      icon: <FaDatabase />,
      bg: "#9DCCFF4D",
      iconColor: "#9DCCFF",
    },
    {
      id: 4,
      title: "Business",
      icon: <FaBriefcase />,
      bg: "#00CBB84D",
      iconColor: "#00CBB8",
    },
    {
      id: 5,
      title: "Marketing",
      icon: <FaSlideshare />,
      bg: "#F48C064D",
      iconColor: "#F48C06",
    },
    {
      id: 6,
      title: "Photography",
      icon: <FaBook />,
      bg: "#EE645B4D",
      iconColor: "#EE645B",
    },
    {
      id: 7,
      title: "Acting",
      icon: <FaFilm />,
      bg: "#2526414D",
      iconColor: "#252641",
    },
    {
      id: 8,
      title: "Business",
      icon: <FaBriefcase />,
      bg: "#00CBB84D",
      iconColor: "#00CBB8",
    },
  ];

  return (
    <Section>
      <Title>Choice favourite course from top category</Title>
      <Grid>
        {categories.map((c) => (
          <Card key={c.id}>
            <IconWrap bg={c.bg} iconcolor={c.iconColor}>
              {c.icon}
            </IconWrap>
            <CardTitle>{c.title}</CardTitle>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Desc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FavoriteCourse;
