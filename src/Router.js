import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Tutor } from './Tutor';
import { Home } from './Home';
import { Learn } from './Learn';


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/tutor' component={Tutor} />
                <Route exact path='/learning' component={Learn} />
            </Router>
        )
    }
}


export default AppRouter; 