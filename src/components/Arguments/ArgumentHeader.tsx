import { TableCell, TableHead, TableRow } from "@mui/material";
import { grey } from "@mui/material/colors";
import { primaryGrey } from "../../theme/color";
interface Props {
  state?: number;
}
const ArgumentHeader = (props: Props) => {
  switch (props.state) {
    case 0:
      return (
        <TableHead
          sx={{
            background: primaryGrey,
            borderRadius: "0.5rem",
            color: "white",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              شناسه
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              خلاصه ادعا
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مشروح ادعا
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مبلغ خواسته شده ادعا(ریال)
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مستندات و نامه ادعا
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 1:
      return (
        <TableHead
          sx={{
            background: primaryGrey,
            borderRadius: "0.5rem",
            color: "white",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              شناسه
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              خلاصه ادعا
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              پاسخ خوانده
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مستندات و نامه خوانده
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 2:
      return (
        <TableHead
          sx={{
            background: primaryGrey,
            borderRadius: "0.5rem",
            color: "white",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              شناسه
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              خلاصه ادعا
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              نظر کارشناسی به طور مفصل
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مستندات و نامه نظر کارشناسی
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              متن رای پیشنهادی
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مبلغ مورد تایید کارشناس
            </TableCell>
          </TableRow>
        </TableHead>
      );
  }
};

export default ArgumentHeader;
