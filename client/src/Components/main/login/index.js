/* Libraries */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { reduxForm, Field } from 'redux-form';


import InputField from '../../globalComponents/InputField';
import PopupMessageContainer from '../../../Containers/PopupMessageContainer';

const Login = (props) => (
    <Grid container style={{marginTop: '40px'}}>
        <Grid item xs={false} sm={3} lg={4}></Grid>
        <Grid item xs={12} sm={6} lg={4} style={{backgroundColor: 'ghostwhite',
        paddingTop: '30px', paddingBottom: '30px', boxShadow: '1px 1px 10px'}}>
            <h2 style={{textAlign: 'center'}}>Iniciar sesión</h2>
            <Divider />
            <form onSubmit={props.handleSubmit}>
                <Grid container spacing={24} style={{textAlign: 'center',
                 marginTop: '10px'}}>
                    <Grid container>
                        <Grid item xs={1} lg={2}></Grid>
                        <Grid item xs={10} lg={8}>
                            <Field
                                type="text"
                                name="email"
                                label="Correo"
                                component={InputField}>

                            </Field>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1} lg={2}></Grid>
                        <Grid item xs={10} lg={8}>
                            <Field 
                                type="password"
                                name="password"
                                label="Contraseña"
                                component={InputField}>
                            </Field>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link style={{color: 'purple', textDecoration: 'underline'}} to="">¿Ha olvidado la contraseña?</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" color="primary" variant="outlined" disabled={props.submitting}>Iniciar sesión</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>

        <PopupMessageContainer></PopupMessageContainer>
    </Grid>
);

export default reduxForm({form: 'login'})(Login);