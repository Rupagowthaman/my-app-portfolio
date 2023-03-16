import { Heading, IconButton } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { HStack} from '@chakra-ui/react';


export default function Contact(){
    return(
      
      <HStack id='Contact'alignContent={'center'} justifyContent='center' marginTop={'50px'}>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          icon={<PhoneIcon />}
          />,<b>017458365</b>

        <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Send email'
            icon={<EmailIcon />}
            />,<b>ruparesume@gmail.com</b>

      </HStack>
    )

}