import styled from 'styled-components';

export const ButtonGenericContainer =  styled.button`
    position: relative;
    border: none;
    outline: none;
    border-radius:100px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 15px;
    text-align:center;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    :hover {
        box-shadow:
            inset 1rem 1rem 2rem rgb(163,177,198,0.5),
            inset -1rem -1rem 2rem rgba(255,255,255,.5);
    }
    p {
        font-size: 1rem;
        color: rgb(163,177,198,1);
        padding: 0px 20px;
    }

`;