jest.unmock('../GameModel.js');
jest.unmock('../../conf/base.js');

import GameModel from '../GameModel';

describe('GameModel', () => {

    it('should get a random choice', () => {
        expect(GameModel.getRandomChoice()).toBeDefined();
        expect(GameModel.getRandomChoice()).toBeDefined();
        expect(GameModel.getRandomChoice()).toBeDefined();
    });

    it('should return draw if same choices', () => {
        expect(GameModel.getWinner('SCISSORS', 'SCISSORS')).toBe('DRAW');
        expect(GameModel.getWinner('PAPER', 'PAPER')).toBe('DRAW');
        expect(GameModel.getWinner('ROCK', 'ROCK')).toBe('DRAW');
    });
    
    it('should return win', () => {
        expect(GameModel.getWinner('SCISSORS', 'PAPER')).toBe('WINNER');
        expect(GameModel.getWinner('PAPER', 'ROCK')).toBe('WINNER');
        expect(GameModel.getWinner('ROCK', 'SCISSORS')).toBe('WINNER');
    });
    
    it('should return lose', () => {
        expect(GameModel.getWinner('SCISSORS', 'ROCK')).toBe('LOSER');
        expect(GameModel.getWinner('PAPER', 'SCISSORS')).toBe('LOSER');
        expect(GameModel.getWinner('ROCK', 'PAPER')).toBe('LOSER');
    });

});