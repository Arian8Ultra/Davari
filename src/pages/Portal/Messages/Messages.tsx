import { Box } from "@mui/material"
import MessagesList from "../../../components/Portal/Messages/MessagesList"
import NewMessageBox from "../../../components/Portal/Messages/NewMessageBox"

const Messages = () => {
  return (
    <Box
    display={"grid"}
    sx={{
      gridTemplateColumns: {
        xs: "1fr",
        md: "1fr 1fr",
      },
      gap: 2,
    }}
  >
    <MessagesList/>
    <NewMessageBox/>
  </Box>
  )
}

export default Messages