/**
 * Created by sumit on 10/30/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export class CategoriesTable extends Component {

    constructor(props) {
        super(props);
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
                                <td>Edit | Delete</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}