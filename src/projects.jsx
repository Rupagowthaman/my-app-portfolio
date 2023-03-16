import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { GoMarkGithub } from "react-icons/go";
import { IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function Projects(){
  return(

<SimpleGrid id='Projects' marginTop='50px' marginLeft={'400px'} spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Project 1</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of the project.</Text>
    </CardBody>
    <CardFooter>
    <a href = 'https://github.com/Rupagowthaman/CodeTest' >      
        <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Send email'
            icon={<GoMarkGithub />}/></a> View here
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Project 2</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of the project.</Text>
    </CardBody>
    <CardFooter>
    <a href = 'https://github.com/Rupagowthaman/CodeTest' >
      <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Send email'
            icon={<GoMarkGithub />}/></a>View here
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Project 3</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of the project.</Text>
    </CardBody>
    <CardFooter>
<a href = 'https://github.com/Rupagowthaman/CodeTest' >
    <IconButton 
            variant='outline'
            colorScheme='teal'
            aria-label='Send email'
            icon={<GoMarkGithub />} /></a>View here
    </CardFooter>
  </Card>
</SimpleGrid>)
}