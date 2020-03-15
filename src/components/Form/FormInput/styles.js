import styled from 'styled-components';

export const Input =  styled.input`
    position: relative;
    width: 100%;
    height: 30px;
    border-radius: 25px;
    border:none;
    outline: none;
    background-color: #FFF;
    box-shadow:
            inset -7px -7px 25px 0 rgba(255, 255, 255, 0.9),
            inset 7px 7px 25px 0 rgb(163,177,198,0.3);
    padding: 0px 20px;
    font-size: 1rem;
    color: rgb(163,177,198,0.8);
    ::placeholder {
        color: rgb(163,177,198,0.6);
    }
`;