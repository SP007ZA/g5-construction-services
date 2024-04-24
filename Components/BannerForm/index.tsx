import { Flex } from '@chakra-ui/react'
import ImageSlider from '../ImageSlider'

const BannerForm = () => {


  return (
    <Flex  flexDirection="column" height="400px" >
        <Flex w="100%" flexDirection={["column", "column","row"]} h="80%"  justifyContent="space-between" mt={1}>
    
                    <ImageSlider  />   
    </Flex>
   
    </Flex>
  )
}

export default BannerForm