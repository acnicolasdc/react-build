import React from 'react'
import { FormContainer } from './styles'


const FormBody = ({ render, onSubmit: handleOnSubmit, ...restProps }) => {
    const _renderInputs = () => {
        return render.map( (children, index) => (
            <div className ="form-inputs" key={index}>{children}</div>
        ));
    }
    return (
        //in this line we pass the theme provider
        <FormContainer onSubmit={ handleOnSubmit } {...restProps}>
            <fieldset>
                {_renderInputs()}
            </fieldset>
        </FormContainer>
    )
}

export default FormBody
