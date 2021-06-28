import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  red: {
    color: '#ff0000',
    width: '100%',
    marginLeft: '250px',
  },
}));

function CharCounter(props) {
  const classes = useStyles();
  const {
    value, maxCounter, okay, limit,
  } = props;
  return (
    maxCounter > value
      ? (
        <div className={okay}>
          <Typography
            variant="subtitle1"
            component="subtitle1"
          >
            {value}
            /
            {maxCounter}
          </Typography>
        </div>
      )
      : (
        <div>
          <Typography
            variant="subtitle1"
            component="subtitle1"
          >
            <p className={classes.red}>
              {value}
              /
              {maxCounter}
            </p>
          </Typography>
        </div>
      )

  );
}

export default CharCounter;
