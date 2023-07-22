import { Box, Typography } from "@mui/material"

const EmployeeCard = () => {
  return (
    <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={2} justifyContent={'center'} alignItems={'center'}>
      <Typography textAlign={'center'}>First Name</Typography>
    </Box>
  )
}

export default EmployeeCard