/**
 * Created by sumit on 10/30/16.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CelebritiesTable } from 'components/Admin/CelebritiesTable';
import { getCelebrityList } from 'actions/celebrities';
import { resetCelebrityList } from 'actions/celebrities';
import { deleteCelebrity } from 'actions/celebrities';

@connect(
    state => {
        return {
            celebrities: state.celebrities.allCelebrities,
        }
    },
    dispatch => {
        return {
            getCelebrityList: bindActionCreators(getCelebrityList, dispatch),
            resetCelebrityList: bindActionCreators(resetCelebrityList, dispatch),
            deleteCelebrity: bindActionCreators(deleteCelebrity, dispatch)
        }
    }
)
export class CelebrityList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            loading: false
        }
    }

    componentWillMount() {
        this.props.getCelebrityList(this.state.pageNumber);
        document.addEventListener('scroll', this.scrollPaginate);
    }

    scrollPaginate = (event) => {
        if (document.body.scrollHeight <
            document.body.scrollTop +
            window.innerHeight + 200 && !this.state.loading) {
            this.paginate();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollPaginate);
        this.props.resetCelebrityList();
    }

    paginate = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1,
            loading: true
        });
        this.props.getCelebrityList(this.state.pageNumber);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.celebrities.length != nextProps.celebrities.length) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Manage Celebrities</h2>
                <hr />
                <CelebritiesTable celebrities={this.props.celebrities} deleteCelebrity={this.props.deleteCelebrity}/>
            </div>
        );
    }
}