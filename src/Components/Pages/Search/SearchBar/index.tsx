import React from "react";
import {
  Container,
  Background,
  Overlay,
  Content,
  SearchBar,
  Input,
  SearchButton,
  Filters,
  FilterButton,
} from "./Styled";

import { FiChevronDown } from "react-icons/fi";

const CourseSearch: React.FC = () => {
  return (
    <Container>
      <Background src="Pic3.4.png" alt="Search Background" />
      <Overlay />
      <Content>
        <SearchBar>
          <Input placeholder="Search your favourite course" />
          <SearchButton>Search</SearchButton>
        </SearchBar>

        <Filters>
          <FilterButton>
            Subject <FiChevronDown />
          </FilterButton>
          <FilterButton>
            Partner <FiChevronDown />
          </FilterButton>
          <FilterButton>
            Program <FiChevronDown />
          </FilterButton>
          <FilterButton>
            Language <FiChevronDown />
          </FilterButton>
          <FilterButton>
            Availability <FiChevronDown />
          </FilterButton>
          <FilterButton>
            Learning Type <FiChevronDown />
          </FilterButton>
        </Filters>
      </Content>
    </Container>
  );
};

export default CourseSearch;
