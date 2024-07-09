import * as React from 'react';
import { SxProps } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Controller, useFormContext } from 'react-hook-form';
type TTextareaProps = {
  name: string;
  placeholder?: string;
  minRows?: number;
  sx?: SxProps;
  required?: boolean;
};
const DCSTextArea = ({
  name,
  placeholder,
  minRows = 4, 
  sx,
  required,
}: TTextareaProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <TextareaAutosize
          {...field}
          placeholder={placeholder}
          minRows={minRows}
          style={{
            width: '100%',
            maxHeight: 'auto',
            border:'1px solid gray',
            borderRadius: '4px',
            ...(sx as React.CSSProperties)
          }}
        />
      )}
    />
  );
};
export default DCSTextArea;