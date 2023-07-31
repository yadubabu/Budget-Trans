import {combineReducers} from 'redux';
import valReducers from './valReducer';


const reducers=combineReducers({
    data:valReducers,
    })
export default reducers;