import React from 'react'
import logoWithoutWings from '../../../images/uitgeknipt.jpg';

import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Brand = ({ collapsed }) => {
    return (
        <div className={classnames("nav-brand text-center", { 'icon-only': collapsed })}>
            <Link to='/member'>
                {/* <img src={logo} className="responsive d-none d-sm-block" alt="logo" /> */}
                <img src={logoWithoutWings} className="responsive" alt="logo" />
            </Link>
        </div>
    )
}

Brand.propTypes = {
    collapsed: propTypes.bool
}

Brand.defaultProps = {
    collapsed: false
}

export default Brand;