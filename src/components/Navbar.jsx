import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
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
  flex: 1.5;
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
`;

// Search, Sign up and cart Container
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "3" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  padding: 5px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 20px;
  background-color: #edf5f3;
  margin: 10px 0;
  font-size: 14px;
  ${mobile({ width: "70px" })}
`;
const MenuItem = styled.div`
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  ${mobile({ fontSize: "12px", margin: "5px" })}
`;

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="./images/logo.png" alt="" />
        </Left>

        <Center>
          <PageItems>Collection</PageItems>

          <PageItems>Products</PageItems>
          <Link to="/booking">
            <PageItems>Booking</PageItems>
          </Link>
          <PageItems>About Us</PageItems>
        </Center>

        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "white", fontSize: 24 }} />
          </SearchContainer>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Log In</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}> Log Out</MenuItem>
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

export default Navbar;
