
export type DefaultComponents = {
    RadioContainer?: any;
    RadioButtonLabel?: any;
    RadioButton?: any;
    Root?: any;
    [key: string]: any
}

export type OverrideComponents = {
    style?: object;
    props?: object;
    component?: React.ComponentType<any>;
}

export type Options = {
    name: string;
    value: string;
    option: string;
}