import { Box, Button } from '@mui/material'
import React from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import { Green, GreenLight } from '../../theme/color'
import { useNavigate } from 'react-router-dom'

const Contracts = () => {
  const navigate = useNavigate()
  return (
    <Box
    display={"flex"}
    justifyContent={"flex-start"}
    alignItems={"center"}
    paddingY={1}
  >
    <Button
      variant='contained'
      endIcon={<AiFillFileAdd />}
      onClick={() => navigate('/viewForm/38/complaint')}
      sx={{
        "borderRadius": 2,
        "backgroundColor": Green,
        "fontWeight": 700,
        "fontStyle": "normal",
        "fontSize": "1rem",
        "boxShadow": "none",
        "&:hover": {
          backgroundColor: GreenLight,
        },
      }}
    >
      افزودن قرارداد جدید
    </Button>
  </Box>
  )
}

export default Contracts