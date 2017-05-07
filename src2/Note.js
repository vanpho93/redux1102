import React, { Component } from 'react';
import { connect } from 'react-redux';

class Note extends Component {
    remove() {
        const { dispatch, id } = this.props;
        dispatch({ type: 'XOA', id });
    }
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
                <button className="alert button" onClick={this.remove.bind(this)}>Xoa</button>
            </div>
        );
    }
}

export default connect()(Note);
