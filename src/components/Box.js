import React, { Component } from 'react';
import { connect } from 'react-redux';

class Box extends Component {
    them() {
        const { dispatch } = this.props;
        dispatch({ type: 'THEM' });
    }
    bot() {
        const { dispatch } = this.props;
        dispatch({ type: 'BOT' });
    }
    render() {
        return (
            <div>
                <h2>{this.props.vl}</h2>
                <button onClick={this.them.bind(this)}>THEM</button>
                <button onClick={this.bot.bind(this)}>BOT</button>
            </div>
        );
    }
}

export default connect(state => ({ vl: state.value }))(Box);
