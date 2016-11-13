import React, { Component } from 'react';
import { Link } from 'react-router';
import Autosuggest from 'react-autosuggest';
import { APIEndpoints } from 'constants/CommonConstants';
import request from 'superagent';

export class SearchMovies extends Component {

	constructor(props) {
		super(props);
		this.state = {
			suggestions: [],
			value: ''
		}
	}

	 onChange = (event, { newValue }) => {
        if(!event.keyCode || (event.keyCode != 40 && event.keyCode != 38)) {
            this.setState({
                value: newValue
            });
        }
    }

    // Autosuggest will call this function every time you need to update suggestions. 
    // You already implemented this logic above, so just use it. 
    onSuggestionsFetchRequested = ({ value }) => {
	   	var that = this;
   	 	var re = /^[a-zA-Z ]*$/;
	   	if(re.test(value)) {
	    	request.get(APIEndpoints.SEARCH_MOVIES + value)
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
            <Link to={'/movie/' + suggestion._id} className="react-autosuggest__suggestion--item">
                <img src={suggestion.posterUrl} width="30" style={{marginRight: '12px'}} /> 
                <div className="react-autosuggest__suggestion--item__name">
                    <b>{suggestion.title}</b> ({suggestion.year})<br />
                    <span className="react-autosuggest__suggestion--item__name--cast">
                        {suggestion.cast.map((c, k) => {
                            return c.celebrityId.fullName + (k != suggestion.cast.length - 1 ? ', ' : '');
                        })}
                    </span>
                </div>
            </Link>
        );
    }

    render() {

	 	const {value, suggestions} = this.state;
        // Autosuggest will pass through all these props to the input field. 
        const inputProps = {
            placeholder: 'Search Movies',
            value,
            onChange: this.onChange,
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