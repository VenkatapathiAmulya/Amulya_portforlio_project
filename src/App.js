import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
function App() {
  return (

     <>
     <Router>
     <Navbar/>
     <Switch>
       <Route path = '/' exact component = {Home} />
       <Route path = '/skills' exact component = {Skills} />
       <Route path = '/projects' exact component = {Projects} />
       <Route path = '/experience' exact component = {Experience} />
   </Switch>
     </Router>
    
     </>
  );
}

export default App;
