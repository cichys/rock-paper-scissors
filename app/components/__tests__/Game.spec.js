jest.unmock('../Game.jsx');
jest.unmock('../Choice.jsx');
jest.unmock('../Show.jsx');
jest.unmock('../../models/GameModel.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Game from '../Game.jsx';


describe('Game', () => {

    var component, componentNode;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <Game />
        );
        componentNode = ReactDOM.findDOMNode(component);
    });

    it('should show choices', () => {
        var ul = TestUtils.findRenderedDOMComponentWithTag(component, 'ul');
        expect(ul).toBeDefined();
    });

    it('should show results when receive choice', () => {
        var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
        expect(images.length).toBe(0);
        component.onUserChoice('SCISSORS');
        var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
        expect(images.length).toBe(2);
    });

    it('should not show choices when receive choice', () => {
        component.onUserChoice('SCISSORS');
        var ul = TestUtils.scryRenderedDOMComponentsWithTag(component, 'ul');
        expect(ul.length).toBe(0);
    });

    it('should show choices when select play again', () => {
        component.onUserChoice('SCISSORS');
        component.onPlayAgainPress();
        var ul = TestUtils.findRenderedDOMComponentWithTag(component, 'ul');
        expect(ul).toBeDefined();
    });

});