import React, { Component, Fragment } from 'react'
import a_2019_04_2728_open_divisie1 from './Posts/2019_04_2728_open_divisie1.js';
import NotFound from '../NotFound';

export default class Article extends Component {
    render() {
        const aritcle_title = this.props.match.params.title;

        if (!this.props[aritcle_title]) {
            return <NotFound />
        }
        const { title, content, image } = this.props[aritcle_title];

        return <div className="jetset-article">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}>

            </div>
            <img src={image} className="responsive" />
        </div>
    }
}

Article.defaultProps = {
    '2019_04_2728_open_divisie1': a_2019_04_2728_open_divisie1
}
