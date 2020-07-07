import { combineReducers } from 'redux';
import todoReducer from './todos/todoReducer';
import nasaReducer from './nasa/nasaReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  nasa: nasaReducer,
});

export default rootReducer;
