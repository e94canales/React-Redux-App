import axios from 'axios'
export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchCatImg = () => {

    return dispatch => {
        dispatch({ type: 'FETCH_START'})

        axios.get('https://aws.random.cat/meow')
            .then( response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data.file})
            })
            .catch( err => console.log(err))
    }
}

export const FETCH_CAT_QUOTE_START = 'FETCH_CAT_QUOTE_START'
export const FETCH_CAT_QUOTE_SUCCESS = 'FETCH_CAT_QUOTE_SUCCESS'
export const fetchCatQuote = () => {

    return dispatch => {
        dispatch({ type: 'FETCH_CAT_QUOTE_START'})

        const randomNum = Math.floor(Math.random() * 200)

        axios.get('https://cat-fact.herokuapp.com/facts')
            .then( response => {
                dispatch({ type: 'FETCH_CAT_QUOTE_SUCCESS', payload: response.data.all[randomNum].text})
            })
            .catch( err => console.log(err))
    }
}