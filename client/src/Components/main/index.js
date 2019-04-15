/* Libraries */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* css */
import '../../css/aurora-pack.min.css';
import '../../css/aurora-theme-base.min.css';
import '../../css/urku.css';


class Main extends Component{

    render(){
        const { body } = this.props;
        return(
            <main className="ae-container-fluid rk-main">{body}</main>
        );
    }
}

Main.propTypes = {
    body: PropTypes.object.isRequired,
};

export default Main;