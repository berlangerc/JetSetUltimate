import React, { Component } from 'react';

import AwesomeIcon from 'react-fontawesome';

export default class SocialHeader extends Component {

    render() {
        const { link, iconName } = this.props;

        return (

            <div className="social-icon" >
                <a className="social-icon-link" href={link} target="_blank">
                    <AwesomeIcon
                        name={iconName}
                        size='2x'
                    />
                </a>
            </div>
        )
    }
}
