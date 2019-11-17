import React from 'react';
import { faHome, faUser, faUserAstronaut, faCrown, faUsers, faEuroSign, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
// import eee from '@fortawesome/fontawesome-free';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';
import TournamentManagement from './TournamentManagement/TournamentManagement';
import MyFinance from './MyFinance/MyFinance';
import NotFoundOrUnauthorized from './ErrorPages/NotFoundOrUnauthorized';
import Tournaments from './Tournaments/Tournaments';

export default [
    {
        path: "/",
        label: 'general',
        routes: [
            {
                path: "",
                label: "dashboard",
                component: () => <Dashboard />,
                exact: true,
                icon: faHome,
                authenticated: true
            },
            {
                path: "profile",
                label: "Profiel",
                component: Profile,
                icon: faUser,
                authenticated: true
            },
            {
                path: "finance",
                label: "My finance",
                component: MyFinance,
                exact: true,
                icon: faEuroSign,
                authenticated: true
            }
        ]
    },
    {
        path: "/tournaments",
        label: 'tournaments',
        authenticated: true,
        routes: [
            {
                path: "/",
                label: "overview",
                component: Tournaments,
                icon: faGamepad

            }
        ]
    },
    {
        path: "/manage",
        label: "Manage",
        roles: ['admin', 'trainer'],
        routes: [
            {
                path: "/tournaments/",
                label: "Tournament management",
                component: TournamentManagement,
                icon: faCrown
            }
        ]
    },
    {
        path: "/admin",
        label: "admin",
        component: () => <div>admin</div>,
        roles: ['admin'],
        routes: [
            {
                path: "/users",
                label: "User management",
                component: () => <div>users overview</div>,
                exact: true,
                icon: faUsers
            }
        ]
    },
    {
        path: "*",
        component: NotFoundOrUnauthorized
    }
];
