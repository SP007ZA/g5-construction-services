import { Box, Button, Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import styles from  "../../styles/Carousel.module.css"
import React, { useEffect, useState } from 'react'
import {SlideData } from '../../Data/SlideData'
import { Link } from 'react-scroll'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type TimeOuts = string | number | NodeJS.Timeout | undefined
function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  

  let timeOut : TimeOuts = undefined
  useEffect(() => {
  timeOut = autoPlay ? setTimeout(() => {
      slideRight()
    }, 8000) : undefined
  },[current])
  
  const slideRight = () => {
    setCurrent(current ===   SlideData.slideData.length -1 ? 0 : current + 1)
 
   }
   const slideLeft = () => {
     setCurrent(current ===  0 ?  SlideData.slideData.length -1 : current - 1)
   }
  return (
    <Box  display="flex" height="125%" width="100%">
        <div className={styles.carousel_wrapper}>
      {
        SlideData.slideData.map((image:any, index:any) => (
          <div key={index}  className={index == current ? styles["carousel_card"]+ " "+ styles["carousel_card_active"] : styles.carousel_card }>
          <img className={styles.card_image} src={image.url} alt={image.alt} /> 
          </div>
        ))
      }
      <div className={styles.carousel_text}>
        <Flex w="auto" flexDirection="column" alignItems="center" justifyContent="center"  >
        <Heading color="white" as='h2' size={['sm','sm', 'md','lg']}>
    G5 CONSTRUCTION SERVICES
  </Heading>
  <Text mt={0} fontWeight="bold" color="white" p={3} fontSize={['2xs','sm', 'md','lg']}>Qualified and experienced professional builders. </Text>
 <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
 <Button mt={2} colorScheme="blackAlpha" size={['xs','sm', 'md','lg']}>
   Get A Quote
  </Button>
 </Link>
        </Flex>
     
      </div>
       <div className={styles.carousel_arrow_left} onClick={slideLeft} ><ChevronLeftIcon /></div>
      <div className={styles.carousel_arrow_right} onClick={slideRight}><ChevronRightIcon /></div>
      <div className={ styles.carousel_pagination} >
        {
          SlideData.slideData.map((_:any, index:any) => (
              <div key={index} className={index == current ? styles["pagination_dot"]+ " "+ styles["pagination_dot_active"] : styles.pagination_dot }
                onClick={() => setCurrent(index)}
              >

              </div>
          ))
        }
      </div>
        </div>

        </Box>
      

  
  
  )
}

export default ImageSlider