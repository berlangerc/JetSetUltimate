import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon }) => {
    return (
        <i>
            <FontAwesomeIcon icon={icon} />
        </i>
    )
}

Icon.propTypes = {
    icon: PropTypes.any.isRequired,
}
export default Icon;