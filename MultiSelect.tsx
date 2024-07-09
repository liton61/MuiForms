import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { SxProps, Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface ITAMultiSelect {
  name: string;
  label: string;
  items: string[];
  size?: "small" | "medium";
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const getStyles = (
  name: string,
  personName: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const DCSMultiSelect: React.FC<ITAMultiSelect> = ({
  name,
  label,
  items,
  size = "small",
  required,
  fullWidth = true,
  sx,
}) => {
  const theme = useTheme();
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <FormControl
      sx={{
        
        width: fullWidth ? "100%" : 315,
        ...sx,
        textAlign: "center",
        justifyContent: "center",
        minHeight: '54px', 
        marginTop: 1.2
      }}
      error={isError}
    >
      <InputLabel id={`${name}-label`} sx={{ mx: "auto" }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <Select
            labelId={`${name}-label`}
            id={name}
            multiple
            size={size}
            {...field}
            input={<OutlinedInput id="select-multiple-chip" label={label} />}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap:.5,
                  maxHeight: '34px',
                  overflow: 'auto',
                }}
              >
                {selected.map((value: string) => (
                  <Chip
                    key={value}
                    label={value}
                    size="small" 
                    sx={{ height: '18px' }}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            sx={{ minHeight: '25px' }}
          >
            {items.map((item) => (
              <MenuItem
                key={item}
                value={item}
                style={getStyles(item, field.value, theme)}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {isError && (
        <Typography component="small" sx={{ color: "error.main", fontSize:'10px', mt: 0.5 }}>
          {formState.errors[name]?.message as string}
        </Typography>
      )}
    </FormControl>
  );
};

export default DCSMultiSelect;
