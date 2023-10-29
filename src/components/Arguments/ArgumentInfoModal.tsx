/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import {
  OptionalArgument,
  OptionalArgumentSamll,
} from "../../static/Types";
import NewModal from "../Modals";
import { Green, GreenLight, background } from "../../theme/color";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { AiFillFileAdd } from "react-icons/ai";
import FaTypography from "../FaComponents/FaTypography";
interface Props {
  open: boolean;
  handleClose: () => void;
  state: number;
  argument: OptionalArgumentSamll;
}
const ArgumentInfoModal = (props: Props) => {
  switch (props.state) {
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
                  <TableCell>{props.argument.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    <FaTypography>
                      {props.argument.suggestedAmount}
                    </FaTypography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خوانده :</TableCell>
                  <TableCell>
                    {props.argument.accusedResponse}
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
                            props.argument.fileName
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
                      {props.argument.accusedResponseFileName}
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
                            props.argument.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.argument.fileName ? "flex" : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.argument.fileName}
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
                  <TableCell>{props.argument.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    {props.argument.suggestedAmount}
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
                            props.argument.fileName
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
                      {props.argument.fileName}
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
                  <TableCell>{props.argument.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مشروح ادعا :</TableCell>
                  <TableCell>{props.argument.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>مبلغ خواسته شده ادعا :</TableCell>
                  <TableCell>
                    <FaTypography>
                      {props.argument.suggestedAmount}
                    </FaTypography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>پاسخ خوانده :</TableCell>
                  <TableCell>
                    {props.argument.accusedResponse}
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
                            props.argument.fileName
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
                      {props.argument.accusedResponseFileName}
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
                            props.argument.fileName
                        );
                      }}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: Green,
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: "0.7rem",
                        boxShadow: "none",
                        display: props.argument.fileName ? "flex" : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: GreenLight,
                          color: Green,
                        },
                      }}
                    >
                      {props.argument.fileName}
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
