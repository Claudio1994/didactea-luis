import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../Components/main/login';

import { sendLogin } from '../actions';

class LoginContainer extends Component {
    handleSubmit = (values) => {
        this.props.sendLogin(values);
    }

    render(){
        return(
            <Login onSubmit={this.handleSubmit}></Login>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendLogin: value => dispatch(sendLogin(value))
});

export default connect(null, mapDispatchToProps)(LoginContainer);