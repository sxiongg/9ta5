const initialState = {
    searchResults: [],
    savedResults: []
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

        console.log(state.searchResults)
    }

    if (action.type == 'FILTER_LOCATION') {
        state = {
            ...state,
            searchResults: action.payload
        }

        console.log(state.searchResults)
    }
    
    if (action.type == 'SAVE_JOB') {
        state = {
            ...state,
            savedResults: state.savedResults.concat(action.payload)
        }
    }

    if (action.type == 'DELETE_JOB') {
        state = {
            ...state,
            savedResults: action.payload
        }
    }
    return state;
}

export default rootReducer