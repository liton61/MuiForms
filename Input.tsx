import { SxProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
  name: string;
  label?: string;
  size?: 'small' | 'medium';
  type?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  margin?: 'none' | 'normal' | 'dense';
};

const DCSInput = ({
  name,
  label,
  size = 'small',
  type = 'text',
  fullWidth,
  sx,
  placeholder,
  required,
  variant = 'outlined',
  margin = 'normal',
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          size={size}
          variant={variant}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          placeholder={placeholder}
          required={required}
          margin={margin}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default DCSInput;
