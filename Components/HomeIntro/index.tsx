import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function HomeIntro() {
  return (
    <Flex mt={[-75, -75, 0 ,0]} w="100%" padding={5} bgColor="#072331" flexDirection="column"  alignItems="center" justifyContent="center"  >

    <Text fontSize={["sm","lg", 'xl']} fontWeight="bold" p={4} color="white">
    Welcome to G5 Construction Services, your trusted partner for all your home building and 
    renovation needs. We are dedicated to providing high-quality craftsmanship, personalized 
    service, and exceptional value to homeowners throughout Gauteng. Whether you're dreaming 
    of building your perfect home from the ground up or transforming your current space into the 
    home of your dreams, we're here to bring your vision to life.
  </Text>
  
  </Flex>
  )
}

export default HomeIntro