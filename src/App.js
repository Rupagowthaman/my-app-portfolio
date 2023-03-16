// import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Skills from './skills.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import Home from './home';
import { Container } from '@chakra-ui/layout';

const router = createBrowserRouter([
  {
    path : '/contact',
    element : <Contact/>
  },
  {
    path : '/projects',
    element : <Projects/>
  },
]);
function App() {
  return (        
        <Home />
              
  );
}

export default App;