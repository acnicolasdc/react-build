import React from 'react'
import { Input } from './styles';

const FieldInput = ({ placeholder, name, value, onChange:handleOnChange }) => {
    return (
        <Input
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FieldInput;
