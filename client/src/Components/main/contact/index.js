/* Libraries */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class Contact extends Component{
    /* componentWillMount(){
        let params = new URLSearchParams(this.props.location.search);
        console.log(params.get('token'));
    } */

    render(){
        return (
            <div style={{marginTop: '70px'}}>
                <Grid container spacing={24} >
                    <Grid item xs={1} md={2}>
                    </Grid>
                    <Grid item xs={10} md={8} style={{backgroundColor: 'ghostwhite', 
                    paddingTop: '30px', paddingBottom: '30px', boxShadow: '1px 1px 10px'}} >
                        <Grid container >
                            <Grid item style={{margin: 'auto'}}>
                                <h2>Contacto</h2>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container style={{marginTop: '20px'}}>
                            <Grid item xs={12} md={6}>
                                <p style={{textAlign: 'center'}}>
                                    correo <i class="far fa-envelope"></i>: luissepulveda07@gmail.com
                                </p>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <p style={{textAlign: 'center'}}>
                                    whatsapp <i class="fab fa-whatsapp"></i>: +5696843515
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contact;