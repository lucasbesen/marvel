import * as React from 'react';
import { TextField as MaterialTextField } from '@material-ui/core';

type Input = {
  name: string,
  onChange: () => void,
  value: string,
  onBlur: () => void,
};

type Meta = {
  touched: boolean,
  error: string,
};

type Props = {
  input?: Input,
  meta?: Meta,
  label?: string,
};

const TextField = ({ input: { name, onChange, value, onBlur }, meta, label }: Props): React.ReactNode => (
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
