import { TableCell, TableHead, TableRow } from "@mui/material";
interface Props {
  state: number;
}
const ArgumentHeader = (props: Props) => {
  switch (props.state) {
    case 0:
      return (
        <TableHead>
          <TableRow>
            <TableCell>شناسه</TableCell>

            <TableCell>خلاصه ادعا</TableCell>
            <TableCell>مشروح ادعا</TableCell>
            <TableCell>مبلغ خواسته شده ادعا(ریال)</TableCell>
            <TableCell>مستندات و نامه ادعا</TableCell>
          </TableRow>
        </TableHead>
      );
    case 1:
      return (
        <TableHead>
          <TableRow>
            <TableCell>شناسه</TableCell>
            <TableCell>خلاصه ادعا</TableCell>
            <TableCell>پاسخ خوانده</TableCell>
            <TableCell>مستندات و نامه خوانده</TableCell>
          </TableRow>
        </TableHead>
      );
    case 2:
      return (
        <TableHead>
          <TableRow>
            <TableCell>شناسه</TableCell>
            <TableCell>خلاصه ادعا</TableCell>
            <TableCell>نظر کارشناسی به طور مفصل</TableCell>
            <TableCell>مستندات و نامه نظر کارشناسی</TableCell>
            <TableCell>متن رای پیشنهادی</TableCell>
            <TableCell>مبلغ مورد تایید کارشناس</TableCell>
          </TableRow>
        </TableHead>
      );
  }
};

export default ArgumentHeader;
