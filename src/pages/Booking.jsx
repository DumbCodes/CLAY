import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#1313137d, #0000007d),
    url("./images/bgimage.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 25px;
  background: linear-gradient(#ffffff83, #d4d4d4ac);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 10px;
  background-color: #dedede;
  margin: 10px 10px;
  font-size: 14px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 12px 0;
  background-color: white;
  border-radius: 20px;
  width: 180px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #1c1c1c;
  color: white;
  margin: 5px;
`;

const Booking = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Book an Appointment </Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <p>Enter Booking Date</p>
          <Input type="date" placeholder="Booking date" />
          <Input placeholder="Residential Address" type="address" />
          <Input placeholder="Reason for booking" />

          <Agreement>
            You can cancel or update booking via the confirmation email sent to
            you.
          </Agreement>

          <Button>Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Booking;
