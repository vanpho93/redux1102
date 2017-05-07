import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NoteForm from './NoteForm';

class List extends Component {
    toggle() {
        const { dispatch } = this.props;
        dispatch({ type: 'TOGGLE_IS_UPDATING' });
    }
    render() {
        const jsx = this.props.isUpdating ? 
        <NoteForm /> : 
        <button onClick={this.toggle.bind(this)}>Add</button>;
        return (
            <div>
                { jsx }
                { this.props.mang1.map(e => <Note content={e.content} id={e.id} key={e.id} />) }
            </div>
        );
    }
}

export default connect(state => ({ 
    mang1: state.mang, 
    isUpdating: state.isUpdating 
}))(List);
