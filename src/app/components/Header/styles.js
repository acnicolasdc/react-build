import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 80px;
    border: none;
    outline: none;
    /* margin-left: auto;
    margin-right: auto;
    padding: 5px 15px;
    text-align:center; */
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    /* :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    p {
        font-size: 1rem;
        color: ${props => props.theme.textColor};
        padding: 0px 20px;
    } */

`;