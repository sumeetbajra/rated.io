import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* utils */
import { setParallax } from '../../utils/parallax';

/* component styles */
import { styles } from './styles.scss';

export class TopImage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    setParallax(this.refs.parallax, 10);
  };

  render() {
    return (
      <section className={`${styles}`} ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={30}
                speed={700}
                wait={700}
              >
                <h1 className="title">
                  Rated.io
                </h1>
              </LoadingOrderAnimation>
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={60}
                speed={700}
                wait={900}
              >
                <p>
                  The best source for quality movie reviews by experts.
                </p>
                <form className="form-inline">
                  <div className="form-group">
                    <input type="text" placeholder="Search for movies" className="input form-control top-image__input"/>
                    <button className="btn btn-primary">Search</button>
                  </div>
                </form>
              </LoadingOrderAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
