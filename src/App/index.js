import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import './font-awesome.min.css';
import '../../node_modules/ionicons/dist/css/ionicons-core.min.css';
import '../../node_modules/ionicons/dist/css/ionicons.min.css';
import { getUserFromToken } from '../store/actions/authActions';
import Public from '../Public/Public';
import MembersArea from '../MembersArea/MembersArea';

class App extends Component {

    componentWillMount() {
        this.props.loadUserFromToken();
    }

    render() {
        return (
            <Switch>
                <Route path='/member' component={MembersArea} />
                <Route exact path='/login' component={MembersArea} />
                <Route exact path='/passwordreset' component={MembersArea} />
                <Route path='/passwordreset/:token' component={MembersArea} />
                <Route path='*' component={Public} />
            </Switch>
        )
        // <div>

        //     <Header />
        //     <Grid className="content">
        //         <Switch>
        //             <Route exact path='/' component={Home} />
        //             <Route path='/login' component={Login} />
        //             <Route path='/register' component={Register} />
        //             <Route exact path='/passwordreset' component={RequestPasswordReset} />
        //             <Route path='/passwordreset/:token' component={PasswordReset} />
        //             <Route path='/registerSucces' component={RegisterSucces} />
        //             <Route path='/club' component={Club} />
        //             <Route path='/ploegen' component={Ploegen} />
        //             <Route path='/dashboard' component={Dashboard} />
        //             <Route path='/tournaments/subscribe/:tournamentId' component={Authorization([])(SubscribeForTournament)} />
        //             <Route path='/tournaments/unsubscribe/:tournamentId' component={Authorization([])(UnsubscribeForTournament)} />
        //             <Route path='/tournaments/list/:tournamentId' component={Authorization([])(PlayerList)} />
        //             <Route path='/manage/tournaments' component={Authorization(['admin', 'trainer'])(TournamentManagement)} />
        //             <Route path='/spiritofthegame' component={SpiritOfTheGame} />
        //             <Route path='/trainingsschema' component={Trainingsschema} />
        //             <Route path='/contact' component={Contact} />
        //             <Route path='/admin' component={Authorization(['admin'])(Admin)} />
        //             <Route path='*' component={NotFound} />
        //         </Switch>

        //     </Grid>
        //     <Footer />
        // </div>
        //     );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadUserFromToken: () => {
            let token = localStorage.getItem('jwtToken');

            if (!token || token === '') {//if there is no token, dont bother
                return;
            }
            dispatch(getUserFromToken(token));
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));