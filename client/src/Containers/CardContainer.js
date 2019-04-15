/* Libraries */
import React, {Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* Actions */
import { openModal } from '../actions/index.js';

/* Components */
import Card from '../Components/main/home/card';

class CardContainer extends Component{
    handleClick = () => {
        let {image, description, name, contentType} = this.props.image;
        let product = {
            open: true,
            image,
            description,
            name,
            contentType
        }
        this.props.openModal(product);
    }
    render(){
        return(
            <Card handleClick={this.handleClick} image={this.props.image}></Card>
        );
    }
}

CardContainer.propTypes = {
    openModal: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
}

let mapDispatchToProps = (dispatch) => ({
    openModal : value => dispatch(openModal(value))
});

export default connect(null, mapDispatchToProps)(CardContainer);