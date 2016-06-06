import React from 'react';


export default class Show extends React.Component {

    getImage(choice, position) {
        return `/assets/images/${choice}_${position}.png`;
    }

    render() {
        return (
            <div>
                <div className="left">
                    YOU<br />
                    <img src={this.getImage(this.props.user, 'left')} alt={this.props.user} />
                </div>
                <div className="center">
                    <h1>{this.props.result}!!!</h1>
                    <button type="button" onClick={this.props.onPlayAgainPress}>PLAY AGAIN</button>
                </div>
                <div className="right">
                    OPPONENT
                    <img src={this.getImage(this.props.opponent, 'right')} alt={this.props.opponent} />
                </div>
            </div>
        );
    }

}
