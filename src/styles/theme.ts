import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        dark: {
            '900': '#121212',
        },
        gray: {
            '50':'#fff',
            '100':'#E1E1E6',
            '200':'#A8A8B3',
            '300': '#29292E'
        },
        purple: {
            '500': '#8257E5'
        }
    },
    fonts:{
        heading: 'Manrope',
        body: 'Manrope',

    },
    styles: {
        global: {
            body: {
                bg: 'dark.900',
                color: 'gray.100',
                h:'100vh'
            }
        }
    }
})

