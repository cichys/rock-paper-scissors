import React from 'react';

import GameModel from '../models/GameModel';
import Choice from '../components/Choice.jsx';
import Show from '../components/Show.jsx';


export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.onUserChoice = this.onUserChoice.bind(this);
        this.onPlayAgainPress = this.onPlayAgainPress.bind(this);
        this.state = {
            userChoice: null,
            opponentChoice: null,
            result: null
        };
    }


    onUserChoice(userChoice) {
        const opponentChoice = GameModel.getRandomChoice();
        const result = GameModel.getWinner(userChoice, opponentChoice);

        this.setState({
            userChoice: userChoice,
            opponentChoice: opponentChoice,
            result: result
        });
    }


    onPlayAgainPress() {
        this.setState({
            userChoice: null
        });
    }


    renderChoice() {
        if (this.state.userChoice) {
            return null;
        }
        return (<Choice onSelect={this.onUserChoice} />);
    }


    renderShow() {
        if (!this.state.userChoice) {
            return null;
        }
        return (
            <Show
              user={this.state.userChoice}
              opponent={this.state.opponentChoice}
              result={this.state.result}
              onPlayAgainPress={this.onPlayAgainPress}
            />
        );
    }


    render() {
        return (
            <div>
                {this.renderChoice()}
                {this.renderShow()}
            </div>
        );
    }

}
