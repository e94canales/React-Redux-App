import React from 'react'
import styled from 'styled-components'

const Nav = props => {

    return (
        <NavContainer>
            <h1>catsource</h1>

            <div className='links'>
                <h6>Home</h6>
                <h6>About</h6>
                <h6>Contact</h6>
            </div>
        </NavContainer>
    )
}

export default Nav

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 1%;
    background-color: black;
    color: white;
   
    .links {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        
        h6 {
            align-self: center;
            margin: 0 1%;
            font-weight: normal;
            font-size: .9rem;
            
            &:hover {
                color: grey;
                cursor: pointer;
            }
        }
    }
    
    
`