import { Header } from '@/components/Header/Header'
import { Container } from '@mantine/core'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { productList } from '../Products/Products.list';

const Product = () => {
    const { productName } = useParams();

    const [product, setProduct] = useState()

    useEffect(() => {

        const chosenProduct = productList.map((product) => { product.name === productName })

    }, [])
    return (
        <div><div><Header /></div><div><Container size={"xl"}></Container></div></div>
    )
}

export default Product