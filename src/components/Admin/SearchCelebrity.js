import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { APIEndpoints } from 'constants/CommonConstants';
import request from 'superagent';

export class SearchCelebrity extends Component {

	constructor(props) {
		super(props);
		this.state = {
			suggestions: [],
			value: ''
		}
	}

	 onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    }

    // Autosuggest will call this function every time you need to update suggestions. 
    // You already implemented this logic above, so just use it. 
    onSuggestionsFetchRequested = ({ value }) => {
	   	var that = this;
   	 	var re = /^[a-zA-Z ]*$/;
	   	if(re.test(value)) {
	    	request.get(APIEndpoints.SEARCH_CELEBRITY + value)
				.set('authorization', localStorage.getItem('token'))
				.end(function(err, res) {
				if(res && !res.error) {
				    that.setState({
			            suggestions: res.body
			        })
				}
			});
		}
    };

    // Autosuggest will call this function every time you need to clear suggestions. 
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    // When suggestion is clicked, Autosuggest needs to populate the input field 
    // based on the clicked suggestion. Teach Autosuggest how to calculate the 
    // input value for every given suggestion. 
    getSuggestionValue(suggestion) {
        return '';
    }

    // Use your imagination to render suggestions. 
    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.fullName}</span>
        );
    }

    onSuggestionSelected = (event, { suggestion }) => {
    	this.props.addCelebrity(suggestion);
    }

    render() {

	 	const {value, suggestions} = this.state;
        // Autosuggest will pass through all these props to the input field. 
        const inputProps = {
            placeholder: 'Search Celebrity',
            value,
            onChange: this.onChange
        };

        const theme = {
        	input: 'input form-control',
			container:            'react-autosuggest__container',
			containerOpen:        'react-autosuggest__container--open',
			suggestionsContainer: 'react-autosuggest__suggestions-container',
			suggestionsList:      'react-autosuggest__suggestions-list',
			suggestion:           'react-autosuggest__suggestion',
			suggestionFocused:    'react-autosuggest__suggestion--focused',
			sectionContainer:     'react-autosuggest__section-container',
			sectionTitle:         'react-autosuggest__section-title'
        }

    	return (
			<Autosuggest
	            suggestions={suggestions}
	            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
	            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
	            getSuggestionValue={this.getSuggestionValue}
	            renderSuggestion={this.renderSuggestion}
	            inputProps={inputProps}
	            theme={theme}
	            onSuggestionSelected = {this.onSuggestionSelected} />
		)
    }
}