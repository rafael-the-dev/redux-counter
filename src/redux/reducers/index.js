import { initialState } from '../state'
import { decrement, increment} from '../actions'

export const reducer = ( state=initialState, action) => {
    switch(action.type) {
        case increment().type: {
            return { ...state, value: state.value + 1 };
        }
        case decrement().type: {
            return { ...state, value: state.value - 1 };
        }
        default: {
            return state;
        }
    }
};