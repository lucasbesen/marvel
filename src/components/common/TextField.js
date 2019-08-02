import React from 'react';
import { TextField as MaterialTextField } from '@material-ui/core';

const TextField = ({ input: { name, onChange, value, onBlur }, meta, label }) => (
  <MaterialTextField
    name={name}
    label={label}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    inputProps={{
      style: {
        width: 250,
      },
    }}
  />
);

export default TextField;
