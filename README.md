# JetSetUltimate
Jetset Utimate Frisbee Leuven needed a website to support the board with their paperwork.
This repo only contains the front-end code.

## Features
- View account balance
- Subscribe/unsubscribe for tournaments
- Create and manage tournaments
- Static content with info about the club, members, schedule, ...

## Architecture
React Front-end with a nodeJs, written in TypeScript, backend.
MySql database

### Frontend
This front-end website is written in React using boilerplate CRA (Create-React-App).
- Global state mamagement: [Redux](https://github.com/reduxjs/redux)
- Form handling: [Formik](https://github.com/jaredpalmer/formik)
- Date formatting: [moment](https://github.com/moment/moment) 
- API calls: fetch
- testing: [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://github.com/facebook/jest)
- 
### Backend has multiple roles:
- Serving the front-end
- Exposing the Swagger docs
- Exposing multiple API routes

### Hosting
The website is completely hosted on Heroku

### Deployments
Deployments to DEV environment after a pull request is merged to the DEV branch.
This is done by configuring the Azure Dev Ops environment.


## Pet project != Professionally
Since this is a pet project which is used by 250 people, best practices are not followed.

### What would I have done differently when coding this for a customer?
- Helpers full test coverage
- Form testing with Enzyme/cypess/other tools
- Full coverage of Redux actions and reducers
- General components (Button, Links, Input fields, ...) in [StoryBook](https://storybook.js.org/)