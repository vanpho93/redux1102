import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    add() {
        const { txtContent, txtId } = this.refs;
        const { dispatch } = this.props;
        const item = { id: txtId.value, content: txtContent.value };
        dispatch({ type: 'THEM', item });
        dispatch({ type: 'TOGGLE_IS_UPDATING' });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="content" ref="txtContent" />
                <br /><br />
                <input type="text" placeholder="id" ref="txtId" />
                <br /><br />
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}

export default connect()(NoteForm);
