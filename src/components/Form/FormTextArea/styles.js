import styled from 'styled-components';

export const TextArea =  styled.textarea`
    position: relative;
    width: 100%;
    min-height: 100px;
    border-radius: 20px;
    border:none;
    outline: none;
    background-color: #FFF;
    box-shadow:
            inset -7px -7px 25px 0 rgba(255, 255, 255, 0.9),
            inset 7px 7px 25px 0 rgb(163,177,198,0.3);
    padding: 10px 20px;
    font-size: 1rem;
    color: rgb(163,177,198,0.8);
    ::placeholder {
        color: rgb(163,177,198,0.6);
    }
`;