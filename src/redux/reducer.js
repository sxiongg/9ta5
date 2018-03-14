const initialState = {
    searchResults: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'PUSH_API') {
        state = {
            searchResults: action.payload
        }
    }
    
    return state;
}

export default rootReducer