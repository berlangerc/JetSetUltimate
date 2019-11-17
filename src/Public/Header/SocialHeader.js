import React, { Component } from 'react';

import SocialLink from '../../components/SocialLink';

export default class SocialHeader extends Component {

    render() {
        return (
            <div className="top-navigation-right">
                <div className="top-social-wrapper">
                    <SocialLink
                        link="https://www.facebook.com/UltimateFrisbeeLeuven/?fref=ts"
                        iconName="facebook"
                    />
                </div>
            </div>
        )
    }
}