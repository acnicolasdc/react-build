import React from 'react'
import { FormContainer } from './styles';

const FormBody = ({ render }) => {
    const _renderInputs = () => {
        return render.map( (children, index) => (
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
