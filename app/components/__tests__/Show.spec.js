jest.unmock('../Show.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Show from '../Show.jsx';


describe('Show', () => {

    var component, componentNode;
    const onPlayAgainPress = function(){};

    describe('draw', function(){
        beforeEach(() => {
            component = TestUtils.renderIntoDocument(
                <Show
                  user="SCISSORS"
                  opponent="SCISSORS"
                  result="DRAW"
                  onPlayAgainPress={onPlayAgainPress}
                />
            );
            componentNode = ReactDOM.findDOMNode(component);
        });

        it('should show scissors for the user', () => {
            var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
            expect(images[0].src).toBe('/assets/images/SCISSORS_left.png');
        });

        it('should show scissors for the opponent', () => {
            var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
            expect(images[1].src).toBe('/assets/images/SCISSORS_right.png');
        });

        it('should show draw label', () => {
            var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
            expect(h1.textContent).toContain('DRAW');
        });

        it('should make a callback when click on play again', () => {
            var button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
            TestUtils.Simulate.click(button);
            // TODO spy
        });
    });


    describe('winner', function(){
        beforeEach(() => {
            component = TestUtils.renderIntoDocument(
                <Show
                  user="SCISSORS"
                  opponent="PAPER"
                  result="WINNER"
                />
            );
            componentNode = ReactDOM.findDOMNode(component);
        });

        it('should show scissors for the user', () => {
            var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
            expect(images[0].src).toBe('/assets/images/SCISSORS_left.png');
        });

        it('should show scissors for the opponent', () => {
            var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
            expect(images[1].src).toBe('/assets/images/PAPER_right.png');
        });

        it('should show winner label', () => {
            var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
            expect(h1.textContent).toContain('WINNER');
        });

    });


    describe('loser', function(){
        beforeEach(() => {
            component = TestUtils.renderIntoDocument(
                <Show
                  user="PAPER"
                  opponent="SCISSORS"
                  result="LOSER"
                />
            );
            componentNode = ReactDOM.findDOMNode(component);
        });

        it('should show scissors for the user', () => {
            var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
            expect(images[0].src).toBe('/assets/images/PAPER_left.png');
        });

        it('should show scissors for the opponent', () => {
            var images = TestUtils.scryRenderedDOMComponentsWithTag(component, 'img');
            expect(images[1].src).toBe('/assets/images/SCISSORS_right.png');
        });

        it('should show loser label', () => {
            var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
            expect(h1.textContent).toContain('LOSER');
        });

    });
});