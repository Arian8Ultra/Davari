/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  DeleteOutlineTwoTone,
  DocumentScannerRounded,
  EditRounded,
} from "@mui/icons-material";
import { Box, Button, IconButton, TableCell, TableRow } from "@mui/material";
import { AiFillFileAdd } from "react-icons/ai";
import { BsCloudDownloadFill, BsEyeFill, BsPaperclip } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { convertToPersianDigits } from "../../functions/Functions";
import { ComplaintArgument } from "../../gql/graphql";
import { Argument } from "../../static/Types";
import {
  Green,
  GreenLight,
  primaryDark,
  primaryGreyTransparent,
  secondary
} from "../../theme/color";

interface Props {
  state: number;
  id: number;
  arguement: ComplaintArgument;
  setSelectedArgument: React.Dispatch<React.SetStateAction<ComplaintArgument>>;
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
      argument: ComplaintArgument;
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
  setVewMoreModal: setViewMoreModal,
}: Props) => {
  switch (state) {
    case -1:
      return (
        <TableRow
          key={id}
          sx={{
            background: id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
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
            {arguement.accusedResponse?.length &&
            arguement.accusedResponse?.length > 80
              ? arguement.accusedResponse?.slice(0, 80) + "..."
              : arguement.accusedResponse}
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
              borderInline:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.accuserAnswerToAccusedResponse}
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
                gridTemplateColumns: "repeat(2, auto)",
                gap: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  console.log(arguement);
                  setViewMoreModal &&
                    setViewMoreModal({
                      argument: arguement,
                      open: true,
                    });
                }}
                sx={{
                  // backgroundColor: primary,
                  // color: primaryLight,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  // "&:hover": {
                  //   backgroundColor: primaryLight,
                  //   color: primary,
                  // },
                }}
              >
                <BsEyeFill />
              </IconButton>
              <Button
                variant="text"
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                    editMode: true,
                  });
                }}
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <EditRounded />
                ویرایش/افزودن پاسخ
              </Button>
              {/* <IconButton
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
              </IconButton> */}
            </Box>
          </TableCell>
        </TableRow>
      );
    case 0:
      return (
        <TableRow
          key={id}
          sx={{
            background: id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
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
            {arguement?.financialSituation &&
              (JSON.parse(arguement?.financialSituation)?.title ==
              "withFinancialEffects"
                ? "دارای بار مالی"
                : JSON.parse(arguement?.financialSituation)?.title ==
                  "withoutFinancialEffects"
                ? "بدون بار مالی"
                : "") +
                "، " +
                JSON.parse(arguement?.financialSituation)?.subtitle}
          </TableCell>
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
            {arguement.description?.length && arguement.description?.length > 80
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
            {arguement.fileName && arguement.fileName?.length > 0 && (
              <Button
                variant="text"
                endIcon={<BsCloudDownloadFill />}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                onClick={() => {
                  // download file with url in fileName
                  window.open(
                    "http://172.16.23.50:7030/files/" + arguement.fileName
                  );
                }}
                fullWidth
                color="success"
                sx={{
                  borderRadius: 2,
                  // backgroundColor: Green,
                  color:primaryDark,
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "0.7rem",
                  boxShadow: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {arguement.fileName}
              </Button>
            )}
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
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
              }}
            >
              <Button
                variant="text"
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                    editMode: true,
                  });
                }}
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <EditRounded />
                ویرایش
              </Button>
              {/* <IconButton
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
              </IconButton> */}
              {/* <IconButton
                onClick={() => {
                  deleteArgument &&
                    deleteArgument(arguement.id ? arguement.id : 0);
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
              </IconButton> */}

              <Button
                variant="text"
                onClick={() => {
                  deleteArgument &&
                    deleteArgument(arguement.id ? arguement.id : 0);
                }}
                color="error"
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <DeleteOutlineTwoTone />
                حذف
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      );

    case 1:
      return (
        <TableRow
          key={id}
          sx={{
            background: id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
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
                gridTemplateColumns: "repeat(2, auto)",
                gap: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  console.log(arguement);
                  setViewMoreModal &&
                    setViewMoreModal({
                      argument: arguement,
                      open: true,
                    });
                }}
                sx={{
                  // backgroundColor: primary,
                  // color: secondaryDark,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  // "&:hover": {
                  //   backgroundColor: GreenLight,
                  //   color: secondaryDark,
                  // },
                }}
              >
                <BsEyeFill />
              </IconButton>

              <Button
                variant="text"
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                    editMode: true,
                  });
                }}
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <EditRounded />
                افزودن/ویرایش پاسخ
              </Button>
              {/* <IconButton
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
                  // aspectRatio: "1/1",
                  width: "max-content",
                  justifySelf: "center",
                  fontSize: "0.7rem",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    backgroundColor: secondaryLighter,
                    color: secondaryDark,
                  },
                }}
              >
                <EditRounded />
                افزودن/ویرایش پاسخ
              </IconButton> */}
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
    case 2:
      return (
        <TableRow
          key={id}
          sx={{
            background: id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
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
            {arguement.expertOpinion}
          </TableCell>
          <TableCell
            sx={{
              borderLeft:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.expertOpinionFileName && (
              <Button
                variant="contained"
                endIcon={<AiFillFileAdd />}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                onClick={() => {
                  // download file with url in fileName
                  window.open(
                    "http://172.16.23.50:7030/files/" +
                      arguement.expertOpinionFileName
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
                {arguement.expertOpinionFileName}
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
            {arguement.expertVerdict}
          </TableCell>
          <TableCell
            width={"250px"}
            sx={{
              borderLeft: `1px solid ${primaryGreyTransparent}`,
              padding: 1,
            }}
          >
            {arguement.netMailRoomExpertApprovedAmount}
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
                gridTemplateColumns: "repeat(2, auto)",
                gap: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  console.log(arguement);
                  setViewMoreModal &&
                    setViewMoreModal({
                      argument: arguement,
                      open: true,
                    });
                }}
                sx={{
                  // backgroundColor: Green,
                  // color: "white",
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  // "&:hover": {
                  //   backgroundColor: GreenLight,
                  //   color: Green,
                  // },
                }}
              >
                <BsPaperclip />
              </IconButton>
              {/* <IconButton
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
              </IconButton> */}

              <Button
                variant="text"
                onClick={() => {
                  setSelectedArgument(arguement);
                  setAddModal({
                    ...addModal,
                    open: true,
                    editMode: true,
                  });
                }}
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                <EditRounded />
                افزودن/ویرایش پاسخ
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      );
    case 3:
      return (
        <TableRow
          key={id}
          sx={{
            background: id % 2 == 0 ? "rgba(230,230,230)" : "rgba(200,200,200)",
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
            {arguement.expertOpinion}
          </TableCell>
          <TableCell
            sx={{
              borderLeft:
                id % 2 == 0
                  ? `1px solid ${secondary}`
                  : `1px solid ${secondary}`,
            }}
          >
            {arguement.expertOpinionFileName && (
              <Button
                variant="contained"
                endIcon={<AiFillFileAdd />}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                onClick={() => {
                  // download file with url in fileName
                  window.open(
                    "http://172.16.23.50:7030/files/" +
                      arguement.expertOpinionFileName
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
                {arguement.expertOpinionFileName}
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
            {arguement.expertVerdict}
          </TableCell>
          <TableCell
            width={"250px"}
            sx={{
              borderLeft: `1px solid ${primaryGreyTransparent}`,
              padding: 1,
            }}
          >
            {convertToPersianDigits(
              arguement.netMailRoomExpertApprovedAmount
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            )}
          </TableCell>
          <TableCell
            width={"50px"}
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
                  console.log(arguement);
                  setViewMoreModal &&
                    setViewMoreModal({
                      argument: arguement,
                      open: true,
                    });
                }}
                sx={{
                  // backgroundColor: primary,
                  // color: primaryLight,
                  aspectRatio: "1/1",
                  width: "40px",
                  justifySelf: "center",
                  // "&:hover": {
                  //   backgroundColor: primaryLight,
                  //   color: primary,
                  // },
                }}
              >
                <BsEyeFill />
              </IconButton>
            </Box>
          </TableCell>
        </TableRow>
      );

    case 4:
      return (
        <TableRow>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.id}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.summary}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.suggestedAmount
              ? convertToPersianDigits(
                  arguement.suggestedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.justiceExpertOpinion || "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.netJusticeExpertApprovedAmount
              ? convertToPersianDigits(
                  arguement.netJusticeExpertApprovedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant={"text"}
              fullWidth
              // sx={{
              //   backgroundColor: secondaryDark,
              //   color: "white",
              //   "&:hover": {
              //     backgroundColor: secondary,
              //   },
              // }}
              sx={{
                display: "flex",
                gap: 3,
              }}
              onClick={() => {
                console.log("open");
                setViewMoreModal &&
                  setViewMoreModal({
                    argument: arguement,
                    open: true,
                  });
              }}
            >
              <DocumentScannerRounded />
              مستندات
            </Button>
          </TableCell>
        </TableRow>
      );
    case 5:
      return (
        <TableRow>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.id}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.summary}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.suggestedAmount
              ? convertToPersianDigits(
                  arguement.suggestedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.justiceExpertOpinion || "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.netJusticeExpertApprovedAmount
              ? convertToPersianDigits(
                  arguement.netJusticeExpertApprovedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant={"text"}
              fullWidth
              sx={{
                display: "flex",
                gap: 3,
              }}
              onClick={() => {
                console.log("open");
                setViewMoreModal &&
                  setViewMoreModal({
                    argument: arguement,
                    open: true,
                  });
              }}
            >
              <DocumentScannerRounded />
              مستندات
            </Button>
          </TableCell>
        </TableRow>
      );
    case 6:
      return (
        <TableRow>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.id}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.summary}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.suggestedAmount
              ? convertToPersianDigits(
                  arguement.suggestedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.justiceExpertOpinion || "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.netJusticeExpertApprovedAmount
              ? convertToPersianDigits(
                  arguement.netJusticeExpertApprovedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement?.councilOpinion || "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            {arguement.netCouncilApprovedAmount
              ? convertToPersianDigits(
                  arguement.netCouncilApprovedAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ) + " ریال"
              : "وارد نشده است"}
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant={"text"}
              fullWidth
              sx={{
                display: "flex",
                gap: 3,
              }}
              onClick={() => {
                console.log("open");
                setViewMoreModal &&
                  setViewMoreModal({
                    argument: arguement,
                    open: true,
                  });
              }}
            >
              <DocumentScannerRounded />
              مستندات
            </Button>
          </TableCell>
          <TableCell
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant={"text"}
              fullWidth
              sx={{
                display: "flex",
                gap: 3,
              }}
              onClick={() => {
                console.log("open");
                setSelectedArgument(arguement);
                setAddModal({
                  ...addModal,
                  open: true,
                  editMode: true,
                });
              }}
            >
              <FaEdit />
              {arguement?.netCouncilApprovedAmount ? "ویرایش" : "افزودن نظر شورا"}
            </Button>
          </TableCell>
        </TableRow>
      );
  }
};

export default ArgumentCard;
