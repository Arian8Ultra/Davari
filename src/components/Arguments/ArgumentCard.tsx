/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import {
  Argument,
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../static/Types";
import { AiFillFileAdd } from "react-icons/ai";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  onPrimary,
  primary,
  primaryGrey,
  primaryGreyLightTransparent,
  primaryGreyTransparent,
  primaryLightTransparent,
  primaryLighter,
} from "../../theme/color";
import {
  DeleteOutlineTwoTone,
  EditRounded,
} from "@mui/icons-material";
import { convertToPersianDigits } from "../../functions/Functions";
import { BsPaperclip } from "react-icons/bs";
import { grey } from "@mui/material/colors";

interface Props {
  state: number;
  id: number;
  arguement: OptionalArgumentSamll;
  setSelectedArgument: React.Dispatch<
    React.SetStateAction<OptionalArgument>
  >;
  setAddModal: React.Dispatch<
    React.SetStateAction<{ open: boolean; Argument: Argument }>
  >;
  addModal: { open: boolean; Argument: Argument };
}
const ArgumentCard = ({
  state,
  id,
  arguement,
  setSelectedArgument,
  setAddModal,
  addModal,
}: Props) => {
  switch (state) {
    case 0:
      return (
        <TableRow
          key={id}
          sx={{
            background:
              id % 2 == 0
                ? primaryGreyLightTransparent
                : primaryLightTransparent,
            borderBottom: `1px solid ${primaryGreyTransparent}`,
            transition: "all 0.2s ease-in-out",
          }}
        >
          <TableCell>{convertToPersianDigits(id + 1)}</TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${primaryGreyTransparent}`
                  : `1px solid ${primaryLightTransparent}`,
            }}
          >
            {arguement.summary}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${primaryGreyTransparent}`
                  : `1px solid ${primaryLightTransparent}`,
            }}
          >
            {arguement.description}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${primaryGreyTransparent}`
                  : `1px solid ${primaryLightTransparent}`,
            }}
          >
            {arguement.suggestedAmount
              ? convertToPersianDigits(
                  arguement.suggestedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) || ""
              : "ندارد"}
          </TableCell>
          <TableCell
            sx={{
              borderLeft: `1px solid ${primaryGreyTransparent}`,
            }}
          >
            <Button
              variant="contained"
              endIcon={<AiFillFileAdd />}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              onClick={() => {
                // download file with url in fileName
                window.open(
                  "http://172.16.23.50:7030/files/" +
                    arguement.fileName
                );
              }}
              sx={{
                borderRadius: 2,
                backgroundColor: Green,
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "0.7rem",
                boxShadow: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: GreenLight,
                  color: Green,
                },
              }}
            >
              {arguement.fileName}
            </Button>
          </TableCell>
          <TableCell
            width={"250px"}
            sx={{
              borderLeft: `1px solid ${primaryGreyTransparent}`,
              padding: 1,
            }}
          >
            <Box
              width={"100%"}
              display={"grid"}
              sx={{
                gridTemplateColumns: "repeat(4, 50px)",
                gap: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                  });
                }}
                sx={{
                  backgroundColor: Green,
                  color: "white",
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: GreenLight,
                    color: Green,
                  },
                }}
              >
                <BsPaperclip />
              </IconButton>
              <IconButton
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                  });
                }}
                sx={{
                  backgroundColor: primaryGrey,
                  color: onPrimary,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: primaryLighter,
                    color: primary,
                  },
                }}
              >
                <EditRounded />
              </IconButton>
              <IconButton
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                  });
                }}
                sx={{
                  backgroundColor: Red,
                  color: "white",
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: RedLight,
                    color: Red,
                  },
                }}
              >
                <DeleteOutlineTwoTone />
              </IconButton>
            </Box>
          </TableCell>
        </TableRow>
      );

    case 1:
      return (
        <TableRow
          key={id}
          sx={{
            background:
              id % 2 == 0
                ? grey[300]
                : primaryLightTransparent,
            borderBottom: `1px solid ${primaryGreyTransparent}`,
            transition: "all 0.2s ease-in-out",
          }}
        >
          <TableCell>{id + 1}</TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${primaryGreyTransparent}`
                  : `1px solid ${primaryLightTransparent}`,
            }}
          >
            {arguement.summary}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${primaryGreyTransparent}`
                  : `1px solid ${primaryLightTransparent}`,
            }}
          >
            {arguement.accuserResponse}
          </TableCell>
          <TableCell
            sx={{
              borderLeft:
                id % 2 == 0
                  ? `1px solid ${primaryGreyTransparent}`
                  : `1px solid ${primaryLightTransparent}`,
            }}
          >
            {arguement.accuserResponseFileName && (
            <Button
            variant="contained"
            endIcon={<AiFillFileAdd />}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            onClick={() => {
              // download file with url in fileName
              window.open(
                "http://172.16.23.50:7030/files/" +
                  arguement.accuserResponseFileName
              );
            }}
            sx={{
              borderRadius: 2,
              backgroundColor: Green,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "0.7rem",
              boxShadow: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
          >
                {arguement.accuserResponseFileName}
              </Button>
            )}
          </TableCell>
          <TableCell
            width={"250px"}
            sx={{
              borderLeft: `1px solid ${primaryGreyTransparent}`,
              padding: 1,
            }}
          >
            <Box
              width={"100%"}
              display={"grid"}
              sx={{
                gridTemplateColumns: "repeat(4, 50px)",
                gap: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                  });
                }}
                sx={{
                  backgroundColor: Green,
                  color: "white",
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: GreenLight,
                    color: Green,
                  },
                }}
              >
                <BsPaperclip />
              </IconButton>
              <IconButton
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                  });
                }}
                sx={{
                  backgroundColor: primaryGrey,
                  color: onPrimary,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: primaryLighter,
                    color: primary,
                  },
                }}
              >
                <EditRounded />
              </IconButton>
              {/* <IconButton
                sx={{
                  backgroundColor: Red,
                  color: "white",
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: RedLight,
                    color: Red,
                  },
                }}
              >
                <DeleteOutlineTwoTone />
              </IconButton> */}
            </Box>
          </TableCell>
        </TableRow>
      );
  }
};

export default ArgumentCard;
