import { TableCell, TableHead, TableRow } from "@mui/material";
import { secondary, secondaryLighter } from "../../theme/color";
interface Props {
  state?: number;
}
const ArgumentHeader = (props: Props) => {
  switch (props.state) {
    case -1:
      return (
        <TableHead
          sx={{
            background: secondary,
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
              مبلغ خواسته شده ادعا(ریال)
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              پاسخ خواهان
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              ...
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 0:
      return (
        <TableHead
          sx={{
            background: secondary,
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
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              عملیات ها
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 1:
      return (
        <TableHead
          sx={{
            background: secondary,
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
              مبلغ پیشنهادی خواهان(ریال)
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
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              عملیات ها
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 2:
      return (
        <TableHead
          sx={{
            background: secondary,
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
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              عملیات ها
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 3:
      return (
        <TableHead
          sx={{
            background: secondary,
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
            <TableCell
              width={"50px"}
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              ...
            </TableCell>
          </TableRow>
        </TableHead>
      );
  }
};

export default ArgumentHeader;
