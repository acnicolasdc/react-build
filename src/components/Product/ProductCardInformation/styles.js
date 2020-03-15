import styled from 'styled-components';

export const CardContainer =  styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top:100px;
    border-radius:4px;
    max-width:450px;
    max-height:650px;
    background-color:#E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    text-align: center;
    padding: 15px 20px;
    h1 {
        font-size: 3rem;
        color: rgb(163,177,198,0.6);
        margin: auto;
        vertical-align: middle;
        margin-bottom: 15px;
    }
    p {
        font-size: 1rem;
        color: rgb(163,177,198,1);
        padding: 0px 20px;
    }
    img {
        width: 80%;
        object-fit: contain;
        -webkit-filter: grayscale(90%); /* Safari 6.0 - 9.0 */
        filter: grayscale(90%);
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