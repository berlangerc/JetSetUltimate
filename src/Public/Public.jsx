import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
// import Login from '../Login';
import Register from './Account/Register';
import RegisterSucces from './Account/RegisterSucces';

import Club from './Static/Club';
import Ploegen from './Static/Ploegen';
import Contact from './Static/Contact';
import SpiritOfTheGame from './Static/SpiritOfTheGame';
import Trainingsschema from './Static/Trainingsschema';
import Agenda from './Static/Agenda';
import Footer from './Footer';
import Articles from './Articles/Articles';

import './public.css';

class Public extends Component {

    render() {
        return <div className="public">

            <Header classes={{ title: 'test' }} />
            <div className="container content">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/register' component={Register} />
                    <Route path='/registerSucces' component={RegisterSucces} />
                    <Route path='/frisbeeclub' component={Club} />
                    <Route path='/ploegen' component={Ploegen} />
                    <Route path='/spiritofthegame' component={SpiritOfTheGame} />
                    <Route path='/trainingsschema' component={Trainingsschema} />
                    <Route path='/agenda' component={Agenda} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/articles' component={Articles} />
                    <Route path='*' component={NotFound} />
                </Switch>

            </div>
            <Footer />
        </div>
    }
}

export default Public;