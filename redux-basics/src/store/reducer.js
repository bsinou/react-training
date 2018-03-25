import * as types from './actions'

const initialState = {
    counter: 0,
    results: []
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
            case types.STORE_RESULT:
            return {
                ...state,
                results : state.results.concat({key: new Date(), result: state.counter})
            };
        case types.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            // Note: filter returns a new Array
            const newArray = state.results.filter(obj => obj.key !== action.toDeleteKey 
                // {
                // if (obj.key !== action.toDeleteKey){
                //     console.log("Key Not OK\n", obj.key, "\n",action.toDeleteKey );
                //     return true;
                // } else {
                //     console.log("##### Key OK");
                //     return false;
                // }}
            );
            return {
                ...state,
                results : newArray
            };
        default:
            return state;
    }
};

export default reducer;