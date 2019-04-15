/* Libraries */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';

/* Actions */
import { fetchProducts } from '../actions/index';
/* Selectors */
import { getProducts } from '../selectors'; 

/* Components */
import Home from '../Components/main/home';

class HomeContainer extends Component{

    componentWillMount(){
        if(this.props.myProducts.length===0){
            this.props.getProducts(null);
        }
    }

    render(){
        return(
            <Home myProducts={this.props.myProducts}></Home>
        );
    }
}

HomeContainer.propTypes = {
    myProducts: PropTypes.array,
    getProducts: PropTypes.func
}

const mapStateToProps = (state) => ({
    myProducts: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProducts : value => dispatch(fetchProducts(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);