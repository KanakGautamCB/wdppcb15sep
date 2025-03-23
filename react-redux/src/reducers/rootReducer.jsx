import {combineReducers} from 'redux';
import counterReducer from './counterReducer/counter.reducer';
import colorReducer from './colorReducer/color.reducer';

const rootReducer = combineReducers({counterReducer,colorReducer})

export default rootReducer