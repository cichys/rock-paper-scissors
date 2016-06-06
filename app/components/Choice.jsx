import React from 'react';

import conf from '../conf/base';

export default class Choice extends React.Component {

    select(index) {
        this.props.onSelect(conf.choices[index]);
    }


    renderButtons() {
        return conf.choices.map((element, index) => (
            <li key={index}>
                <button
                  type="button"
                  onClick={() => this.select(index)}
                >
                  {element}
                </button>
            </li>
        ));
    }


    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        );
    }

}
