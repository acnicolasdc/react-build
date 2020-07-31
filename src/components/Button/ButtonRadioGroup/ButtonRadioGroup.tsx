import React from 'react'
import * as defaultComponents from './styles';

type DefaultComponents = {
    RadioContainer?: any;
    RadioButtonLabel?: any;
    RadioButton?: any;
    Root?: any;
}
type OverrideComponents = {
    style?: object;
    props?: object;
    component?: any;
}

function getComponents(defaultComponents: any, overrides: any): object{
    return Object.keys(defaultComponents).reduce((acc: any, name: string)=>{
        const override: OverrideComponents = overrides[name] || {};
        const component: any = override.component || defaultComponents[name];
        acc[name] = {
            component: component,
            props: { $style: override.style, ...override.props},
        };
        return acc;
    }, {})
}

export interface ButtonRadioGroupProps {
    overrides: any;
    options: Array<object>;
    onChange: (name: string) => void;
    check: boolean;
};

const ButtonRadioGroup: React.FunctionComponent<ButtonRadioGroupProps> = ({ overrides, options, check, onChange}) => {
    const {
        RadioContainer: { component: RadioContainer, props: radioContainerProps},
        RadioButtonLabel: { component: RadioButtonLabel, props: radioButtonLabelProps},
        RadioButton: { component: RadioButton, props: radioButtonProps},
        Root: { component: Root, props: rootProps}
    }: DefaultComponents = getComponents(defaultComponents, overrides);

    return (
        <Root {...rootProps}>
            {options?.map(({ name, value, option}:any)=>(
                <RadioContainer key={value} {...radioContainerProps}>
                        <RadioButton
                            $name={name}
                            $value={value}
                            $isChecked={check === name}
                            onClick={()=> onChange(name)}
                            {...radioButtonProps}
                        />
                    <RadioButtonLabel {...radioButtonLabelProps}>{option}</RadioButtonLabel>
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
