import React from "react";
import { BookWrapper, Title, Cards, Card } from "./Styled";

const BookForYou: React.FC = () => {
  return (
    <BookWrapper>
      <Title>Book for you</Title>
      <Cards>
        <Card>
          <img src="Pic14.3.png" alt="Book 1" />
          <p>All Benefits of PLUS</p>
          <span>$24</span>
        </Card>
        <Card>
          <img src="Pic16.3.png" alt="Book 2" />
          <p>All Benefits of PLUS</p>
          <span>$24</span>
        </Card>
      </Cards>
    </BookWrapper>
  );
};

export default BookForYou;
