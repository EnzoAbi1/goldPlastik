import React from 'react'
import styles from "./Category.page.module.scss"
import { Header } from '@/components/Header/Header'
import { Card, Center, Container, Flex, Image, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../Products/Products.list'
const Category = () => {

    const navigate = useNavigate()
    const categories =
        [{ name: "Raflar", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products/category1" },
        { name: "Kategori 2", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products/category2" },
        { name: "Kategori 3", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products/category3" },
        { name: "Kategori 4", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products/category4" },
        { name: "Kategori 5", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products/category5" },
        { name: "Kategori 6", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products/category6" }]

    return (
        <div className={styles.main}>
            <div className={styles.header}><Header /></div>
            <Container size={"xl"}>
                <Flex wrap={"wrap"}>
                    {categories.map((category) => {
                        return <Card m={10} withBorder w={380} h={350}
                            shadow="md" p={"lg"} radius={"lg"}
                            styles={{
                                root: {
                                    borderColor: '#dbb47b', // Your desired border color here
                                    borderWidth: "2px"
                                },
                            }}
                            onClick={() => navigate(category.link)}
                        >
                            <Card.Section><Center><Title>{category.name}</Title></Center>
                            </Card.Section><Card.Section><Image h={250} src={category.img} /></Card.Section>
                            <Card.Section>{category.content}</Card.Section>
                        </Card>
                    })}
                </Flex>
            </Container>
        </div>
    )
}

export default Category