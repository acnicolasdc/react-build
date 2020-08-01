import React, {useState} from 'react'
import ButtonRadioGroup from '../../../../components/Button/ButtonRadioGroup';
import CardRadioOption from './components/CardRadioOption'

export default function Override() {
    const [selected, setSelected] = useState("first");
    return (
        <div>
            <h1>Hello Override</h1>
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
            <ButtonRadioGroup 
                check={selected}
                onChange={setSelected}
                overrides={{
                    RadioButtonLabel:{
                        component: ({ $style, onClick }) => <button style={$style} onClick={onClick}> más informacion</button>,
                        style:{
                            marginTop:'10px'
                        },
                        props: {
                            onClick: () => alert('Lean-tech.io')
                        }
                    },
                    RadioContainer:{
                        style:{
                            flexDirection:'column'
                        }
                    },
                    Root: {
                        style:{
                            flexDirection:'row'
                        }
                    },
                    RadioButton:{
                        component: CardRadioOption

                    }

                }}
                options={[{ name:'defaultRadio', value:'defaultValue', option:'House'}, { name:'radio2', value:'radio2', option:'Apartment'},
                { name:'radio3', value:'radio3', option:'Nicolás'}]}
            />
            <ButtonRadioGroup  />
            </div>
        </div>
    )
}
