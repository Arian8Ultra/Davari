import { Stack } from "@mui/material"
import { primaryTransparent } from "../../theme/color"
import theme from "../../theme/theme"
import ComplaintCardNew from "./ComplaintCardNew"

const ComplaintsList = () => {
  return (
    <Stack spacing={1} width={'100%'}  maxHeight={`calc(100vh - ${theme.spacing(25)})`} sx={{
        backgroundColor: primaryTransparent,
        borderRadius: 2,
        padding: 2,
        overflow: 'auto',   
        scrollPadding: theme.spacing(2),
        scrollSnapType: 'y mandatory',
        scrollbarGutter:'stable'
    }}>
        {[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
            <ComplaintCardNew key={index} id={item}/>
        ))}
    </Stack>
  )
}

export default ComplaintsList