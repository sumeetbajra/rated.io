import React, { Component } from 'react';

export class MovieDetail extends Component {
    render() {
        return (
            <div>
                <h2>Captain America: Civil War</h2>
                <div className="movie-meta">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    &nbsp;(52 reviews)
                    <br />
                    1hr 38min - Action | Fiction | SciFi<br />
                    Director: Andrew Miller<br />
                    Cast: Robert Downey Jr., Arnold Schwarzneger, Harold Kumar, Michael James
                </div>
                <div className="movie-desc">
                    With many people fearing the actions of super heroes, the government decides to push for the Anti-Hero Registration Act, a law that limits a heroes actions. This results in a division in The Avengers. Iron Man stands with this Act, claiming that their actions must be kept in check otherwise cities will continue to be destroyed, but Captain America feels that saving the world is daring enough and that they cannot rely on the government to protect the world. This escalates into an all-out war between Team Iron Man (Iron Man, Black Panther, Vision, Black Widow, War Machine, and Spiderman) and Team Captain America (Captain America, Bucky Barnes, Falcon, Sharon Carter, Scarlett Witch, Hawkeye, and Ant Man) while a new villain emerges
                </div>
            </div>
        );
    }
}