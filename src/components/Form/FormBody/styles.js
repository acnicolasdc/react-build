import styled from 'styled-components';

export const FormContainer =  styled.form`
    position: relative;
    border-radius:4px;
    min-width:450px;
    background-color: #E0E5EC;
    box-shadow:
        9px 9px 16px rgb(163,177,198,0.6),
        -9px -9px 16px  rgba(255,255,255, 0.5);
    text-align: center;
    padding: 15px 20px;
    fieldset {
        display: grid;
        border: 0;
        padding: 0;
    }
    .form-inputs {
        margin-bottom: 15px;
    }
`;