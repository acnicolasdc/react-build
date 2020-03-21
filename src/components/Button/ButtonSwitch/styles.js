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
    background-color: #E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    padding: 0;
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