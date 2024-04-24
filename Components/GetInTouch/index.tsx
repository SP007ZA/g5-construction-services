import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../ContactForm'

const GetInRTouch = () => {
  return (
    <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        id="contact"
    >
        <Heading as='h4'   size='xl' padding={4}  >
Get In Touch
  </Heading>
      <Box
       width={["100%", "80%", '60%']}
      >
      <ContactForm/>
      </Box>

    </Box>
  )
}

export default GetInRTouch