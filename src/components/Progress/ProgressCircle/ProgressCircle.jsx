import React from 'react'
import { ProgressCircleLoader } from './styles';

const ProgressCircle = ({ theme: themeProvider, size }) => {
    return (
        <ProgressCircleLoader theme={ themeProvider } size={ size }/>
    )
}

export default ProgressCircle;
