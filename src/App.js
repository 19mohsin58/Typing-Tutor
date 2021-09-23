import {React , useState} from 'react'
import AppRouter from './Router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = () =>{
  return(
    <>
    <Router>
    <AppRouter/>
    </Router>
    </>
  )
 
}

export default App;
