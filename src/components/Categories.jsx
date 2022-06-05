import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  color: white;
  display: flex;
  padding: 20 px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {" "}
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
