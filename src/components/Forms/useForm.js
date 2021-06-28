import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [form, setForm] = useState(initialFValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'preview') {
      form.previewCounter = value.length;
    }
    setForm({
      ...form,
      [name]: value,
    });
    if (validateOnChange) { validate({ [name]: value }); }
  };

  const resetForm = () => {
    setForm(initialFValues);
    setErrors({});
  };

  return {
    form,
    setForm,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

export function Form(props) {
  const { children, ...other } = props;
  return (
    <form autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
