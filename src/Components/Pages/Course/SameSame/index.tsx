import React from "react";
import { useNavigate } from "react-router";
import {
  MarketingWrapper,
  MarketingHeader,
  SeeAll,
  MarketingGrid,
  MarketingCard,
  MarketingImg,
  MarketingContent,
  MarketingMeta,
  Title,
  Desc,
  MarketingFooter,
  Author,
  Avatar,
  Price,
  OldPrice,
  NewPrice,
  MetaItem,
} from "./Styled";

import { FiGrid, FiClock } from "react-icons/fi";

import Pic14 from "/Pic14.png";
import Pic13_2 from "/Pic13.4.png";
import Pic20 from "/Pic20.png";
const SameSame = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/CourseDetail");
  const articles = [
    {
      img: Pic14,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic13_2,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic14,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic13_2,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
  ];

  return (
    <MarketingGrid>
      {articles.map((article, index) => (
        <MarketingCard key={index}>
          <MarketingImg
            className="main-marketing-img"
            src={article.img}
            alt={article.title}
          />
          <MarketingContent>
            <MarketingMeta>
              <MetaItem>
                <FiGrid /> {article.category}
              </MetaItem>
              <MetaItem>
                <FiClock /> {article.duration}
              </MetaItem>
            </MarketingMeta>
            <Title>{article.title}</Title>
            <Desc>{article.desc}</Desc>
            <MarketingFooter>
              <Author>
                <Avatar src={article.avatar} alt={article.author} />
                <span>{article.author}</span>
              </Author>
              <Price>
                <OldPrice>{article.oldPrice}</OldPrice>
                <NewPrice>{article.newPrice}</NewPrice>
              </Price>
            </MarketingFooter>
          </MarketingContent>
        </MarketingCard>
      ))}
    </MarketingGrid>
  );
};

export default SameSame;
