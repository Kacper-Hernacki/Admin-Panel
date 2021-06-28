import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    textTransform: 'none',
  },
}));

function Button(props) {
  const {
    text, size, color, variant, onClick, styles, ...other
  } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'medium'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}
      className={styles}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}

export default Button;