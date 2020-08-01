import React from 'react'
import { FormContainer } from './styles'


const FormVertical = ({ render, onSubmit }) => {
    const _renderInputs = () => {
        return render.map( (children, index) => (
            <div className ="form-inputs" key={index}>{children}</div>
        ));
    }
    return (
        <FormContainer onSubmit={ (e)=> {
                e.preventDefault()
                onSubmit()
            } }>
            <fieldset>
                {_renderInputs()}
            </fieldset>
        </FormContainer>
    )
}

export default FormVertical
