import React from 'react'
import { FormContainer } from './styles'


const FormVertical = ({ render, onSubmit: handleOnSubmit }) => {
    const _renderInputs = () => {
        return render.map( (children, index) => (
            <div className ="form-inputs" key={index}>{children}</div>
        ));
    }
    return (
        <FormContainer onSubmit={ (e)=> {
                e.preventDefault()
                handleOnSubmit()
            } }>
            <fieldset>
                {_renderInputs()}
            </fieldset>
        </FormContainer>
    )
}

export default FormVertical
