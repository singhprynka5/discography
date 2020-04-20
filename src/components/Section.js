import React, { Component } from "react";
import cd from "../cd.png";
import { BottomContainer, CdImg, Heading } from "./Styling";
import DetailedInfo from "./DetailedInfo";

class Section extends Component {
  render() {
    return (
      <BottomContainer>
        <CdImg src={cd} alt="" />
        <Heading>Now Playing</Heading>
        <DetailedInfo />
      </BottomContainer>
    );
  }
}

export default Section;
