/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  MenuItem,
  Pagination,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import React from "react";
import TextInput from "../TextInput";
interface Props {
  page?: number;
  setPage?: (page: number) => void;
  totalRecords?: number;
  recordsPerPage?: number;
  setRecordsPerPage?: (recordsPerPage: number) => void;
  types?: {
    value: any;
    label: string;
  }[];
  setType?: (type: any) => void;
  type?: any;
  children?: React.ReactNode;
  tableHeader?: React.ReactNode;
  colNum?: number;
}
const CTable = ({
  page,
  setPage,
  totalRecords,
  recordsPerPage = 10,
  setRecordsPerPage,
  types,
  setType,
  type,
  children,
  tableHeader,
  colNum = 6,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {types && types.length > 0 && (
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            padding: 3,
          }}
        >
          <Tabs value={type} onChange={(_, value) => setType?.(value)}>
            {types?.map((item) => (
              <Tab label={item.label} value={item.value} key={item.label} />
            ))}
          </Tabs>
        </Box>
      )}
      <TableContainer
        sx={{
          outline: "1px solid #ccc",
          padding: 0,
          py: 0,
          borderRadius: "10px",
          "&:nth-of-type(odd)": {
            // backgroundColor: "#f5f5f5",
          },
          "&:nth-of-type(even)": {
            // backgroundColor: "#fff",
          },
        }}
      >
        <Table>
          <TableHead>{tableHeader}</TableHead>
          <TableBody
            sx={{
              "& tr": {
                "&:nth-of-type(odd)": {
                  backgroundColor: "#f5f5f5",
                },
                "&:nth-of-type(even)": {
                  backgroundColor: "#fff",
                },
              },
            }}
          >
            {children}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={1}>
                <TextInput
                  variant="outlined"
                  value={recordsPerPage || 10}
                  onChange={(e) => setRecordsPerPage?.(+e.target.value)}
                  type="number"
                  select
                  fullWidth={false}
                  label="تعداد نمایش"
                >
                  {[5, 10, 15, 20, 25].map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextInput>
              </TableCell>
              <TableCell colSpan={colNum - 1} className="">
                <Box
                  sx={{
                    display: "flex",
                    gap: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: 2,
                  }}
                >
                  <Pagination
                    count={Math.ceil(
                      (totalRecords || 1) / (recordsPerPage || 1)
                    )}
                    page={page}
                    onChange={(_, value) => setPage?.(value)}
                    shape="rounded"
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CTable;
