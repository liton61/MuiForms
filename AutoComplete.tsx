import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SxProps, useTheme } from '@mui/material';

type Option = {
  label: string;

};

type TStateProps = {
  name: string;
  label?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
  options: Option[];
  size?: 'small' | 'medium';
};

const DCSAutoComplete = ({
  name,
  label = "Movie",
  fullWidth,
  sx,
  required,
  options,
  size='small'
}: TStateProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          disablePortal
          id="combo-box-demo"
          options={options}
          size={size}
          getOptionLabel={(option) => option.label}
          sx={{
            width: 300,
            '& .MuiAutocomplete-listbox': {
              maxHeight: 200,
              overflow: 'auto',
            },
            ...sx,
          }}
          onChange={(_, newValue) => field.onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              fullWidth={fullWidth}
              required={required}
              error={!!error}
              helperText={error?.message}
              sx={{ width: 300, mx: 'auto'}} // Ensure the TextField width matches
            />
          )}
        />
      )}
    />
  );
};

export default DCSAutoComplete;
