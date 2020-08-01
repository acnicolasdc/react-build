import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 2rem;
        color: ${props => props.theme.textColor};
        padding: 0px;
    }
`;