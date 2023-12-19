import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { primary } from '../../../theme/color'

const ConfirmUser = () => {

    const {userName,password} = useParams<{userName:string,password:string}>()
  return (
    <Box
    display={"grid"}
    sx={{
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gap: "1rem",
      width: "70%",
      height: "100%",
      columnGap: "0.2rem",
    }}
  >
          <Typography
            variant="body1"
            textAlign={"start"}
            sx={{ gridColumn: "span 3" }}
          >
            نام کاربری: {userName}
          </Typography>

            <Typography
                variant="body1"
                textAlign={"start"}
                sx={{ gridColumn: "span 3" }}
            >
                رمز عبور: {password}
            </Typography>

            <Button
            variant="contained"
            sx={{
              gridColumn: "span 3",
              background: primary,
            }}
           href='/home'
          >
            تایید
          </Button>
        
  </Box>
  )
}

export default ConfirmUser