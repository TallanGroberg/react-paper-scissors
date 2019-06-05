import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/rock.jpg";
import paper from "./images/paper.jpg";
import scissor from "./images/maxresdefault.jpg";
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };

// i want to display the image of the userChoice



  compick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  optionClick = (option) => {

      const {userChoice} = this.state;
      this.setState({ userChoice: option, compChoice: this.compick() });
    };

  render() {
    return(
      <Container style={{ marginTop: "25px", }}>
        <Header as="h1">React RPS</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
        <OptionBox name="paper" img={paper} optionClick={this.optionClick} />
        <OptionBox name="scissors" img={scissor} optionClick={this.optionClick} />
        <div>you chose: {this.state.userChoice}
        <hr />
        computer chose: {this.state.compChoice}</div>
      </Container>
    );
  };
};

export default App;
