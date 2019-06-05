import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/rock.jpg";
import paper from "./images/paper.jpg";
import scissor from "./images/maxresdefault.jpg";
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };

// i want to choose from a an array a random string and place that value in compChoice value

choices = ['rock', 'paper', 'scissors']

  Compick = (choices) => {
    const {compChoice} = [Math.floor(Math.random() * choices.length)]({compChoice: choices})
  }

  optionClick = (option) => {
      const {userChoice} = this.state;
      this.setState({ userChoice: option, });
    };

  render() {
    return(
      <Container style={{ marginTop: "25px", }}>
        <Header as="h1">React RPS</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
        <OptionBox name="paper" img={paper} optionClick={this.optionClick} />
        <OptionBox name="scissors" img={scissor} optionClick={this.optionClick} />
      </Container>
    );
  };
};

export default App;
