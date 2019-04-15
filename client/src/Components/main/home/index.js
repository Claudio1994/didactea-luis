/* Libraries */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

/* css */
import '../../../css/home.css';
import '../../../css/aurora-pack.min.css';
import '../../../css/aurora-theme-base.min.css';
import '../../../css/urku.css';

/* Components */
import CardContainer from '../../../Containers/CardContainer';
import Modal from '../../../Containers/ModalContainer';

const Home = (props) => (
    <section >
            {props.myProducts.length === 0 ? 
        <div style={{ marginTop: '100px', alignItems: 'center',display: 'flex', justifyContent: 'center'}}>
            <CircularProgress color="inherit" size={60}></CircularProgress>
        </div> : 
        <section className={`ae-container-fluid ae-container-fluid--inner rk-portfolio marginTop15`}>
            <div  className="ae-masonry ae-masonry-md-2 ae-masonry-xl-4">
            {
                
            props.myProducts.map((image, index)=>{
            return(
                <CardContainer key={index} image={image}></CardContainer>
                );
            })
            }
            </div>
        </section>}
        <Modal></Modal>
    </section>
);

Home.propTypes = {
    myProducts: PropTypes.array.isRequired, 
}

export default Home;