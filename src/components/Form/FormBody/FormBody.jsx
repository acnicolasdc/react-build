import React from 'react'
import { FormContainer } from './styles';

const FormBody = ({ inputs }) => {
    const _renderInputs = () => {
        return inputs.map( (children, index) => (
            <div className ="form-inputs" key={index}>{children}</div>
        ));
    }
    return (
        <FormContainer>
            <fieldset>
                {_renderInputs()}
            </fieldset>
        </FormContainer>
    )
}

export default FormBody;
