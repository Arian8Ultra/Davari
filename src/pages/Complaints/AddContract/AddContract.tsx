import { Box, List, TextField, Typography } from "@mui/material";
import React from "react";

const AddContract = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(12, 1fr)"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
    >
      <Typography variant="h5" gridColumn={"span 12"}>
        {"1-4- نمايندگان (وكلا): "}
      </Typography>

      <Typography variant="body1" gridColumn={"span 12"}>
        {
          "حداکثر دو نفر نماینده معرفی شده صرفا دارای سمت در شرکت/دستگاه اجرایی یا در پروژه محل اختلاف (که یک نفر از آنها می تواند وکیل دادگستری (با وکالتنامه رسمی) باشد."
        }
      </Typography>

      <List sx={{ gridColumn: "span 12" }}>
        <Typography variant="body1">
          {"	الف) شركت در جلسه و امضاي قرارنامه داوري"}
        </Typography>
        <Typography variant="body1">
          {"ب) شركت در جلسات كارشناسي"}
        </Typography>
        <Typography variant="body1">
          {"پ) شركت در جلسه استماع"}
        </Typography>
        <Typography variant="body1">
          {"ت) دریافت رای داوری "}
        </Typography>
        <Typography variant="body1">
          {"ث) ساير همكاري‌هاي لازم و مرتبط با موضوع اختلاف"}
        </Typography>
      </List>

      <Typography variant="h5" gridColumn={"span 12"}>
        {"2- تابعيت: "}
      </Typography>
      <TextField
        label="تابعيت خواهان: "
        variant="outlined"
        sx={{ gridColumn: "span 3" }}
      ></TextField>
    </Box>
  );
};

export default AddContract;
