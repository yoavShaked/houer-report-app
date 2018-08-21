import {EMPLOYEES_BY_MONTH} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case EMPLOYEES_BY_MONTH:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}