import { List, ListItem, UnorderedList } from "@chakra-ui/react"


export const MenuList = () =>{
   

    return(
        

            <UnorderedList
                styleType="none"
                display={{base:'block',lg:'flex'}}
                gap="2.2rem"
                fontStyle="normal"
                fontWeight="500"
                fontSize='18px'
                lineHeight="19px"
                letterSpacing="0.02rem"
                
            >
                <List  
                    mb={{base:'2rem',lg:'0'}}
                    
                   as='li'
                >
                <a href="#">Home</a>
                </List>
                <List mb={{base:'2rem',lg:'0'}} as='li'>
                <a href="#">Menu</a>
                </List>
                <List mb={{base:'2rem',lg:'0'}} as='li'>
                <a href="#">Recompensas</a>
                </List>
                <List mb={{base:'2rem',lg:'0'}} as='li'>
                <a href="#">Gift Cards</a>
                </List>
                <List as='li'>
                <a href="#">Lojas</a>
                </List>
            </UnorderedList>
    
    )
}