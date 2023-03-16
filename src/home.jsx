import './App.css';
import Navi from './Navi.jsx';
import {background, Button } from '@chakra-ui/react'
import Skills from './skills.jsx'
import { Text } from '@chakra-ui/react'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import { HeadingSkills , HeadingProjects, HeadingContact} from './headings/skills';
import Scrollup from './Scrollup';



export default function Home(){
    return(

<div className="App">     
      <Navi/>      

        <h1 style={{marginTop:'50px', fontWeight: 'bold', fontSize: 40, }}>Hi, I am  Rupa Gowthaman</h1>

        <Text  fontSize='lg' noOfLines={[1, 2, 3,4,5]} style={{marginTop:'50px'}}>
        A person awaiting for professional career with the<br/>
        audacious challenges in Software industry. Confident, <br/>
        articulate, and professional speaking abilities. Team player <br/>
        Combined with patience, determination and persistence</Text>

        <Button style={{marginTop:'50px'}} colorScheme='blue'>resume</Button>


        <HeadingSkills />
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        marginTop:'50px'
      }}>
            <Skills/> 
        </div> 

        <HeadingProjects/>
        <Projects />    
        <HeadingContact />     
        <Contact />  
        <Scrollup/>         
    </div>)
}