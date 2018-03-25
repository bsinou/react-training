import * as types from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_RESULT:
            return {
                results: state.results.concat({ key: new Date(), result: action.currRes })
            };
        case types.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            // Note: filter returns a *new* Array
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
                results: newArray
            };
        default:
            return state;
    }
};

export default reducer;