/**
 * Created by sumit on 10/30/16.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CelebritiesTable } from 'components/Admin/CelebritiesTable';
import { getCelebrityList } from 'actions/celebrities';

@connect(
    state => {
        return {
            celebrities: state.celebrities.allCelebrities
        }
    },
    dispatch => bindActionCreators({ getCelebrityList }, dispatch)
)
export class CelebrityList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1
        }
    }

    componentWillMount() {
        this.props.getCelebrityList(this.state.pageNumber);

        var that = this;

        document.addEventListener('scroll', function (event) {
            if (document.body.scrollHeight <
                document.body.scrollTop +
                window.innerHeight + 200) {
                that.paginate();
            }
        });
    }

    paginate = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        });
        this.props.getCelebrityList(this.state.pageNumber);
    };

    render() {
        return (
            <div>
                <h2>Manage Celebrities</h2>
                <hr />
                <CelebritiesTable celebrities={this.props.celebrities} />
            </div>
        );
    }
}