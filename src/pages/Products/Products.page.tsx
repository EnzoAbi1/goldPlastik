import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct, productList } from './Products.list'
import { Header } from '@/components/Header/Header'
import { Card, Center, Image, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

const Products = () => {

  const { category } = useParams()

  const [products, setProducts] = useState<IProduct[]>()

  useEffect(() => {

    const productsListFiltered: IProduct[] = productList.filter((product) => product.category === category)

    setProducts(productsListFiltered)
  }, [])

  const carouselSlides = (pro: IProduct) => {
    return pro.media.map((media) => (
      <Carousel.Slide key={media.url}>
        <Image src={media.url} />
      </Carousel.Slide>
    ));
  };
  return (
    <div>
      <div><Header /></div>
      <div>{products?.map((product) => {
        return <Card m={10} withBorder w={280} h={280}
          shadow="md" p={"lg"} radius={"lg"}
          styles={{
            root: {
              borderColor: '#dbb47b', // Your desired border color here
              borderWidth: "2px"
            },
          }}

        >
          <Card.Section><Center><Title order={4}>{product.name}</Title></Center></Card.Section>
          <Card.Section><Carousel height={200} withIndicators>{carouselSlides(product)}</Carousel></Card.Section>
          <Card.Section>{product.information}</Card.Section>
        </Card>
      })}</div>
    </div>
  )
}

export default Products