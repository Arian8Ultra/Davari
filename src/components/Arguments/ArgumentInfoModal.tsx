/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@mui/material";
import { AiFillFileAdd } from "react-icons/ai";
import { convertToPersianDigits } from "../../functions/Functions";
import { ComplaintArgument } from "../../gql/graphql";
import {
  OptionalArgumentSamll
} from "../../static/Types";
import { Green, GreenLight, background } from "../../theme/color";
import FaTypography from "../FaComponents/FaTypography";
import NewModal from "../Modals";
interface Props {
  open: boolean;
  handleClose: () => void;
  state: number;
  argument?: ComplaintArgument;
  fullArgument?: ComplaintArgument;
}
const ArgumentInfoModal = (props: Props) => {
  switch (props.state) {
    case -2:
      return (
        <NewModal
          open={props.open}
          onClose={props.handleClose}
          background={background}
          isCloseable={true}
          title={`مشخصات ادعا`}
          width={{
            xs: "100%",
            md: "50%",
          }}
        >
          <TableContainer
            sx={{
              width: "100%",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>خلاصه ادعا :</TableCell>
                  <TableCell>{props.fullArgument?.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>
                    {props.fullArgument?.description}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    <FaTypography>
                      {props.fullArgument?.suggestedAmount}
                    </FaTypography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خوانده :</TableCell>
                  <TableCell>
                    {props.fullArgument?.accusedResponse}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>نظر کارشناس دبیرخانه :</TableCell>
                  <TableCell>
                    {
                      props.fullArgument
                        ?.mailRoomExpertOpinionOnArgument
                    }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>نظر رئیس دبیرخانه :</TableCell>
                  <TableCell>
                    {
                      props.fullArgument
                        ?.mailRoomChiefOpinionOnArgument
                    }
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات خواهان :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName
                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.fullArgument?.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.fullArgument?.fileName
                          ? "flex"
                          : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.fullArgument?.fileName}
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات خوانده :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName

                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.fullArgument?.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        // display: "flex",
                        display: props.fullArgument
                          ?.accusedResponseFileName
                          ? "flex"
                          : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.fullArgument?.accusedResponseFileName}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </NewModal>
      );
    case -1:
      return (
        <NewModal
          open={props.open}
          onClose={props.handleClose}
          background={background}
          isCloseable={true}
          title={`مشخصات ادعا`}
          width={{
            xs: "100%",
            md: "50%",
          }}
        >
          <TableContainer
            sx={{
              width: "100%",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>خلاصه ادعا :</TableCell>
                  <TableCell>{props.argument?.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    <FaTypography>
                      {props.argument?.suggestedAmount}
                    </FaTypography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خوانده :</TableCell>
                  <TableCell>
                    {props.argument?.accusedResponse}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات خوانده :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName

                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
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
                      {props.argument?.accusedResponseFileName}
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>مستندات خواهان :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName
                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.argument?.fileName
                          ? "flex"
                          : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.argument?.fileName}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </NewModal>
      );
    case 1:
      return (
        <NewModal
          open={props.open}
          onClose={props.handleClose}
          background={background}
          isCloseable={true}
          title={`مشخصات ادعا در مرحله ${props.state}`}
        >
          <TableContainer
            sx={{
              width: "100%",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>خلاصه ادعا :</TableCell>
                  <TableCell>{props.argument?.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    {props.argument?.suggestedAmount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات خواهان :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName

                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
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
                      {props.argument?.fileName}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </NewModal>
      );

    case 2:
      return (
        <NewModal
          open={props.open}
          onClose={props.handleClose}
          background={background}
          isCloseable={true}
          title={`مشخصات ادعا`}
          width={{
            xs: "100%",
            md: "50%",
          }}
        >
          <TableContainer
            sx={{
              width: "100%",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>خلاصه ادعا :</TableCell>
                  <TableCell>{props.argument?.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    <FaTypography>
                      {props.argument?.suggestedAmount}
                    </FaTypography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خوانده :</TableCell>
                  <TableCell>
                    {props.argument?.accusedResponse}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خواهان :</TableCell>
                  <TableCell>
                    {props.argument?.accuserAnswerToAccusedResponse}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات خوانده :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName

                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
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
                      {props.argument?.accusedResponseFileName}
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>مستندات خواهان :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName
                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.argument?.fileName
                          ? "flex"
                          : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.argument?.fileName}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </NewModal>
      );

    case 3:
      return (
        <NewModal
          open={props.open}
          onClose={props.handleClose}
          background={background}
          isCloseable={true}
          title={`مشخصات ادعا`}
          width={{
            xs: "100%",
            md: "50%",
          }}
        >
          <TableContainer
            sx={{
              width: "100%",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>خلاصه ادعا :</TableCell>
                  <TableCell>{props.argument?.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    {convertToPersianDigits(
                      props.argument?.suggestedAmount
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خوانده :</TableCell>
                  <TableCell>
                    {props.argument?.accusedResponse}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ کارشناس :</TableCell>
                  <TableCell>
                    {props.argument?.expertOpinion}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>متن رای پیشنهادی :</TableCell>
                  <TableCell>
                    {props.argument?.expertVerdict}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ مورد تایید کارشناس :</TableCell>
                  <TableCell>
                    {convertToPersianDigits(
                      props.argument?.mailRoomExpertApprovedAmount
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات خوانده :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName
                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
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
                      {props.argument?.accusedResponseFileName}
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>مستندات خواهان :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName
                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.argument?.fileName
                          ? "flex"
                          : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.argument?.fileName}
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مستندات کارشناس :</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      endIcon={<AiFillFileAdd />}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                      onClick={() => {
                        // download file with url in fileName
                        window.open(
                          "http://172.16.23.50:7030/files/" +
                            props.argument?.expertOpinionFileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.argument?.expertOpinionFileName
                          ? "flex"
                          : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.argument?.expertOpinionFileName}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </NewModal>
      );
  }
};

export default ArgumentInfoModal;
