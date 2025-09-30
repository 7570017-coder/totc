import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PricingWrapper,
  PricingTitle,
  PricingGrid,
  PricingCard,
  PricingHeader,
  PriceRow,
  Price,
  PriceLabel,
  FeatureList,
  FeatureItem,
  IconWrapper,
  Button,
  Badge,
} from "./Styled";
import { FaCheck, FaUser, FaUsers } from "react-icons/fa";

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/Checkout");
  return (
    <PricingWrapper>
      <PricingTitle>Affordable pricing</PricingTitle>
      <PricingGrid>
        {/* Free Plan */}
        <PricingCard>
          <PricingHeader>
            <h4>Like a pussy</h4>
          </PricingHeader>
          <PriceRow>
            <Price>Free</Price>
            <PriceLabel>/ Forever</PriceLabel>
          </PriceRow>
          <FeatureList>
            <FeatureItem>
              <IconWrapper bg="#C2C2C2" color="#000">
                <FaCheck />
              </IconWrapper>
              Components-driven system
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#C2C2C2" color="#000">
                <FaCheck />
              </IconWrapper>
              Sales-boosting landing pages
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#C2C2C2" color="#000">
                <FaCheck />
              </IconWrapper>
              Awesome Feather icons pack
            </FeatureItem>
          </FeatureList>
          <Button variant="outline">Try for free</Button>
        </PricingCard>

        {/* Individual Plan */}
        <PricingCard highlight>
          <PricingHeader>
            <h4>
              <FaUser /> Individual <Badge>BEST!</Badge>
            </h4>
          </PricingHeader>
          <PriceRow>
            <Price>$24</Price>
            <PriceLabel>/ Month</PriceLabel>
          </PriceRow>
          <FeatureList>
            <FeatureItem>
              <IconWrapper bg="#FDCB6E" color="#000">
                <FaCheck />
              </IconWrapper>
              Components-driven system
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#FDCB6E" color="#000">
                <FaCheck />
              </IconWrapper>
              Sales-boosting landing pages
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#FDCB6E" color="#000">
                <FaCheck />
              </IconWrapper>
              Awesome Feather icons pack
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#FDCB6E" color="#000">
                <FaCheck />
              </IconWrapper>
              Themed into 3 different styles
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#FDCB6E" color="#000">
                <FaCheck />
              </IconWrapper>
              Will help to learn Figma
            </FeatureItem>
          </FeatureList>
          <Button variant="solid" onClick={handleCheckout}>
            Regular license
          </Button>
        </PricingCard>

        {/* Corporate Plan */}
        <PricingCard>
          <PricingHeader>
            <h4>
              <FaUsers /> Corporate
            </h4>
          </PricingHeader>
          <PriceRow>
            <Price>$12</Price>
            <PriceLabel>/ Editor</PriceLabel>
          </PriceRow>
          <FeatureList>
            <FeatureItem>
              <IconWrapper bg="#55EFC4" color="#000">
                <FaCheck />
              </IconWrapper>
              Components-driven system
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#55EFC4" color="#000">
                <FaCheck />
              </IconWrapper>
              Sales-boosting landing pages
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#55EFC4" color="#000">
                <FaCheck />
              </IconWrapper>
              Awesome Feather icons pack
            </FeatureItem>
            <FeatureItem>
              <IconWrapper bg="#55EFC4" color="#000">
                <FaCheck />
              </IconWrapper>
              Themed into 3 different styles
            </FeatureItem>
          </FeatureList>
          <Button variant="outline" onClick={handleCheckout}>
            Extended license
          </Button>
        </PricingCard>
      </PricingGrid>
    </PricingWrapper>
  );
};

export default Pricing;
