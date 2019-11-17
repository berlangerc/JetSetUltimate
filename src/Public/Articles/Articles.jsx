import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from './Article';
import NotFound from '../NotFound';

export default class Articles extends Component {
    render() {
        return (
            <Switch>
                <Route path='/articles/:title' component={Article} />
                <Route path='/articles/*' component={NotFound} />
            </Switch>
        )
    }
}
