import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #cecece5f;
`;
const Title = styled.h1`
  margin: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #525252;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;