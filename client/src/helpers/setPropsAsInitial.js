import React, { Component } from 'react';

export const setPropsAsinitial = (WrappedComponent) => (
    class extends Component {
        render() {
            return(
            <WrappedComponent {...this.props} 
                initialValues={this.props.popup.product}
                enableReinitialize
            ></WrappedComponent>
            )};
    }
);