

import React from 'react';
import FormVertical from 'components/Form/FormVertical';

function ProductDetailForm({ product, onChangeInput:handleOnChangeInput }) {
    return (
        <FormVertical
            render={[
                <FormVertical.Input
                    name='name'
                    placeholder='Write a new name'
                    value={product.name}
                    onChange={handleOnChangeInput}
                />,
                <FormVertical.TextArea
                    name='description'
                    placeholder='Write a new description'
                    value={product.description}
                    onChange={handleOnChangeInput}
                />,
                <FormVertical.Button title='Update product'/>
            ]}
        />
    )
}
export default ProductDetailForm;
