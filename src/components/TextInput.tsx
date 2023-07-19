/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FilledTextFieldProps, TextField } from '@mui/material'

interface Props extends FilledTextFieldProps {
  stickyText?: string
  gridColumns?: number
  gridRows?: number
}
const TextInput = (props: Props) => {
  const { stickyText, ...rest } = props
  return (
    <TextField
      {...rest}
      sx={{
        "& .MuiFilledInput-root": {
          backgroundColor: "white",
          gridRow: props.gridRows ? `span ${props.gridRows}` : "span 1",
          gridColumn: props.gridColumns ? `span ${props.gridColumns}` : "span 1",
        },
      }}
      inputProps={
        {
          startAdornment: stickyText,
        }
      }
    />
  )
}

export default TextInput