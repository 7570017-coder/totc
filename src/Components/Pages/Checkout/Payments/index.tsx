import React from "react";
import {
  Wrapper,
  Left,
  Right,
  Title,
  CardTypes,
  CardLogo,
  Form,
  InputGroup,
  Input,
  HalfRow,
  CheckboxWrapper,
  ConfirmButton,
  SummaryBox,
  SummaryTitle,
  SummaryItem,
  SummaryImage,
  SummaryText,
  SummaryPrice,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  TotalRow,
  CardTypeLabel,
} from "./Styled";

import Paypal from "/Paypal.png";
import AmericanExpress from "/AmericanExpress.png";
import Visa from "/Visa.png";
import MasterCard from "/MasterCard.png";
import Pic3_2 from "/Pic3.2.png";

const Payments: React.FC = () => {
  return (
    <Wrapper>
      {/* LEFT SIDE */}
      <Left>
        <Title>Checkout</Title>
        <CardTypeLabel>Card Type</CardTypeLabel>
        <CardTypes>
          <CardLogo src={Paypal} alt="PayPal" />
          <CardLogo src={AmericanExpress} alt="American Express" />
          <CardLogo src={Visa} alt="Visa" />
          <CardLogo src={MasterCard} alt="MasterCard" />
        </CardTypes>

        <Form>
          <InputGroup>
            <label>Name on Card</label>
            <Input type="text" placeholder="Enter name on Card" />
          </InputGroup>

          <InputGroup>
            <label>Card Number</label>
            <Input type="text" placeholder="Enter Card Number" />
          </InputGroup>

          <HalfRow>
            <InputGroup>
              <label>Expiration Date ( MM/YY )</label>
              <Input type="text" placeholder="Enter Expiration Date" />
            </InputGroup>
            <InputGroup>
              <label>CVC</label>
              <Input type="text" placeholder="Enter CVC" />
            </InputGroup>
          </HalfRow>

          <CheckboxWrapper>
            <input type="checkbox" id="save" />
            <label htmlFor="save">
              Save my information for faster checkout
            </label>
          </CheckboxWrapper>

          <ConfirmButton>Confirm Payment</ConfirmButton>
        </Form>
      </Left>

      {/* RIGHT SIDE */}
      <Right>
        <SummaryBox>
          <SummaryTitle>Summary</SummaryTitle>

          <SummaryItem>
            <SummaryImage src={Pic3_2} alt="summary" />
            <SummaryText>
              <p>adipiscing elit, sed do eiusmod tempor</p>
              <small>Lorem ipsum dollar…</small>
              <SummaryPrice>$24.69</SummaryPrice>
            </SummaryText>
          </SummaryItem>

          <SummaryItem>
            <SummaryImage src={Pic3_2} alt="summary" />
            <SummaryText>
              <p>sed do eiusmod tempor adipiscing elit</p>
              <small>Lorem ipsum dollar…</small>
              <SummaryPrice>$24.69</SummaryPrice>
            </SummaryText>
          </SummaryItem>

          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>$51.38</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>Coupon Discount</SummaryLabel>
            <SummaryValue>0%</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>TAX</SummaryLabel>
            <SummaryValue>5</SummaryValue>
          </SummaryRow>

          <TotalRow>
            <SummaryLabel>Total</SummaryLabel>
            <SummaryValue>$56.38</SummaryValue>
          </TotalRow>
        </SummaryBox>
      </Right>
    </Wrapper>
  );
};

export default Payments;
