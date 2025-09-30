import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Section,
  Header,
  Title,
  SeeAll,
  Grid,
  Card,
  Content,
  BlogTitle,
  Author,
  Description,
  Footer,
  ReadMore,
  Views,
  Pagination,
  PageButton,
} from "./Styled";

import { FaEye } from "react-icons/fa";

import Pic1 from "/Pic1.2.png";
import Pic13 from "/Pic13.3.png";
import Avatar from "/Pic20.png";

const Related: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/BlogDetail");
  const blogs = [
    {
      img: Pic1,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
    {
      img: Pic13,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
  ];

  return (
    <Section>
      <Header>
        <Title>Related Blog</Title>
        <SeeAll onClick={handleCheckout}>See all</SeeAll>
      </Header>

      <Grid>
        {blogs.map((blog, i) => (
          <Card key={i}>
            <img className="main-blog-img" src={blog.img} alt={blog.title} />
            <Content>
              <BlogTitle>{blog.title}</BlogTitle>
              <Author>
                <img src={Avatar} alt={blog.author} />
                <span>{blog.author}</span>
              </Author>
              <Description>{blog.desc}</Description>
              <Footer>
                <ReadMore href="#">Read more</ReadMore>
                <Views>
                  <FaEye />
                  {blog.views}
                </Views>
              </Footer>
            </Content>
          </Card>
        ))}
      </Grid>

      <Pagination>
        <PageButton>{"<"}</PageButton>
        <PageButton>{">"}</PageButton>
      </Pagination>
    </Section>
  );
};

export default Related;
