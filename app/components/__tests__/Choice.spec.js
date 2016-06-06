jest.unmock('../Choice.jsx');
jest.unmock('../../conf/base.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Choice from '../Choice.jsx';


describe('Choice', () => {

    var component, componentNode;
    const onSelect = function(a) {
        return a;
    }

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <Choice
              onSelect={onSelect}
            />
        );
        componentNode = ReactDOM.findDOMNode(component);
    });

    it('should show 3 buttons', () => {
        var buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).toBe(3);
        expect(buttons[0].textContent).toBe('ROCK');
        expect(buttons[1].textContent).toBe('PAPER');
        expect(buttons[2].textContent).toBe('SCISSORS');
    });

    it('should make a callback when choose an element', () => {
        var buttons = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
        TestUtils.Simulate.click(buttons[0]);
        // TODO spy su callback
        //expect(onSelect.mock.calls.length).toEqual(1);
    });

});