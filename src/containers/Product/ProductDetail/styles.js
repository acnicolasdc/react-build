import styled from 'styled-components';
import { GlobalLoaderContainer } from '../styles';

export const ProductDetailContainer =  styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow:column;
    align-items:center;
    .form-block{
        margin-top: 20px;
    }
`;
export const LoaderContainer = GlobalLoaderContainer;