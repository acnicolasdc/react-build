import styled from 'styled-components';

export const ListContainer =  styled.div`
    position: relative;
    display: grid;
    grid-gap: 20px;
    grid-column-rows: 1fr 2fr 1fr;
    padding: 20px 0px;
    .list-element {
        grid-column-start: 2;
        grid-row-start: auto;
        max-width: 450px;
    }
`;

export const LoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;