/**
 * Created by sumit on 10/30/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export class CategoriesTable extends Component {

    constructor(props) {
        super(props);
    }

    _delete = (id, e) => {
        this.props.delete(id);
    }

    render() {
        return (
            <table className="table table-responsive">
                <thead>
                <tr>
                    <td>
                        Category Name
                    </td>
                    <td>
                        Actions
                    </td>
                </tr>
                </thead>
                <tbody>
                    {this.props.categories.map((category) => {
                        return (
                            <tr key={category._id}>
                                <td>{category.categoryName}</td>
                                <td>
                                    <Link className="btn btn-primary" to={'/admin/update-category/' + category._id}>
                                        <i className="fa fa-pencil" />
                                    </Link>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={this._delete.bind(null, category._id)}>
                                        <i className="fa fa-trash" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}