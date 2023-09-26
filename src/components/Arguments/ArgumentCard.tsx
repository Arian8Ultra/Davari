import { TableCell, TableRow } from "@mui/material";
import { Argument } from "../../static/Types";

interface Props extends Argument {
  id: number;
  state: number;
}
const ArgumentCard = (props: Props) => {
  switch (props.state) {
    case 0:
      return (
        <TableRow>
          <TableCell>{props.id}</TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.Summary}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.Description}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.SuggestedAmount}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.FileName}
          </TableCell>
        </TableRow>
      );

    case 1:
      return (
        <TableRow>
          <TableCell>{props.id}</TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.Summary}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.AccuserResponse}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.AccuserResponseFileName}
          </TableCell>
        </TableRow>
      );
    case 2:
      return (
        <TableRow>
          <TableCell>{props.id}</TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.Summary}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.ExpertOpinion}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.ExpertOpinionFileName}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.ExpertVerdict}
          </TableCell>
          <TableCell
            sx={{
              wordWrap: "break-word",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {props.ApprovedAmount}
          </TableCell>
        </TableRow>
      );
  }
};

export default ArgumentCard;
