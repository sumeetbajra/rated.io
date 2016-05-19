import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from 'actions/movies';

/* components */
import { TopImage } from 'components/TopImage';
import { LatestMovies } from 'components/Home/LatestMovies';
import { BestMovies } from 'components/Home/BestMovies';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Home extends Component {

  constructor(props) {
    super(props) 
  }

  componentDidMount = () => {
    this.props.getLatestMovies();
    this.props.getBestMovies();
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <LatestMovies movies={this.props.latestMovies}/>
        <BestMovies movies={this.props.bestMovies}/>
      </section>
    );
  }
}
