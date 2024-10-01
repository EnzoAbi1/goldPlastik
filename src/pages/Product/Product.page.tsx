import { Header } from '@/components/Header/Header'
import { Card, Center, Container, Flex, Image, Text, Title } from '@mantine/core'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { IProduct, productList } from '../Products/Products.list';
import { Carousel } from '@mantine/carousel';
import { useTranslation } from 'react-i18next'

const Product = () => {
    const { productId } = useParams();
    const { t } = useTranslation()
    const [product, setProduct] = useState<IProduct>()

    useEffect(() => {
        const chosenProduct = productList.find((product) => { return product.id === productId })
        if (chosenProduct) { setProduct(chosenProduct) }
    }, [])
    const carouselSlides = (product: IProduct) => {
        return product.media.map((media) => (
            <Carousel.Slide key={media.url}>
                <Image src={media.url} />
            </Carousel.Slide>
        ));
    };
    if (product)
        return (
            <div><div><Header /></div><div><Container size={"xl"}>

                <Card mt={"xl"} mb={"xl"} withBorder w={"100%"} h={"70vh"}
                    shadow="md" p={"xl"} radius={"lg"}
                    styles={{
                        root: {
                            borderColor: '#dbb47b',
                            borderWidth: "2px"
                        },
                    }}
                >
                    <Card.Section><Center><Title order={2}>{product?.name}</Title></Center></Card.Section>
                    <Card.Section><Flex wrap="nowrap" ><Carousel w={"30vw"}>{carouselSlides(product)}</Carousel><Container w={"30vw"}><Text><Title order={4}>{t("productInformation")}</Title>{product.detailedInformation}</Text></Container></Flex></Card.Section>
                </Card>

            </Container></div></div>
        )
}

export default Product