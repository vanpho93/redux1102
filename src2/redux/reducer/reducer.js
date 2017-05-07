import mang from './mangReducer';
import isUpdating from './isUpdatingReducer';

const redux = require('redux');

const reducer = redux.combineReducers({
    mang, isUpdating
});

export default reducer;
