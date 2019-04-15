/* Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';


const DeletePopup = (props) => (
    <Dialog
        open={props.openPopup.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{"Eliminar"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Está seguro que desea eliminar el producto con nombre '{props.openPopup.product.name}'
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary">
            Cancelar
            </Button>
            <Button onClick={props.handleDelete} color="secondary" autoFocus>
            Eliminar
            </Button>
        </DialogActions>
    </Dialog>
);

DeletePopup.propTypes = {
    openPopup: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default DeletePopup;