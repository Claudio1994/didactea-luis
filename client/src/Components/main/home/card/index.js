/* Libraries */
import React from 'react';
import PropTypes from 'prop-types';

/* css */
import '../../../../css/home.css';
import '../../../../css/aurora-pack.min.css';
import '../../../../css/aurora-theme-base.min.css';
import '../../../../css/urku.css';

const Card = (props) => (
    <span onClick={props.handleClick} style={{cursor: 'pointer'}} className="rk-item ae-masonry__item">
        <img src={`${props.image.image}`} alt={props.image.description}/>
        <div className="item-meta">
            <h2>{props.image.name}</h2>
            <p>{props.image.description}</p>
        </div>
    </span>
);

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
}

export default Card;

