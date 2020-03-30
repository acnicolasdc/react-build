import React from 'react'
import { TextArea } from './styles';

const FieldTextArea = ({ placeholder, name, value, onChange:handleOnChange, ...restProps }) => {
    return (
        <TextArea
            {...restProps}
            placeholder={placeholder}
            name={name}
            onChange={handleOnChange}
            value={value}
        />
    )
}

export default FieldTextArea;
