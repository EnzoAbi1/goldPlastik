import styles from "./About.page.module.scss"
import { Header } from '@/components/Header/Header'
import { IconMap } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { Card, Center, Container, Flex, Title } from '@mantine/core'
import Map from '@/components/Map/Map'



const About = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}><div className={styles.header}><Header /></div>
            <Container size={"xl"} mt={50}>

                <div className={styles.aboutUsFlex}>
                    <div className={styles.item}>
                        <Card m={10} withBorder w={350} h={550}
                            shadow="md" p={"lg"} radius={"lg"}
                            styles={{
                                root: {
                                    borderColor: '#dbb47b', // Your desired border color here
                                    borderWidth: "2px"
                                },
                            }}
                        >
                            <Card.Section p={"xs"}><Center><Title order={2}>{t("Location")}</Title></Center></Card.Section>
                            <Card.Section p={"xs"}><Flex align={"center"}><IconMap color='#dbb47b'></IconMap> {t("adress")} </Flex></Card.Section>
                            <Card.Section p={"xs"}><Map /></Card.Section>
                        </Card>
                    </div>
                    <div> <Card m={10} withBorder w={350} h={550}
                        shadow="md" radius={"lg"} p={"lg"}
                        styles={{
                            root: {
                                borderColor: '#dbb47b', // Your desired border color here
                                borderWidth: "2px"
                            },
                        }}>
                        <Card.Section p={"xs"}><Center><Title order={2}>{t("AboutUs")}</Title></Center></Card.Section></Card></div>
                    <div><Card m={10} withBorder w={350} h={550}
                        shadow="md" radius={"lg"} p={"lg"}
                        styles={{
                            root: {
                                borderColor: '#dbb47b', // Your desired border color here
                                borderWidth: "2px"
                            },
                        }}><Card.Section><Center><Title order={2}>{t("ContactUs")}</Title></Center></Card.Section></Card> </div>
                </div>

            </Container>
        </div>
    )
}

export default About