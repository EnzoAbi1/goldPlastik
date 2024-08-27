import React from 'react'
import styles from "./Category.page.module.scss"
import { Header } from '@/components/Header/Header'
import { Card, Container, Flex, Image, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
const Category = () => {
    const navigate = useNavigate()
    const categories = [{ name: "Raflar", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products1" },
    { name: "Kategori 2", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products2" },
    { name: "Kategori 3", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products3" },
    { name: "Kategori 4", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products4" },
    { name: "Kategori 5", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products5" },
    { name: "Kategori 6", img: "/assets/categories/shelf.jpg", content: "lorem ipsum", link: "/products6" }]

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
                            <Card.Section><Title>{category.name}</Title>
                            </Card.Section><Card.Section><Image h={250} src={category.img} /> </Card.Section>
                            <Card.Section>{category.content}</Card.Section>
                        </Card>
                    })}
                </Flex>
            </Container>
        </div>
    )
}

export default Category