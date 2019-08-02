import React from 'react';
import { TextField as _TextField } from '@material-ui/core';

const TextField = ({ input: { name, onChange, value }, meta, label }) => (
  <_TextField
    name={name}
    label={label}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    onChange={onChange}
    value={value}
    inputProps={{
      style: {
        width: 250,
      },
    }}
  />
);

export default TextField;
