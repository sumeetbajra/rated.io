import React, { Component } from 'react';

export class MovieTrailerModal extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName('rrm-body')[0].style.padding = 0;
        document.getElementsByClassName('rrm-title')[0].style.display = 'none';
    }

    removeThisModal = () => {
        this.props.removeModal();
    }

    render() {
        return (
            <div>
                <iframe width="100%" height="450px" style={{border: 'none'}} src={this.props.url + '?autoplay=1'} frameBorder="0" allowFullScreen></iframe>
            </div>
        )
    }
}

