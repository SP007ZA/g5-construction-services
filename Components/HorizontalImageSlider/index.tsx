import React, { useState } from 'react';
import { Box, Flex, Heading, Image, Modal, ModalBody, ModalContent, ModalOverlay, useMediaQuery } from '@chakra-ui/react';

const HorizontalImageSlider = ({ images }:any) => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <Box display="flex" flexDir="column" padding={2} id="gallery">
    <Heading mb={5}>Gallery</Heading>
    <Flex
      overflowX="auto"
      sx={{
        '::-webkit-scrollbar': {
         // display: 'none',
        },
        //scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {images.map((image:any, index:number) => (
        <Box
          key={index}
          flexShrink={0}
          width={isDesktop ? '15%' : '30%'}
          height="225px"
          p={isDesktop ? 2 : 1}
          onClick={() => handleImageClick(image)}
        >
          <Image src={image.url} alt={`Image ${index}`} width="100%" height="100%"/>
        </Box>
      ))}
    </Flex>
    <Modal isOpen={selectedImage !== null} onClose={handleCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent>     
           <Box display="flex" justifyContent="center" alignItems="center" width={["350px","500px","700px"]} height="350px">
           {selectedImage && (
              <Image src={selectedImage.url} alt={selectedImage.alt} w="100%" h="100%" />
            )}
           </Box>
       
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default HorizontalImageSlider;
