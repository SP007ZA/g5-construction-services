import About from "@/Components/About";
import BannerForm from "@/Components/BannerForm";
import Footer from "@/Components/Footer";
import GetInRTouch from "@/Components/GetInTouch";
import HomeIntro from "@/Components/HomeIntro";
import HorizontalImageSlider from "@/Components/HorizontalImageSlider";
import ServiceCard from "@/Components/ServicesCard";
import { SlideData } from "@/Data/SlideData";
import { Flex } from "@chakra-ui/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";


export default function Home() {
  return (
    <Flex direction='column' >
      <BannerForm/>
      <HomeIntro/>
      <About />
      <ServiceCard/>
      <HorizontalImageSlider images={SlideData.slideData} />
      <GetInRTouch/>
    <Footer/>
    <FloatingWhatsApp phoneNumber='+27688590326' accountName='G5 CONSTRUCTION SERVICES'  avatar='/images/G5-logo.png'/>
    </Flex>
  );
}
