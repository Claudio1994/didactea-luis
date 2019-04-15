/* Libraries */
import React from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Modal = (props) => (
    <Dialog
    onClose={props.handleClose}
    aria-labelledby="customized-dialog-title"
    open={Boolean(props.modal.open)}
    >
    <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        <Grid container>
            <Grid item xs={12} lg={8}>
                {props.modal && props.modal.name}
            </Grid>
            <Grid item xs={12} lg={4}>
                {props.modal && props.modal.description}
            </Grid>
        </Grid>
    </DialogTitle>
    <DialogContent>
        <Grid container>
            <Grid item>
                <img src={`${props.modal.image}`} alt={props.modal.name} ></img>
            </Grid>
        </Grid>
    </DialogContent>
    <DialogActions>
        <Button onClick={props.handleClose} color="primary">
            Cerrar
        </Button>
    </DialogActions>
    </Dialog>
);

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    modal: PropTypes.object.isRequired,
}

export default Modal;

