import {combineReducers} from 'redux';
import EmployyesReducer from './reducer_employees';

const rootReducer = combineReducers({
    employees: EmployyesReducer
});

export default rootReducer;