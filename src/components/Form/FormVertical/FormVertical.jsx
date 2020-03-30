import React from 'react'
import { FormContainer } from './styles'


const FormVertical = ({ render, onSubmit: handleOnSubmit, ...restProps }) => {
    const _renderInputs = () => {
        return render.map( (children, index) => (
            <div className ="form-inputs" key={index}>{children}</div>
        ));
    }
    return (
        <FormContainer onSubmit={ (e)=> {
                e.preventDefault()
                handleOnSubmit()
            } } {...restProps}>
            <fieldset>
                {_renderInputs()}
            </fieldset>
        </FormContainer>
    )
}

export default FormVertical
