import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";

function Topicsdsa() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <Badge content="Arrays" />
        </Detail>
        <Detail>
          <Badge content="Strings" />
        </Detail>
        <Detail>
          <Badge content="Linked Lists" />
        </Detail>
        <Detail>
          <Badge content="Searching and Sorting" />
        </Detail>
        <Detail>
          <Badge content="Hashing" />
        </Detail>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 100%;
  padding: 1rem;
  background-color: white;
  width: 12.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 5px;
  justify-content: space-around;
  ${'' /* align-items: center; */}
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;

export default Topicsdsa;
