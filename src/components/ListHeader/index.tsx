import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ButtonCoffee } from "../ButtonCoffee";
import { MenuList } from "../MenuList";
import Lottie from 'react-lottie';
import Coffee from '../../../coffee.json'



export const ListHeader = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Coffee,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
        <Drawer  size='md' isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay >
              <DrawerContent  bg='dark.900'>
                    <DrawerCloseButton mt={2} color='purple.500' />
                    <DrawerHeader 
                      d='flex'
                      alignItems='center'
                      gap={2}
                      borderBottomWidth='1px'
                      borderColor='#9c6aca' 
                      >
                      
                      <Image
                        src='image/coffee-cup.png'
                        w='25px'
                        h='25px'
                      />
                      
                      Great Code
                    </DrawerHeader> 
                    <DrawerBody  mt='5'>
                    <MenuList/>
                    </DrawerBody>              
              </DrawerContent>
          </DrawerOverlay>
        </Drawer>


      <Heading 
        borderBottomWidth={{ base: "1px", md: "0" }} 
        as='header'
        borderColor='#5a5454'
        mb='-2rem'
        
         >
        <Flex
          w="100vw"
          margin="0 auto"
          maxWidth={1140}
          align="center"
          justify="space-between"
          padding='2rem'
          pb='-1'
        >
          
          <Box
           position="relative" 
           top="-1rem"
          >
            
          <Lottie 
              
            options={defaultOptions}
              height={'80%'}
              width={'80%'}
              />
          </Box> 

          
          {isWideVersion && <MenuList />}

          <Stack direction="row" spacing={4}>
            {!isWideVersion && (
              <IconButton
                color='purple.500'
                aria-label="Open navigation"
                icon={<Image w='30px' h='30px' src='image/menu.png'/>}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
              ></IconButton>
            )}
            {isWideVersion && <ButtonCoffee />}
          </Stack>
        </Flex>
      </Heading>
    </>
  );
};
