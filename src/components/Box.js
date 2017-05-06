import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    them() {
        this.setState({ value: this.state.value + 1 });
    }

    bot() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.them.bind(this)}>THEM</button>
                <button onClick={this.bot.bind(this)}>BOT</button>
            </div>
        );
    }
}
