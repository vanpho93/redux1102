const mangDefault = [
    { id: 1, content: 'ReactJS' },
    { id: 2, content: 'NodeJS' },
    { id: 3, content: 'React Native' },
    { id: 4, content: 'PHP' },
    { id: 5, content: 'Android' }
];

const mangReducer = (state = mangDefault, action) => {
    if (action.type === 'XOA') {
        return state.filter(e => e.id !== action.id);
    }
    if (action.type === 'THEM') {
        return [action.item, ...state];
    }
    return state;
};

export default mangReducer;
