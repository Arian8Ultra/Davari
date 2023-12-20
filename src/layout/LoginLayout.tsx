import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <Outlet/>
    </Box>
  )
}

export default LoginLayout