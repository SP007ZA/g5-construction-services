import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faScrewdriverWrench, faBolt, faGears, faWater, faCircleCheck, faCamera} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'

const text = [
  'Affordable & highly professional service.',
  'Our service is accessible to any place within South Africa.',
  'We use modern & innovative methods, techniques and equipment to accomplish our services.',
  'We are highly disciplined in executing our activities in compliance to the safety and other regulations in the industry.'
]

const serviceData = [
  {title: "NEW HOME CONSTRUCTION", desc: "Trust G5 Construction Services to turn your dream home into a reality. From concept to completion, we'll work closely with you to design and build a custom home that meets your needs, preferences, and budget.", image: "/images/new_home.jpg"},
  {title: "HONE RENOVAIONS", desc: " Whether you're looking to update your kitchen, remodel your bathroom, or add extra space with a room addition, our renovation experts have the skills and expertise to transform your home into a more functional, stylish, and comfortable living space.", image: "/images/home_renovations.jpg"},
  {title: "INTERIOR DESIGN", desc: " Let our team of talented designers help you create a home that reflects your personal style and enhances your quality of life. From choosing the perfect color palette to selecting furniture and accessories, we'll ensure every detail is tailored to your taste and lifestyle.", image: "/images/interior_design.jpg"},
  {title: "EXTERIOR REMODELING", desc: "Boost your home's curb appeal and value with our exterior remodeling services. From siding replacement and window installation to landscaping and outdoor living spaces, we'll enhance the beauty and functionality of your home's exterior.", image: "/images/exterior.jpg"},
  {title: "PROJECT MANAGEMENT", desc: " With G5 Construction Services, you can rest assured that your project will be completed on time, on budget, and to the highest standards of quality. Our dedicated project managers will oversee every aspect of the construction process, from planning and scheduling to procurement and execution.", image: "/images/project_management.jpg"},
]

const ServiceCard = () => {
  return (
   
    <Box
    id="services"
    display="flex"
    flexDir="column"
   justifyContent="center"
   alignItems="center"
    padding={8}>
      <Box
       fontWeight='semibold'
       padding={15}
       fontSize={36}
       as='h1'
      
      >Our Services</Box>
      <SimpleGrid minChildWidth='320px' spacing='40px'>
  {
      serviceData.map(({title, desc, image}:any, index:any) => (
        <Card maxH='380px' key={index}>
 <Image src={image}  width="100%" height="35%"/>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="#072331" >
    {title}
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  {desc}
  </Text>
 </CardBody>
  </Card>
      ))
  }


</SimpleGrid>
<Card marginTop={5} minWidth="320px">
  <CardHeader>
    <Heading>
    We Provide More Efficient And Effective Services:
    </Heading>
  </CardHeader>
  <CardBody>
    {
      text.map((item, i) => (
        <Box display='flex' key={i}>
    <FontAwesomeIcon  style={{width: '28px'}} color='#072331'  icon={faCircleCheck} />
    <Text padding={2}>
    {item}
    </Text>
    </Box>
      ))
    }
   
  </CardBody>
</Card>
    
    </Box>
  )
}

export default ServiceCard