import React from 'react';
import { TextField } from '@material-ui/core';

function Input(props) {
  const {
    name, label, value, error = null, onChange, style,
  } = props;
  return (
    <TextField
      variant="filled"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      className={style}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
