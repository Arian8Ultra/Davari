import { Box } from "@mui/material"
import MessagesList from "../../components/Portal/Messages/MessagesList"

const Protal = () => {
  return (
    <Box display={"grid"} sx={{ gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        <MessagesList />
    </Box>
  )
}

export default Protal