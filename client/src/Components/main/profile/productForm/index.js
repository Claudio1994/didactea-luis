/* Libraries */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, 
    TextField} from'@material-ui/core';
import { setPropsAsinitial } from '../../../../helpers/setPropsAsInitial';

import FileFieldInput from '../../../globalComponents/fileFieldInput';
import InputField from '../../../globalComponents/InputField';

const ProductForm = (props) => (
    <Dialog
    open={props.popup.open}
    onClose={props.handleClose}
    aria-labelledby="form-dialog-title"
    fullScreen
    >
        <DialogTitle id="form-dialog-title">{props.popup.type.title}</DialogTitle>
        <form onSubmit={props.handleSubmit}>
            <DialogContent>
                <DialogContentText>
                    {props.popup.type.message}
                </DialogContentText>
                <Field
                name="name"
                label="Nombre"
                type="text"
                value={props.name}
                component={InputField}
                />
                <Field
                name="description"
                label="Descripción"
                type="text"
                value={props.description}
                component={InputField}
                />
                <Field
                name="image"
                label="Imagen"
                type="file"
                value={props.image}
                component={FileFieldInput}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="secondary">
                    Cancelar
                </Button>
                <Button type="submit" disabled={props.submitting} color="primary">
                    Editar
                </Button>
            </DialogActions>
        </form>
    </Dialog>
);

export default setPropsAsinitial(reduxForm({form: 'productForm'})(ProductForm));