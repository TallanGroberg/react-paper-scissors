import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/rock.jpg";
import paper from "./images/paper.jpg";
import scissor from "./images/maxresdefault.jpg";
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };

// i want to display the image of the userChoice

  winner = () => {
    switch (true) {

      case this.state.userChoice === 'rock'&& this.state.compChoice === 'rock':
      console.log('its a tie')
      break;
      case this.state.userChoice === 'rock'&& this.state.compChoice === 'scissors':
      console.log('player wins')
      break;
      case this.state.userChoice === 'rock'&& this.state.compChoice === 'paper':
      console.log('computer wins')
      break;


      case this.state.userChoice === 'paper'&& this.state.compChoice === 'paper':
      console.log("tie with paper")
      break;
      case this.state.userChoice === 'paper' && this.state.compChoice === 'scissors':
      console.log('player lost')
      break;
      case this.state.userChoice === 'paper'&& this.state.compChoice === 'rock':
      console.log('player win')
      break;

      case this.state.userChoice === 'scissors'&& this.state.compChoice === 'scissors':
      console.log("tie with scissors")
      break;
      case this.state.userChoice === 'scissors'&& this.state.compChoice === 'rock':
      console.log('player lost')
      break;
      case this.state.userChoice === 'scissors'&& this.state.compChoice === 'paper':
      console.log('player win')
      break;

    }
  }

  compick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  optionClick = (option) => {

      const {userChoice} = this.state;
      this.setState({ userChoice: option, compChoice: this.compick()}, () => this.winner())
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
      <div>{this.state.winner}</div>
      </Container>
    );
  };
};

export default App;
