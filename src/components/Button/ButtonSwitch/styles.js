import styled from 'styled-components';

export const ButtonSwitchContainer =  styled.button`
    width: 4rem;
    height: 2rem;
    margin: 2rem 0;
    position: relative;
    border-radius: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    padding: 0;
    :hover {
        box-shadow: ${props => props.theme.insetShadow};
    }
    p {
        font-size: 1rem;
        color: ${props => props.theme.textColor};
        padding: 0px 20px;
    }
`;