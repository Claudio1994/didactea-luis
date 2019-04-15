import React from 'react';
import {TextField} from '@material-ui/core';

const InputField = ({input, type, name, label}) => {
    return(
        <TextField
        autoFocus
        margin="dense"
        id={name}
        label={label}
        type={type}
        fullWidth
        {...input}
        />
    );
};

export default InputField;