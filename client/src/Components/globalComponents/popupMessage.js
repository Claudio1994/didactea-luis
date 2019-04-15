import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const PopupMessage = (props) => (
    
    <Snackbar
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        open={props.message.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
        ContentProps={{
        'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{props.message.message }</span>}
        action={
        <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={props.handleClose}
        >
            <CloseIcon />
        </IconButton>
        }
    />
  
);


export default PopupMessage;