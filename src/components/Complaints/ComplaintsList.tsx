import { Stack } from "@mui/material"
import ComplaintCard from "./ComplaintCard"
import { primaryGreyTransparent, primaryTransparent } from "../../theme/color"

const ComplaintsList = () => {
  return (
    <Stack spacing={2} width={'100%'} sx={{
        backgroundColor: primaryTransparent,
        borderRadius: 2,
        padding: 2,
    }}>
        {[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
            <ComplaintCard key={index} id={index}/>
        ))}
    </Stack>
  )
}

export default ComplaintsList