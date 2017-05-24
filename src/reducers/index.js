import { combineReducers } from 'redux';
import { boardReducer, controlReducer, counterReducer } from './reducers_play';

const rootReducer = combineReducers({
    board: boardReducer,
    counter: counterReducer,
    control: controlReducer
});

export default rootReducer;
