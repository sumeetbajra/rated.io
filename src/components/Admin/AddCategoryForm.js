import React, { Component } from 'react';
import { createForm } from 'rc-form';

@createForm()
export class AddCategoryForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryName: ''
		}
	}

	validateText(rule, value, callback) {
        var re = /^[a-zA-Z- ]*$/;
        if(value && !re.test(value)) {
            callback('The value you entered is invalid.');
        }else {
            callback();
        }       
    }

    _submitForm = (e) => {
        e.preventDefault();

        this.props.form.validateFields((error, value) => {
            if(!error) {
                var payload = {
                    categoryName: this.state.categoryName
                }
                this.props.save(payload);
            }
        });
    }

    _handleInputChange = (e) => {
    	this.setState({
    		[e.target.name]: e.target.value
    	})
    }

	render() {

        let errors;
        const {getFieldProps, getFieldError} = this.props.form;

		return (
			<div>
				<form onSubmit={this._submitForm}>
					<div className="form-group">
						<label htmlFor="categoryName">Category Name</label>
						<input type="text" name="categoryName" className="input form-control" placeholder="Category Name" onChange={this._handleInputChange} {...getFieldProps('Category Name', {initialValue: this.state.categoryName, onChange: this._handleInputChange, rules: [{required: true}, {validator: this.validateText}]})}/>
						<span className="form-error">{(errors = getFieldError('Category Name')) ? errors.join(',') : null}</span>
					</div>
					<div className="form-group">
						<button className="btn btn-primary" type="submit">Save</button>
					</div>
				</form>
			</div>
		);
	}
}
