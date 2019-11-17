import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { renderRoutes, buildRouteStructure } from './AuthHandling/RoutesCreator';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import routes from './routes';

class AuthenticatedMembersArea extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collapsed: false,
            routes: buildRouteStructure(props.match.path, routes, props.roles)
        }
        this.handlesMenuButtonClick = this.handlesMenuButtonClick.bind(this);
    }

    handlesMenuButtonClick() {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        const { collapsed, current } = this.state;

        return <section className="container-scroller">
            <Header
                currentView={'test'/*currentView*/}
                toggleSideMenu={this.handlesMenuButtonClick}
                onLogout={this.handlesOnLogout}
                collapsed={collapsed}
            />
            <div className={classnames("container-fluid page-body-wrapper fixed", { 'icon-only': collapsed })}>
                <div className={classnames("row row-offcanvas row-offcanvas-right", { 'active': collapsed })}>
                    <SideBar {...{
                        collapsed,
                        routes: this.state.routes,
                        current,
                    }} />
                    <Content>
                        {
                            renderRoutes(this.state.routes)
                        }
                    </Content>
                </div>
            </div>

        </section>
    }
}

const mapStateToProps = (state) => ({
    roles: state.userData.user.roles
});


export default withRouter(connect(mapStateToProps, null)(AuthenticatedMembersArea))
