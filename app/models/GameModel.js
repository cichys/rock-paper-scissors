import conf from '../conf/base';


export default class GameModel {

    static getRandomChoice() {
        return conf.choices[Math.floor(Math.random() * 3)];
    }


    static getWinner(user, opponent) {
        let res = '';
        if (user === opponent) {
            res = 'DRAW';
        } else {
            switch (user) {
            case 'ROCK':
                res = (opponent === 'SCISSORS') ? 'WINNER' : 'LOSER';
                break;
            case 'SCISSORS':
                res = (opponent === 'PAPER') ? 'WINNER' : 'LOSER';
                break;
            case 'PAPER':
                res = (opponent === 'ROCK') ? 'WINNER' : 'LOSER';
                break;
            default:
                res = 'DRAW';
                break;
            }
        }
        return res;
    }

}
