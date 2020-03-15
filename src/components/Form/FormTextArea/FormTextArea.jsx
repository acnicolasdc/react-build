import React from 'react'
import { TextArea } from './styles';

const FormTextArea = ({ placeholder, name, value, onChange:handleOnChange }) => {
    return (
        <TextArea
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FormTextArea;
