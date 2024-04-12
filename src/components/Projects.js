import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/Portfolio.png";
import dashboard from "../assets/dashboard.jpg";
import { cardShadow, hoverEffect, themeColor } from "../utils";

function Projects() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={Portfolio} alt="" />
        </Avatar>
        <Detail>
          <Title>PortFolio Website</Title>
          <SubTitle>Will be completed by 10th June</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={dashboard} alt="" />
        </Avatar>
        <Detail>
          <Title>Super Dashboard</Title>
          <SubTitle>Completed</SubTitle>
        </Detail>
      </Project>
      <AllProjects>
      <a href="https://www.github.com/Sarthak8822">See all projects</a>    
      </AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
  underline: none;
`;

export default Projects;
