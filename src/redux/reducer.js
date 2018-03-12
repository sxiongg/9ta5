// const initialState = {
//     doggoImg: '',
//     footerImages: []
// }

// const rootReducer = (state = initialState, action) => {
//     if (action.type == 'CHANGE_DOGGO') {
//         state = {
//             ...state,
//             doggoImg: action.payload
//         }
//     }
//     if (action.type == 'LOAD_FOOTER') {
//         state = {
//             ...state,
//             footerImages: state.footerImages.concat(action.payload)
//         }
//     }
//     return state;
// }

// export default rootReducer