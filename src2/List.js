import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import NoteForm from './NoteForm';

class List extends Component {
    render() {
        return (
            <div>
                <NoteForm />
                { this.props.mang1.map(e => <Note content={e.content} id={e.id} key={e.id} />) }
            </div>
        );
    }
}

export default connect(state => ({ mang1: state.mang }))(List);
