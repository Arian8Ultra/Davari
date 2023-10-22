/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  DeleteOutlineTwoTone,
  EditRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import { AiFillFileAdd } from "react-icons/ai";
import { BsPaperclip } from "react-icons/bs";
import { convertToPersianDigits } from "../../functions/Functions";
import {
  Argument,
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../static/Types";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  onPrimary,
  primaryGreyTransparent,
  secondary,
  secondaryDark,
  secondaryLight,
  secondaryLighter,
} from "../../theme/color";

interface Props {
  state: number;
  id: number;
  arguement: OptionalArgumentSamll;
  setSelectedArgument: React.Dispatch<
    React.SetStateAction<OptionalArgument>
  >;
  setAddModal: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      Argument: Argument;
      editMode: boolean;
    }>
  >;
  setVewMoreModal?: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      argument: OptionalArgument;
    }>
  >;
  addModal: { open: boolean; Argument: Argument };
  deleteArgument?: (id: number) => void;
}
const ArgumentCard = ({
  state,
  id,
  arguement,
  setSelectedArgument,
  setAddModal,
  addModal,
  deleteArgument,
  setVewMoreModal,
}: Props) => {
  switch (state) {
    case 0:
      return (
        <TableRow
          key={id}
          sx={{
            background:
              id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
            borderBottom: `1px solid ${primaryGreyTransparent}`,
            transition: "all 0.2s ease-in-out",
          }}
        >
          <TableCell>{convertToPersianDigits(id + 1)}</TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.summary}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.description?.length &&
            arguement.description?.length > 80
              ? arguement.description?.slice(0, 80) + "..."
              : arguement.description}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
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
              borderLeft: `1px solid ${secondary}`,
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
              borderLeft: `1px solid ${secondary}`,
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
              {/* <IconButton
                // onClick={() => {
                //   setSelectedArgument(arguement);
                //   setAddModal({
                //     ...addModal,
                //     open: true,
                //   });
                // }}
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
              </IconButton> */}
              <IconButton
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                    editMode: true,
                  });
                }}
                sx={{
                  backgroundColor: secondaryLight,
                  color: onPrimary,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: secondaryLighter,
                    color: secondaryDark,
                  },
                }}
              >
                <EditRounded />
              </IconButton>
              <IconButton
                onClick={() => {
                  deleteArgument &&
                    deleteArgument(
                      parseInt(arguement.id ? arguement.id : "")
                    );
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
              id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
            borderBottom: `1px solid ${secondary}`,
            transition: "all 0.2s ease-in-out",
          }}
        >
          <TableCell>{id + 1}</TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.summary}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.suggestedAmount
              ? convertToPersianDigits(
                  arguement.suggestedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) || ""
              : "ندارد"}{" "}
          </TableCell>
          <TableCell
            sx={{
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.accusedResponse}
          </TableCell>
          <TableCell
            sx={{
              borderLeft:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.accusedResponseFileName && (
              <Button
                variant="contained"
                endIcon={<AiFillFileAdd />}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                onClick={() => {
                  // download file with url in fileName
                  window.open(
                    "http://172.16.23.50:7030/files/" +
                      arguement.accusedResponseFileName
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
                {arguement.accusedResponseFileName}
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
                  console.log(arguement);

                  setVewMoreModal &&
                    setVewMoreModal({
                      argument: arguement,
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
                    editMode: true,
                  });
                }}
                sx={{
                  backgroundColor: secondaryLight,
                  color: secondaryLighter,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  "&:hover": {
                    backgroundColor: secondaryLighter,
                    color: secondaryDark,
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
