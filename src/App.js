import React, { Component } from "react";
import logo from "./boy.png";
import Section from "./components/Section";
import { TopContainer, Logo } from "./components/Styling";

class App extends Component {
  render() {
    return (
      <>
        <TopContainer>
          <Logo src={logo} alt="" />
        </TopContainer>
        <Section />
      </>
    );
  }
}

export default App;
