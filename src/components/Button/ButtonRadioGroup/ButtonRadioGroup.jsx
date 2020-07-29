import React, { useCallback, useState } from 'react'
import * as defaultComponents from './styles';

function getComponents(defaultComponents, overrides){
    return Object.keys(defaultComponents).reduce((acc, name)=>{
        const override = overrides[name] || {};
        acc[name] = {
            component: override.component || defaultComponents[name],
            props: { $style: override.style, ...override.props},
        };
        return acc;
    }, {})
}

const ButtonRadioGroup = ({ overrides, options}) => {
    const [ checked, setChecked ] = useState(null);

    const getProps = () => ({
        $isChecked: checked,
    })
    const {
        RadioContainer: { component: RadioContainer, props: radioContainerProps},
        RadioButtonHover: { component: RadioButtonHover, props: radioButtonHoverProps},
        RadioButtonLabel: { component: RadioButtonLabel, props: radioButtonLabelProps},
        RadioButton: { component: RadioButton, props: radioButtonProps},
        Root: { component: Root, props: rootProps}
    } = useCallback(getComponents(defaultComponents, overrides),[overrides])
    const getSharedProps = getProps();
    return (
        <Root {...getSharedProps} {...rootProps}>
            {options?.map(({ name, value, option})=>(
                <RadioContainer key={value} {...getSharedProps} {...radioContainerProps}>
                    <div className="radio_base">
                        <RadioButton
                            type="radio"
                            name={name}
                            value={value}
                            {...radioButtonProps}
                            {...getSharedProps}
                        />
                        <RadioButtonHover {...getSharedProps} {...radioButtonHoverProps}/>
                    </div>
                    <RadioButtonLabel {...getSharedProps} {...radioButtonLabelProps}>{option}</RadioButtonLabel>
                </RadioContainer>
            ))}
        </Root>
    )
}

ButtonRadioGroup.defaultProps = {
    overrides:{},
    options:[{ name:'defaultRadio', value:'defaultValue', option:'House'}],
}

export default React.memo(ButtonRadioGroup)
