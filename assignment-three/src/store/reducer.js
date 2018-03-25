import * as types from './actions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PERSON:
            return {
                persons: state.persons.concat({
                    id: Math.random(), // not really unique but good enough here!
                    name: 'A name',
                    age: Math.floor(Math.random() * 40)
                })
            };
        case types.REMOVE_PERSON:
            const newArr = state.persons.filter(el => el.id !== action.toDeleteId)
            return {
                persons: newArr
            };
        default:
            return state;
    }
};

export default reducer;