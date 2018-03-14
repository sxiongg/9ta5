const initialState = {
    searchResults: [],
}

const rootReducer = (state = initialState, action) => {
    if (action.type == 'PUSH_API') {
        state = {
            ...state,
            searchResults: action.payload
        }
    }

    if (action.type == 'FILTER_KEYWORD') {
        state = {
            ...state,
            searchResults: action.payload
        }
    }
    
    return state;
}

export default rootReducer