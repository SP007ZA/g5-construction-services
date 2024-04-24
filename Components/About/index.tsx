import { Box, Heading, Image, Text } from '@chakra-ui/react'

import React from 'react'

const About = () => {
  return (
   <Box
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    backgroundColor='white'
    id="about"
    padding={5}
   >
     <Box display='flex' borderBottom='1px' borderColor='red' padding={5}>
     <Heading as='h1' size={['sm', 'md','xl']}  mr={2}  color='gray.600' >
    About <Box as='span' color="#072331">G5 CONSTRUCTION SERVICES</Box>
  </Heading>
     </Box>
     <Text fontSize={['md','md','xl']} color='gray.500' padding={2}>
     At G5 Construction Services, we believe that your home is more than just a building; it's a reflection of your unique style, personality, and aspirations. With over a decade of experience in the construction industry, we have earned a reputation for excellence, integrity, and professionalism. Our team of skilled craftsmen and project managers is committed to delivering superior results, exceeding expectations, and ensuring your complete satisfaction every step of the way.
    </Text>
    <Box
      display='flex'
      flexDirection={['column','column','row','row']}
      justifyContent='space-between'
    > 
     <Image src='/images/G5-logo.png' objectFit='fill' width='50%' height='50%'/>
    
      <Box
         display='flex'
         flexDirection="column"
         marginTop={2}
      >
        <Box display='flex' justifyContent='center' >
     <Heading as='h5'  borderBottom='1px' borderColor='red' paddingBottom={3}  size={['sm', 'md','lg']}  mr={2}  color='gray.600' >
    Our <Box as='span' color="#072331">Vision</Box>
  </Heading>
     </Box>
     <Text fontSize={['md','md','lg']} color='gray.500' padding={2}>
     Our vision is to be the premier home building and renovation company in Gauteng, renowned for our commitment to excellence, innovation, and customer satisfaction.
    </Text>
        <Box display='flex' justifyContent='center' >
     <Heading as='h5'  borderBottom='1px' borderColor='red' paddingBottom={3}  size={['sm', 'md','lg']}  mr={2}  color='gray.600' >
    Our <Box as='span' color="#072331">Mission</Box>
  </Heading>
     </Box>
     <Text fontSize={['md','md','lg']} color='gray.500' padding={2}>
     Our mission at G5 Constrcution Services is to provide exceptional craftsmanship, personalized service, and superior value to homeowners, creating homes that inspire and enrich the lives of our clients and their families.
    </Text>


      </Box>

    </Box>
   </Box>
  )
}

export default About