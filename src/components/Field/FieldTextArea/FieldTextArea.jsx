import React from 'react'
import { TextArea } from './styles';

const FieldTextArea = ({ placeholder, name, value, onChange:handleOnChange }) => {
    return (
        <TextArea
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FieldTextArea;
