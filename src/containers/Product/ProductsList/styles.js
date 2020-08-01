import styled from 'styled-components';
import { GlobalLoaderContainer } from '../styles';
export const ListContainer =  styled.div`
    position: relative;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    padding: 20px;
`;
export const LoaderContainer = GlobalLoaderContainer;