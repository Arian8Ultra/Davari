import { TableCell, TableHead, TableRow } from "@mui/material";
import { secondary } from "../../theme/color";
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
                textAlign: "center",
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
              colSpan={7}
              sx={{
                fontWeight: "bold",
                color: "white",
                textAlign:'center'
              }}
            >
              دعاوی قابل رسیدگی
            </TableCell>
          </TableRow>
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
              نوع بار مالی
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
              مبلغ ادعا خواهان(ریال)
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
              نظر کمیته فنی تخصصی به طور مفصل
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
              نظر کمیته فنی تخصصی به طور مفصل
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
    case 4:
      return (
        <TableHead
          sx={{
            background: secondary,
            borderRadius: "0.5rem",
            color: "white",
            "& th": {
              textAlign: "center",
            },
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
            {/* <TableCell
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            پاسخ خوانده
          </TableCell> */}
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
              نظر کارشناس دادگستری
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مبلغ مورد تایید کارشناس دادگستری
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مستندات
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 5:
      return (
        <TableHead
          sx={{
            background: secondary,
            borderRadius: "0.5rem",
            color: "white",
            "& th": {
              textAlign: "center",
            },
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
            {/* <TableCell
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            پاسخ خوانده
          </TableCell> */}
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
              نظر کارشناس دادگستری
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مبلغ مورد تایید کارشناس دادگستری
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مستندات
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case 6:
      return (
        <TableHead
          sx={{
            background: secondary,
            borderRadius: "0.5rem",
            color: "white",
            "& th": {
              textAlign: "center",
            },
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
            {/* <TableCell
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            پاسخ خوانده
          </TableCell> */}
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
              نظر کارشناس دادگستری
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مبلغ مورد تایید کارشناس دادگستری
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              نظر شورا
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مبلغ مورد تایید شورا
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              مستندات
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
  }
};

export default ArgumentHeader;
