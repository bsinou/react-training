import * as types from '../actions'

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
        // Other syntax: 
        // WARNING: this is not a deep copy, objects referenced by pointer 
        // will be the same: only the pointer value will be copied, 
        // so they will point to the same object in the end
        // const newState = Object.assign({}, state);
        // newState.counter = state.counter + 1;
        // return newState;
        return {
            ...state,
            counter: state.counter + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case types.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case types.MINUS:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;
    }
};

export default reducer;