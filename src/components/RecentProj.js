import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import Untitled from "../assets/Untitled design.jpg";
import Pglife from "../assets/PG Life.jpg"
import { cardShadow, hoverEffect } from "../utils";

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={Untitled} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Github Finder</Title>
              <SubTitle>To find anyone's github profile</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Completed" paid />
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={Pglife} alt="" />
            </Avatar>
            <TextContainer>
              <Title>PG Life</Title>
              <SubTitle>To find nearby Hostels and PG's</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Yet to Complete" late />
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #00FF00;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;


export default Invoices;
