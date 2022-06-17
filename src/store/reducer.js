import { combineReducers } from 'redux-immutable' 

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store/';

const TotalReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
});

export default TotalReducer