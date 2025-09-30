import React from "react";
import {
  Wrapper,
  Header,
  Title,
  SeeAll,
  Cards,
  Card,
  ImageWrapper,
  DiscountTag,
  CardText,
  CardTitle,
  CardDesc,
} from "./Styled";

import Pic1_3 from "/Pic1.3.png";
const Deals: React.FC = () => {
  const offers = [
    {
      img: Pic1_3,
      discount: "50%",
      title: "FOR INSTRUCTORS",
      desc: "TOTC’s school management software helps traditional and online schools manage scheduling,",
    },
    {
      img: Pic1_3,
      discount: "10%",
      title: "FOR INSTRUCTORS",
      desc: "TOTC’s school management software helps traditional and online schools manage scheduling,",
    },
    {
      img: Pic1_3,
      discount: "50%",
      title: "FOR INSTRUCTORS",
      desc: "TOTC’s school management software helps traditional and online schools manage scheduling,",
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>Top Education offers and deals are listed here</Title>
        <SeeAll>See all</SeeAll>
      </Header>
      <Cards>
        {offers.map((offer, i) => (
          <Card key={i}>
            <ImageWrapper>
              <img src={offer.img} alt={offer.title} />
              <DiscountTag>{offer.discount}</DiscountTag>
              <CardText>
                <CardTitle>{offer.title}</CardTitle>
                <CardDesc>{offer.desc}</CardDesc>
              </CardText>
            </ImageWrapper>
          </Card>
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Deals;
