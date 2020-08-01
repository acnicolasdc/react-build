import styled from 'styled-components';

export const FormContainer =  styled.form`
    position: relative;
    border-radius:4px;
    min-width:450px;
    background-color:${props => props.theme.background};
    box-shadow: ${props => props.theme.squaredShadow};
    text-align: center;
    padding: 25px 20px;
    fieldset {
        display: grid;
        border: 0;
        padding: 0;
    }
    .form-inputs {
        margin-bottom: 15px;
        width: 100%;
    }
`;