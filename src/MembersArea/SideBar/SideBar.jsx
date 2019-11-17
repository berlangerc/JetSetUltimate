import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import classnames from 'classnames';
import SideBarMenuItem from './SideBarMenuItem';

export class SideBar extends Component {
    static propTypes = {
        collapsed: PropTypes.bool
    }

    renderNavigationItems(routes, current) {
        return routes.map(({ label, routes: subRoutes, roles, ...other }, key) => {

            if (subRoutes) {
                return <Fragment key={key}>
                    <li className="nav-item nav-category" >
                        <span className="nav-link">{label}</span>
                    </li>

                    {
                        subRoutes.map((subRoute, key) => {

                            return <SideBarMenuItem {...subRoute} key={key} />
                        })
                    }

                </Fragment>
            }
            else if (label) {
                return <SideBarMenuItem {...{ label, ...other }} key={key} />
            }
        })
    }

    render() {
        const { collapsed, routes } = this.props;

        return (
            <nav className={classnames("sidebar", { 'icon-only': collapsed }, "sidebar-offcanvas")} >
                <ul className="nav">

                    {this.renderNavigationItems(routes)}
                    {/* <li className="nav-item nav-category">
                        <span className="nav-link">GENERAL</span>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <span className="menu-title">Dashboard</span>
                            <Icon icon={faHome} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/widgets.html">
                            <span className="menu-title">Profile</span>
                            <Icon icon={faUser} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                            <span className="menu-title">Page Layouts</span>
                            <i className="icon-size-actual menu-icon"></i>
                        </a>
                        <div className="collapse" id="page-layouts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/boxed-layout.html">Boxed</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/rtl-layout.html">RTL</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/horizontal-menu.html">Horizontal Menu</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
                            <span className="menu-title">Sidebar Layouts</span>
                            <i className="icon-list menu-icon"></i>
                        </a>
                        <div className="collapse" id="sidebar-layouts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/compact-menu.html">Compact menu</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/sidebar-collapsed.html">Icon menu</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/sidebar-hidden.html">Sidebar Hidden</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/sidebar-hidden-overlay.html">Sidebar Overlay</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/layout/sidebar-fixed.html">Sidebar Fixed</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">UI FEATURES</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span className="menu-title">Basic UI Elements</span>
                            <i className="icon-layers menu-icon"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/accordions.html">Accordions</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/badges.html">Badges</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/modals.html">Modals</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                            <span className="menu-title">Advanced Elements</span>
                            <i className="icon-handbag menu-icon"></i>
                        </a>
                        <div className="collapse" id="ui-advanced">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/context-menu.html">Context menu</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/slider.html">Sliders</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/colcade.html">Colcade</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/loaders.html">Loaders</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tour.html">Tour</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                            <span className="menu-title">Tables</span>
                            <i className="icon-grid menu-icon"></i>
                        </a>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/data-table.html">Data table</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/js-grid.html">Js-grid</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/tables/sortable-table.html">Sortable table</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/ui-features/popups.html">
                            <span className="menu-title">Popups</span>
                            <i className="icon-diamond menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/ui-features/notifications.html">
                            <span className="menu-title">Notifications</span>
                            <i className="icon-bell menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                            <span className="menu-title">Icons</span>
                            <i className="icon-globe menu-icon"></i>
                        </a>
                        <div className="collapse" id="icons">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/icons/themify.html">Themify icons</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">FORMS</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="true" aria-controls="form-elements">
                            <span className="menu-title">Form elements</span>
                            <i className="icon-flag menu-icon"></i>
                        </a>
                        <div className="collapse show" id="form-elements">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                <li className="nav-item"><a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a></li>
                                <li className="nav-item"><a className="nav-link" href="pages/forms/validation.html">Validation</a></li>
                                <li className="nav-item"><a className="nav-link" href="pages/forms/wizard.html">Wizard</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                            <span className="menu-title">Editors</span>
                            <i className="icon-anchor menu-icon"></i>
                        </a>
                        <div className="collapse" id="editors">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><a className="nav-link" href="pages/forms/text_editor.html">Text editors</a></li>
                                <li className="nav-item"><a className="nav-link" href="pages/forms/code_editor.html">Code editors</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">DATA REPRESENTAION</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                            <span className="menu-title">Charts</span>
                            <i className="icon-pie-chart menu-icon"></i>
                        </a>
                        <div className="collapse" id="charts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/morris.html">Morris</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/flot-chart.html">Flot</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/google-charts.html">Google charts</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/sparkline.html">Sparkline js</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/c3.html">C3 charts</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartist.html">Chartists</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/rickshaw.html">Rickshaw</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/charts/justGage.html">JustGage</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                            <span className="menu-title">Maps</span>
                            <i className="icon-location-pin menu-icon"></i>
                        </a>
                        <div className="collapse" id="maps">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/maps/mapeal.html">Mapeal</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/maps/vector-map.html">Vector Map</a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/maps/google-maps.html">Google Map</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">SAMPLE PAGES</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                            <span className="menu-title">User Pages</span>
                            <i className="icon-bubbles menu-icon"></i>
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                            <span className="menu-title">Error pages</span>
                            <i className="icon-support menu-icon"></i>
                        </a>
                        <div className="collapse" id="error">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                            <span className="menu-title">General Pages</span>
                            <i className="icon-user menu-icon"></i>
                        </a>
                        <div className="collapse" id="general-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/landing-page.html"> Landing Page </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/profile.html"> Profile </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/faq.html"> FAQ </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/faq-2.html"> FAQ 2 </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/news-grid.html"> News grid </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/timeline.html"> Timeline </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/search-results.html"> Search Results </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/portfolio.html"> Portfolio </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                            <span className="menu-title">E-commerce</span>
                            <i className="icon-briefcase menu-icon"></i>
                        </a>
                        <div className="collapse" id="e-commerce">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/invoice.html"> Invoice </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/pricing-table.html"> Pricing Table </a></li>
                                <li className="nav-item"> <a className="nav-link" href="pages/samples/orders.html"> Orders </a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">APPLICATIONS</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/apps/email.html">
                            <span className="menu-title">E-mail</span>
                            <i className="icon-cursor menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/apps/calendar.html">
                            <span className="menu-title">Calendar</span>
                            <i className="icon-calendar menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/apps/todo.html">
                            <span className="menu-title">Todo List</span>
                            <i className="icon-clock menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/apps/gallery.html">
                            <span className="menu-title">Gallery</span>
                            <i className="icon-picture menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">DOCUMENTAIONS</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/documentation.html">
                            <span className="menu-title">Documentation</span>
                            <i className="icon-magnet menu-icon"></i>
                        </a>
                    </li> */}
                </ul>
            </ nav>
        )
    }
}

SideBar.propTypes = {
    routes: PropTypes.array,
    current: PropTypes.string,
}

SideBar.DefaultValues = {
    routes: []
}

const mapStateToProps = (state) => ({
    roles: state.userData.user.roles
})

const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))
