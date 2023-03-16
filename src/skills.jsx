import { VStack, HStack, Button} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'


export default function Skills(){
    return(

        <VStack id= 'Skills' direction={['column','row']} spacing='24px'>
        <HStack direction={['column','row']} spacing='24px'>
            <Box w='100px' h='30px' bg='pink'>
                Java
            </Box>
            <Box w='100px' h='30px' bg='pink.100'>
                JavaScript
            </Box>
            <Box w='100px' h='30px' bg='pink'>
                React
            </Box>
        </HStack>,
        <HStack direction={['column','row']} spacing='24px'>
            <Box w='100px' h='30px' bg='pink.100'>
                HTML
            </Box>
            <Box w='100px' h='30px' bg='pink'>                
                Linux
            </Box>
            <Box w='100px' h='30px' bg='pink.100'>
                            TypeScript
            </Box>
        </HStack>,
        <HStack direction={['column','row']} spacing='24px'>
            <Box w='100px' h='30px' bg='pink.100'>
                CSS
            </Box>
            <Box w='100px' h='30px' bg='pink.100'>
                Git
            </Box>
        </HStack>
        </VStack>)
        
}