import { Box, Card, Typography } from "@mui/material";
interface Props {
  title?: string;
  from?: string;
  to?: string;
  date?: Date;
  number?: string;
  status?: string;
  id: string | number;
}
const MessagesCard = (props: Props) => {
  return (
    <Box
      sx={{
        "backgroundColor": "rgba(255,255,255,0.4)",
        "width": "100%",
        "height": "100%",
        "padding": 2,
        "borderBottom": "1px solid rgba(100,100,100,0.2)",
        // boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.2)',
        "display": "grid",
        "gap": 1,
        "gridTemplateColumns": {
          xs: "repeat(3, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(6, 1fr)",
          lg: "repeat(6, 1fr)",
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
      <Typography
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.number && props.number}
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.title && props.title}
      </Typography>

      <Typography
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.date?.toLocaleString("fa-IR")}
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.from && props.from}
      </Typography>

      <Typography
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.to && props.to}
      </Typography>
      
      <Typography
        textAlign={"center"}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        fontSize={{
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.status && props.status}
      </Typography>
    </Box>
  );
};

export default MessagesCard;
