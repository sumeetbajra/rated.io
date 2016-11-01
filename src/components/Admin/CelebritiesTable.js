/**
 * Created by sumit on 10/30/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export class CelebritiesTable extends Component {

    constructor(props) {
        super(props);
    }

    deleteCelebrity = (id, e) => {
        e.preventDefault();
        this.props.deleteCelebrity(id);
    };

    render() {
        return (
            <table className="table table-responsive">
                <thead>
                <tr>
                    <td>Picture</td>
                    <td>
                        Name
                    </td>
                    <td>
                        Birth Place
                    </td>
                    <td>
                        Birth Date
                    </td>
                </tr>
                </thead>
                <tbody>
                {this.props.celebrities.map((celebrity) => {
                    return (
                        <tr key={celebrity._id}>
                            <td><img src={celebrity.picture} width="50"/></td>
                            <td>{celebrity.fullName}</td>
                            <td>{celebrity.birthPlace}</td>
                            <td>{moment(celebrity.birthDate).format('MMM D, YYYY')}</td>
                            <td>
                                <Link to={'/admin/update-celebrity/' + celebrity._id} className="btn btn-primary btn-sm">
                                    <i className="fa fa-pencil" />
                                </Link>&nbsp;
                                <a href="#" onClick={this.deleteCelebrity.bind(this, celebrity._id)} className="btn btn-danger btn-sm">
                                    <i className="fa fa-trash" />
                                </a>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}