import React, { useEffect } from 'react'
import { fetchCatImg, fetchCatQuote } from '../actions/mainActions'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CatGenerator = props => {

    const { fetchCatImg, fetchCatQuote } = props

    useEffect(() => {
        fetchCatImg()
    }, [fetchCatImg])

    useEffect(() => {
        fetchCatQuote()
    }, [fetchCatQuote])

    return (
        <CatContainer>
            <img src={props.catImgSrc} alt='kitty'/>
            <h5>{props.catQuote}</h5>
        </CatContainer>
    )
}

export default connect(null, {fetchCatImg, fetchCatQuote})(CatGenerator)

const CatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        width: 900px;
        height: 660px;
        margin-top: 3%;
        border-radius: 5px;
        
    }
    h5 {
        color: white;
        font-style: italic;
        padding: 1% 0;
        width: 50%;
        text-align: center;
        
    }
`