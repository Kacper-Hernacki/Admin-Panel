import React from 'react';
import Button from './Button';

function ButtonUpload(props) {
  const {
    text, variant, name, value, size, buttonStyle,
    color, onChange, inputStyle, valid, invalid, firstTime, ...other
  } = props;
  let validation = buttonStyle;
  if (value) {
    validation = valid;
  }
  return (
    (value || firstTime)
      ? (
        <div>
          <input
            accept="image/*, .jpg, .png, .jpeg"
            id="btn-upload"
            type="file"
            className={inputStyle}
            onChange={onChange}
          />
          <label htmlFor="btn-upload">
            <Button
              text={text}
              variant={variant}
              size={size}
              color={color}
              onChange={onChange}
              styles={validation}
              {...other}
            />
          </label>
        </div>
      )
      : (
        <div>
          <input
            accept="image/*, .jpg, .png, .jpeg"
            id="btn-upload"
            type="file"
            className={inputStyle}
            onChange={onChange}
          />
          <label htmlFor="btn-upload">
            <Button
              text={text}
              variant={variant}
              size={size}
              color={color}
              onChange={onChange}
              styles={invalid}
              {...other}
            />
          </label>
        </div>
      )
  );
}

export default ButtonUpload;
