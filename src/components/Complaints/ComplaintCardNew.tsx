import { Box,Typography } from "@mui/material";

const ComplaintCardNew = () => {
  return (
    <Box sx={{width:"100%", backgroundColor:"white",display:"grid" , gridTemplateColumns:'repeat(4,1fr)'}} >
        <Typography textAlign={"center"}>
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography textAlign={"center"}>
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography textAlign={"center"} >
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        <Typography textAlign={"center"} >
          شماره قرارداد:
          {
            // if title is not provided, use id + title
            // props.title ? String(props.title) : String(props.id) + " title "
          }
        </Typography>
        
    </Box>
  );
};

export default ComplaintCardNew;
