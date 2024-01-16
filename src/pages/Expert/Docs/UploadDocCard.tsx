/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import {
    TargetType,
    useUpdateRequestedDocMutation,
} from "../../../../generated-types";
import { UPLOAD_FILE } from "../../../api/upload";
import FileBox from "../../../components/FileBox";
import { primary, secondary } from "../../../theme/color";

export default function UploadDocCard(item: {
  __typename?: "DocumentRequest" | undefined;
  complaintId: number;
  requestedDocumentName: string;
  requestedDocumentFileName?: string | null | undefined;
  isDeleted: boolean;
  createdDate: any;
  id: number;
  userId: string;
  target?: TargetType | null | undefined;
  reftech?: any;
}) {
  const [file, setFile] = useState<File | undefined>();
  const [UpdateDocumentRequest] = useUpdateRequestedDocMutation();

  return (
    <TableRow key={item?.id}>
      <TableCell>{item?.requestedDocumentName}</TableCell>
      <TableCell>
        {!item?.requestedDocumentFileName
          ? "در انتظار آپلود"
          : "ثبت شده"}
      </TableCell>
      <TableCell>
        {item?.requestedDocumentFileName ? (
          <Box display={"flex"} justifyContent={"center"} gap={0}>
            {import.meta.env.VITE_FILE_URL}
            <Button
              variant={"contained"}
              color={"primary"}
              fullWidth
              sx={{
                backgroundColor: primary,
                color: secondary,
                fontWeight: "bold",
                borderRadius: "0rem",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: secondary,
                  color: primary,
                },
              }}
              onClick={() => {
                window.open(
                  `${
                    import.meta.env.VITE_FILE_URL ||
                    "http://172.16.23.50:7030/files"
                  }/${item?.requestedDocumentFileName}`,
                  "_blank"
                );
              }}
            >
              دانلود فایل
            </Button>
            <Button
              variant={"contained"}
              color="error"
              sx={{
                fontWeight: "bold",
                borderRadius: "0rem",
                boxShadow: "none",
              }}
              onClick={() => {
                const agree = confirm(
                  "آیا از حذف اطلاعات اطمینان دارید؟"
                );
                if (agree) {
                  void UpdateDocumentRequest({
                    variables: {
                      input: {
                        id: item?.id,
                        requestedDocumentFileName: "",
                        complaintId: item?.complaintId,
                        requestedDocumentName:
                          item?.requestedDocumentName,
                        userId: item?.userId,
                        target: item?.target,
                      },
                    },
                    onCompleted(data) {
                      console.log("🚀 ~ onCompleted ~ data", data);
                      item.reftech && item.reftech();
                    },
                  });
                }
              }}
            >
              حذف
            </Button>
          </Box>
        ) : (
          <FileBox setFiles={setFile} files={file} />
        )}
      </TableCell>
      <TableCell>
        <Button
          variant={"contained"}
          color={"primary"}
          fullWidth
          sx={{
            backgroundColor: primary,
            color: secondary,
            fontWeight: "bold",
            borderRadius: "0.1rem",
            "&:hover": {
              backgroundColor: secondary,
              color: primary,
            },
          }}
          disabled={item?.requestedDocumentFileName ? true : false}
          onClick={() => {
            //
            void UPLOAD_FILE({
              file: file as File,
              token: localStorage.getItem("token") as string,
              onSuccess(res) {
                console.log("🚀 ~ onSuccess ~ res:", res);
                void UpdateDocumentRequest({
                  variables: {
                    input: {
                      id: item?.id,
                      requestedDocumentFileName:
                        res?.result?.[0]?.newFileName,
                      complaintId: item?.complaintId,
                      requestedDocumentName:
                        item?.requestedDocumentName,
                      userId: item?.userId,
                      target: item?.target,
                    },
                  },
                  onCompleted(data) {
                    console.log("🚀 ~ onCompleted ~ data", data);
                    item.reftech && item.reftech();
                  },
                });
              },
              onFail(err) {
                console.log("🚀 ~ onFail ~ err:", err);
              },
            });
          }}
        >
          {"آپلود"}
        </Button>
      </TableCell>
    </TableRow>
  );
}
