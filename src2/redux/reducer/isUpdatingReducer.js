const isUpdatingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_IS_UPDATING') return !state;
    return state;
};

export default isUpdatingReducer;
