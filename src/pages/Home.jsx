import React from "react";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#1313137d, #0000007d),
    url("./images/bgimg.jpg") center;
  background-size: cover;
  background-attachment: fixed;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Info />
      <Categories />
      <Products />
    </Container>
  );
};

export default Home;
