import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'
import moment from 'moment'
import React from 'react'

const Footer = () => {
    const year = moment().year()
  return (
    <Box
        display='flex'
        flexDirection='column'
        marginTop={8}
        padding={10}
        bg='gray.600'
        width='100%'
        minHeight='180px'
    >
    
            <Flex flexDirection={['column','column','row', 'row']} justifyContent='space-between'>                
              <Box display='flex' flexDirection='row' justifyContent='space-between' width='300px'>
              <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
              <Text color="white" _hover={{color:"red"}} cursor="pointer"  fontSize="sm">HOME</Text> 
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
              <Text color="white" _hover={{color:"red"}} cursor="pointer"  fontSize="sm">ABOUT</Text> 
              </Link>
              <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
              <Text color="white" _hover={{color:"red"}} cursor="pointer"  fontSize="sm">SERVICES</Text> 
              </Link>
              <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
              <Text color="white" _hover={{color:"red"}} cursor="pointer"  fontSize="sm">GALLERY</Text> 
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
              <Text color="white" _hover={{color:"red"}} cursor="pointer"  fontSize="sm">CONTACT</Text> 
              </Link>
              </Box>
     <Flex flexDirection='column'>
     <Box display='flex' >
    <FontAwesomeIcon  style={{width: '18px'}} color='red'  icon={faLocationDot} />
    <Text padding={2}  color="white">
    No.5 Steenbok Street Villa Liza Boksburg 1459
    </Text>
    </Box>
     <Box display='flex' >
    <FontAwesomeIcon  style={{width: '18px'}} color='blue'  icon={faPhone} />
    <Text padding={2} color="white">
    +27 68 859 0326
    </Text>
    </Box>
     </Flex>
            </Flex>
            <Box>
           <Text> &copy; SPM Digital  {year}</Text>
            </Box>
    </Box>
  )
}

export default Footer