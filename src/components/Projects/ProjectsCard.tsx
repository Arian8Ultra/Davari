import { Box, Typography } from "@mui/material";

interface Props {
  title?: string;
  description?: string;
  progress?: number;
  startDate?: Date;
  endDate?: Date;
  projectNumber?: string;
  status?: string;
  trackingNumber?: string;
  createdDate?: Date;
  id: string | number;
}
const ProjectsCard = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.4)",
        width: "100%",
        height: "100%",
        padding: 2,
        borderBottom: "1px solid rgba(100,100,100,0.2)",
        // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
        display: "grid",
        gap: 1,
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(7, 1fr)",
        },
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.6)",
          cursor: "pointer",
        },
      }}
      onClick={() => {
        console.log(props.id);
      }}
    >
      <Typography textAlign={"center"}>
        {props.title && props.title}
      </Typography>

      <Typography textAlign={"center"}>
        {props.projectNumber && props.projectNumber}
      </Typography>

      <Typography textAlign={"center"}>
        {props.startDate?.toLocaleString("fa-IR")}
      </Typography>

      <Typography textAlign={"center"}>
        {props.endDate?.toLocaleString("fa-IR")}
      </Typography>

      <Typography textAlign={"center"}>
        {props.status && props.status}
      </Typography>
      <Typography textAlign={"center"}>
        {props.trackingNumber && props.trackingNumber}
      </Typography>
      <Typography textAlign={"center"}>
        {props.createdDate?.toLocaleString("fa-IR")}
      </Typography>
    </Box>
  );
};

export default ProjectsCard;
