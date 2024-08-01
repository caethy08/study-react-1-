import React, { Component } from 'react';
import ShowNumber from './ShowNumber';

export default class ShowNumberSuper extends Component {
    render() {
        return (
            <div id='super'>
                <h1>ShowNumberSuper</h1>
                {/* 
                showNumber state의 number: {this.props.number}
                <ShowNumber number={this.props.number}></ShowNumber>
                */}

                <ShowNumber></ShowNumber>
            </div>
        );
    }
}

