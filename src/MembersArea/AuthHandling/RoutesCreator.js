import { Route, Switch } from 'react-router-dom';

import Authorization from './index.js';
import React from 'react';
import _ from 'lodash';
import { allowedRolesIncludeUserRoles } from '../../utils/Auth.js';

const createRoutes = (routes) => {
    const flattenRoutes = flattenRoutesArray(routes);

    return flattenRoutes.map((route, index) => {
        let component = route.component;
        // const { roles } = route;

        // let authenticatedConfig = []

        // if (roles) {
        //     authenticatedConfig = roles;
        // }
        // component = Authorization(authenticatedConfig)(route.component);

        return <Route path={route.path} component={component} exact={route.exact} key={index} />;
    });
}

export const renderRoutes = (routes) => {
    return <Switch>
        {createRoutes(routes)}
    </Switch>;
}

export const buildRouteStructure = (parentRoute, routes, userRoles = [], parentRoles = []) => {

    return routes.map((route) => {
        const updatedRoute = _.cloneDeep(route);

        // when not authorized
        if (!updatedRoute.roles || allowedRolesIncludeUserRoles(updatedRoute.roles, userRoles)) {
            if (!parentRoute) {
                throw new Error('no parent route for route: ' + JSON.stringify(updatedRoute));
            }

            if (updatedRoute.path) {
                updatedRoute.path = parentRoute + (updatedRoute.path === '*' ? '/' : '') + updatedRoute.path;
            }
            else {
                updatedRoute.path = parentRoute;
            }

            updatedRoute.roles = _.union(parentRoles, updatedRoute.roles || []);

            if (route.routes) {
                updatedRoute.routes = buildRouteStructure(updatedRoute.path, updatedRoute.routes, userRoles, updatedRoute.roles);
            }

            return updatedRoute;
        }
    }).filter((route) => { return route });
}

export const flattenRoutesArray = (routes) => {

    return flattenRoutesArrayAcc({ arr: [], depth: 0 }, routes, false)
        .arr
        .filter((route) => !route.routes)
}

const flattenRoutesArrayAcc = ({ arr, depth }, routes) => {

    return routes.reduce(
        (
            { arr, depth },
            route,
        ) => {
            let newArray = arr.slice(0);


            if (route.routes) {
                newArray = newArray.concat(flattenRoutesArrayAcc({ arr: [], depth: depth + 1 }, route.routes).arr);
            }
            else {
                newArray.push(route);
            }

            return {
                arr: newArray,
                depth: depth
            };

        }, { arr, depth })
}