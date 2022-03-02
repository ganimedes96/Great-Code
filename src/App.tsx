import {
  Flex,
  Box,
  Image,
  useBreakpointValue,
  Text
} from "@chakra-ui/react";



import { ButtonCoffee } from "./components/ButtonCoffee";
import { ListHeader } from "./components/ListHeader";

import { MotionImage,AnimationDown,AnimationUp}from './styles/animation'
import Lottie from 'react-lottie';
import Programing from '../programing.json'


export default function PurpleCoffee() {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Programing,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  });
 
  
  return (
    <>
      <ListHeader/>

      <Flex 
         
        as="main" 
        
        justify="center">
        <Box 
          zIndex="-10" 
          
          >
          
          <Image
            visibility={{base:'hidden',md:'visible'}}
            pos="absolute"
            src="image/blur-1.png"
            alt="light down"
            bottom="0"
            left="0"
          />
          <Image
            visibility={{base:'hidden',md:'visible'}}

            pos="absolute"
            src="image/blur-2.png"
            alt=""
            right="0"
            top="0"
          />
        </Box>
          <Image 
            zIndex='-10'
            visibility={{base:'visible',md:'hidden'}}
             pos="absolute"
             src="/image/Blur.svg"
             alt="light-mobile"
             bottom="0"
             w='100%'
             
          />
        <Flex
          flexDirection='column' 
          mt='4rem'    
           
          align="center">
            {!isWideVersion &&(
                <Text 
                 as='h2'
                 fontSize='30px'
                 fontWeight= '600'
                 p='0 2rem'
                 textAlign='center'
                  visibility={{base:'visible', md:'hidden'}}
                 mb='-10rem'
                 >
                  O café que fará seu código decolar para o próximo nível.
                </Text>
              )} 
          {isWideVersion || (
            
            <ButtonCoffee/>
          )}
          <MotionImage
            src="image/Title.png"
            alt="title"
            
            initial='hidden'
            animate="visible"
            variants={AnimationUp}
            w={{ base: "75%", sm: "60%",lg:'100%' }}
            mt={{ base: "2rem", sm: "-1rem",md:'0' }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.5 }}
          />
          <Box
            position="absolute"
            bottom="0"
          >

          <Lottie 
              
              options={defaultOptions}
                height={'80%'}
                width={'80%'}
              
                />
          </Box>
                
         
        </Flex>
      </Flex>
    </>
  );
}
