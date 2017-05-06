import React, { Component } from 'react';
import Note from './Note';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                'ReactJS',
                'NodeJS',
                'React Native',
                'PHP',
                'Android'
            ]
        };
    }
    render() {
        return (
            <div>
                { this.state.mang.map(e => <Note content={e} key={e} />) }
            </div>
        );
    }
}
