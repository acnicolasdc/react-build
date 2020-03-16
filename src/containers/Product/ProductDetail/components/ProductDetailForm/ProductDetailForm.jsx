

import React from 'react';

function ProductDetailForm({ Form, Input, TextArea, Button, product, onChangeInput:handleOnChangeInput }) {
    return (
        <Form
            render={[
                <Input
                    name='name'
                    placeholder='Write a new name'
                    value={product.name}
                    onChange={handleOnChangeInput}
                />,
                <TextArea
                    name='description'
                    placeholder='Write a new description'
                    value={product.description}
                    onChange={handleOnChangeInput}
                />,
                <Button title='Update product'/>
            ]}
        />
    )
}
export default ProductDetailForm;
