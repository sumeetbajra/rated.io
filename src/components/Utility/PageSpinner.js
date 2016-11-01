/**
 * Created by sumit on 11/1/16.
 */
import React, { Component } from 'react';

import { styles } from './style.scss';

export class PageSpinner extends Component {

    componentDidMount() {
        document.getElementsByTagName('footer')[0].style.display = 'none';
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.getElementsByTagName('footer')[0].style.display = 'block';
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <div className={`${styles}`}></div>
        )
    }
}