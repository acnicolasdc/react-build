import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    border-radius:4px;
    max-width:450px;
    max-height:650px;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    text-align: center;
    padding: 25px 20px;
    .product-title {
        font-size: 3rem;
        color: ${props => props.theme.titleColor};
        margin: auto;
        vertical-align: middle;
        margin-bottom: 15px;
    }
    .product-description {
        font-size: 1rem;
        color: ${props => props.theme.textColor};
        margin: 0px 20px;
    }
    .img-container {
        max-height: 350px;
        padding: 20px;
        img {
            width: 60%;
            object-fit: contain;
            -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
            filter: grayscale(50%);
        }
    }

    .relative-button{
        position: absolute;
        right: 4%;
    }
    .footer-button{
        margin-top: 20px;
    }
    .hidden {
        display: none;
    }
`;