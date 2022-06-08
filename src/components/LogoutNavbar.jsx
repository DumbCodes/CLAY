import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 75px;
  color: white;
  background: #00000095;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px, 0px" })}
`;
//Logo container
const Left = styled.div`
  flex: 0.5;
`;
const Logo = styled.img`
  width: 150px;
  margin-left: 5px;
  cursor: pointer;
  ${mobile({ width: "70px" })}
`;

// Central option's Container
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const PageItems = styled.div`
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 15px;
  &:hover {
    transform: scale(1.2);
  }
`;

// Search, Sign up and cart Container
const Right = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "3" })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  padding: 5px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px;
  width: 250px;
  border-radius: 20px;
  background-color: #ffffff;
  margin: 10px 0;
  font-size: 14px;
  ${mobile({ width: "70px" })}
`;
const MenuItem = styled.div`
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  &:hover {
    transform: scale(1.2);
  }
  ${mobile({ fontSize: "12px", margin: "5px" })}
`;
const Buttons = styled.button`
  padding: 3px 20px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #bcb6b6;
`;

const LogoutNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="./images/logo.png" alt="" />
          </Link>
        </Left>

        <Center>
          <PageItems>
            <Buttons>Collection</Buttons>
          </PageItems>
          <PageItems>
            <Buttons>Products</Buttons>
          </PageItems>
          <Link to="/booking">
            <PageItems>
              <Buttons>Booking</Buttons>
            </PageItems>
          </Link>
          <PageItems>
            <Buttons>AboutUs</Buttons>
          </PageItems>
        </Center>
        <Right>
          <SearchContainer>
            <Input type="search" placeholder="Search" />
            <Search style={{ color: "white", fontSize: 24 }} />
          </SearchContainer>
          <MenuItem onClick={handleLogout}>
            <Buttons>LogOut</Buttons>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default LogoutNavbar;
