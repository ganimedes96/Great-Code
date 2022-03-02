import {Button}from '@chakra-ui/react'
export const ButtonCoffee =()=>{
    return(
        <Button
              mt={{ base: "13rem",md:'7rem',lg:'1.2rem' }}
              mb={{base:'1.5rem'}}
              lineHeight="15px"
              fontSize="11px"
              fontWeight="800"
              padding="11px 38px"
              variant="outline"
              border="1px"
              borderColor="purple.500"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{
                transform: "scale( 1.05)",
                borderColor: "#a74add",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px #ae58ffbf, 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              PEGAR MEU CAFE
            </Button>
    )
}