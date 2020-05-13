export const initialState = {
    catImgSrc: '',
    fetchInitiated: false,
    catQuote: '',
}

export const mainReducer = (state = initialState, action) => {

    switch(action.type){
        case 'FETCH_START':
            return {
                ...state,
                fetchInitiated: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                catImgSrc: action.payload,
                fetchInitiated: false
            }
        case 'FETCH_CAT_QUOTE_SUCCESS':
            return {
                ...state,
                catQuote: action.payload
            }
        

        default:
            return state
    }
}