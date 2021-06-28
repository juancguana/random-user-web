import React from 'react';
import ReactDOM from 'react-dom';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  modal: {
    background: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Modal = (props) => {
  const classes = useStyles();

  return ReactDOM.createPortal(
    <Box className={classes.modal}>{props.children}</Box>,
    document.getElementById('modal')
  );
};

export default Modal;
