import React, { Component } from 'react';

class Greeting extends Component {
    static defaultProps = {
        name:'기본 이름'
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>;
            </div>
        );
    }
}

export default Greeting;