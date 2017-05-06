import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    add() {
        const { txtContent, txtId } = this.refs;
        const { dispatch } = this.props;
        const item = { id: txtId.value, content: txtContent.value };
        dispatch({ type: 'THEM', item });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="content" ref="txtContent" />
                <input type="text" placeholder="id" ref="txtId" />
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}

export default connect()(NoteForm);
