import React from 'react'
import styles from './Home.page.module.scss'
import { Header } from '@/components/Header/Header'
import { Carousel } from '@mantine/carousel'
import { Image, rem } from '@mantine/core'
import '@mantine/carousel/styles.css';

const Homepage = () => {

  const heightOfImage = rem(795)
  return (
    <div className={styles.main}><div className={styles.header}><Header /></div>
      <div className={styles.carousel}>
        <Carousel slideSize={"100%"} height={heightOfImage} withIndicators>
          <Carousel.Slide><Image h={heightOfImage} src={"/assets/Dukkan.jpeg"}></Image></Carousel.Slide>
          <Carousel.Slide><Image h={heightOfImage} src={"/assets/SiyahLogo.jpg"}></Image></Carousel.Slide>
        </Carousel>
      </div>
    </div>
  )
}

export default Homepage