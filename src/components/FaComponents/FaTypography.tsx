import { Typography, TypographyProps } from '@mui/material'
import { convertToPersianDigits } from '../../functions/Functions'

const FaTypography = (props: TypographyProps) => {
  return (
    <Typography {...props} >
      {convertToPersianDigits(props.children)}
    </Typography>
  )
}

export default FaTypography