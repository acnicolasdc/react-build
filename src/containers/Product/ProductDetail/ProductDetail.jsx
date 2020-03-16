import React, { useState, useEffect } from 'react'
import FormBody from '../../../components/Form/FormBody';
import FormInput from '../../../components/Form/FormInput';
import TextArea from '../../../components/Form/FormTextArea';
import GlobalButton from '../../../components/Global/GlobalButton';
import { ProductDetailContainer, LoaderContainer } from './styles';

function ProductDetail({ Item, Spinner }) {
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({name:'', description:''});

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() =>{
            setProduct({
                name:'iPhone 11',
                description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system'
            })
            setIsLoading(false);
        },1000);
    }, []);

    const _onChangeForm = (e) => {
        let newProductInfo = {...product};
        newProductInfo[e.target.name] = e.target.value;
        setProduct(newProductInfo);
    }

    return (
        isLoading?<LoaderContainer>
            <Spinner />
        </LoaderContainer>:
        <ProductDetailContainer>
            <Item
                disabledFooterButton={true}
                disabledTopButton={true}
                name={product.name}
                description={product.description}
            />
            <div className="form-block">
                <FormBody render ={[
                    <FormInput
                        name='name'
                        placeholder='Write a new name'
                        value={product.name}
                        onChange={_onChangeForm}
                    />,
                    <TextArea
                        name='description'
                        placeholder='Write a new description'
                        value={product.description}
                        onChange={_onChangeForm}
                    />,
                    <GlobalButton title='Update product'/>
                ]}/>
            </div>
        </ProductDetailContainer>
    )
}
export default ProductDetail;
