import React from 'react'
import { FormContainer } from './styles'


const FormBody = ({ theme: themeProvider, render, onSubmit:handleOnSubmit }) => {
    const _renderInputs = () => {
        return render.map( (children, index) => (
            <div className ="form-inputs" key={index}>{children}</div>
        ));
    }
    return (
        <FormContainer onSubmit={handleOnSubmit} theme={ themeProvider }>
            <fieldset>
                {_renderInputs()}
            </fieldset>
        </FormContainer>
    )
}

export default FormBody
