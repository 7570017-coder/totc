import React from "react";
import {
  LiteratureWrapper,
  Title,
  BookGrid,
  BookCard,
  BookImage,
  BookInfoContainer,
  BookInfo,
  BookPrice,
  Pagination,
  PageButton,
} from "./Styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Course: React.FC = () => {
  const books = [
    { id: 1, img: "Pic32.png", title: "All Benefits of PLUS", price: "$24" },
    { id: 2, img: "Pic33.png", title: "All Benefits of PLUS", price: "$24" },
    { id: 3, img: "Pic34.png", title: "All Benefits of PLUS", price: "$24" },
    { id: 4, img: "Pic35.png", title: "All Benefits of PLUS", price: "$24" },
    { id: 5, img: "Pic36.png", title: "All Benefits of PLUS", price: "$24" },
    { id: 6, img: "Pic37.png", title: "All Benefits of PLUS", price: "$24" },
  ];

  return (
    <LiteratureWrapper>
      <Title>Literature course</Title>
      <BookGrid>
        {books.map((book) => (
          <BookCard key={book.id}>
            <BookImage src={book.img} alt={book.title} />
            <BookInfoContainer>
              <BookInfo>{book.title}</BookInfo>
              <BookPrice>{book.price}</BookPrice>
            </BookInfoContainer>
          </BookCard>
        ))}
      </BookGrid>

      <Pagination>
        <PageButton className="nav-button">
          <FaChevronLeft />
        </PageButton>
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton active>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton className="nav-button">
          <FaChevronRight />
        </PageButton>
      </Pagination>
    </LiteratureWrapper>
  );
};

export default Course;
