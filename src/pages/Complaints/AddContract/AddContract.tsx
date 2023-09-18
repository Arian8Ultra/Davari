import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  List,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Green, GreenLight } from "../../../theme/color";
import { Add } from "@mui/icons-material";
import BackButton from "../../../components/BackButton";
import countries from "../../../static/Countries";

const AddContract = () => {
  const [peoples, setPeoples] = React.useState([
    { name: "" as string, phone: "" as string },
  ]);
  countries.sort((a, b) => {
    if (a.name_fa < b.name_fa) {
      return -1;
    }
    if (a.name_fa > b.name_fa) {
      return 1;
    }
    return 0;
  });
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(12, 1fr)"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      padding={"2rem"}
    >
      <BackButton to="/complaints" />

      {/* 


      1-4- نمايندگان (وكلا)


      
      */}
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

      <Divider
        sx={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        2- تابعيت

      
      */}
      <Typography variant="h5" gridColumn={"span 12"}>
        {"2- تابعيت: "}
      </Typography>
      <TextField
        label="تابعيت خواهان: "
        variant="outlined"
        sx={{ gridColumn: "span 4" }}
        select
      >
        {countries.map((item, index) => (
          <MenuItem key={index} value={item.name_fa}>
            {item.name_fa}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="تابعيت خوانده: "
        variant="outlined"
        sx={{ gridColumn: "8 /span 4" }}
        select
      >
        {countries.map((item, index) => (
          <MenuItem key={index} value={item.name_fa}>
            {item.name_fa}
          </MenuItem>
        ))}
      </TextField>

      <Divider
        sx={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        3- مشخصات خوانده (امضاکننده قرارداد)

      
      */}

      <Typography variant="h5" gridColumn={"span 12"}>
        {"3- مشخصات خوانده (امضاکننده قرارداد): "}
      </Typography>
      <Typography variant="body1" gridColumn={"span 12"}>
        اسامی و تلفن (ثابت و همراه) افراد مطلع و مرتبط با پروژه:
      </Typography>

      {peoples.map((item, index) => (
        <Box
          key={index}
          gridColumn={{
            xs: "span 12",
            lg: "span 12",
          }}
          display={"grid"}
          gridTemplateColumns={"repeat(12,1fr)"}
        >
          <Box
            gridColumn={{
              xs: "span 12",
              lg: "span 6",
            }}
            display={"grid"}
            gridTemplateColumns={"repeat(2,1fr)"}
            columnGap={"2rem"}
            padding={"0rem 2rem"}
          >
            <TextField
              label="نام و نام خانوادگی"
              variant="outlined"
              autoComplete="name"
              type="text"
              sx={{ gridColumn: "span 1" }}
              value={item.name}
              onChange={(e) => {
                const newPeoples = [...peoples];
                newPeoples[index].name = e.target.value;
                setPeoples(newPeoples);
                console.log(peoples);
              }}
            ></TextField>
            <TextField
              label="تلفن"
              variant="outlined"
              type="number"
              autoComplete="phone"
              sx={{ gridColumn: "span 1" }}
              value={item.phone}
              onChange={(e) => {
                const newPeoples = [...peoples];
                newPeoples[index].phone = e.target.value;
                setPeoples(newPeoples);
                console.log(peoples);
              }}
            ></TextField>
          </Box>
        </Box>
      ))}
      <IconButton
        sx={{
          gridColumn: "span 12",
          justifySelf: "start",
          backgroundColor: Green,
          color: "white",
          "&:hover": {
            backgroundColor: GreenLight,
            color: Green,
          },
          margin: "0rem 2rem",
        }}
        onClick={() => {
          setPeoples([...peoples, { name: "", phone: "" }]);
        }}
      >
        <Add />
      </IconButton>

      <Divider sx={{ gridColumn: "span 12" }} />

      {/* 


        4- مشخصات قرارداد

      
      */}
      <Typography variant="h5" gridColumn={"span 12"}>
        {"4- مشخصات قرارداد: "}
      </Typography>
      <Typography variant="h6" gridColumn={"span 12"}>
        {
          "در این قسمت لازم است نوع قرارداد همسان سازمان برنامه و بودجه کشور که مورد استفاده قرار گرفته علامت زده شود:"
        }
      </Typography>

      <FormGroup
        sx={{
          gridColumn: "span 12",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه و شرایط عمومی و شرایط خصوصی پیمان‌ها- نشریه شماره ۴۳۱۱ – بخشنامه شماره 842/54-1088/102 مورخ ۰۳/۰۳/۱۳۷۸ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع- بخشنامه شماره ۹۶/۱۲۹۹۱۸۸ مورخ 04/05/1396 "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	انعقاد پیمان اجرای کارهای ساختمانی به صورت سرجمع- بخشنامه شماره 100/6405  مورخ 04/02/1389 "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	انعقاد پیمان بر اساس فهرست بهای تجمیع شده راه، باند فرودگاه و زیرسازی راه آهن – شماره 65637/100 مورخ 14/08/1391 "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره - نشریه شماره ۴۳۱۸- بخشنامه شماره ۱۰۵/۸۴۲-۵۴/۲۴۶۰- مورخ ۲۹/۰۴/۱۳۷۹ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مشاوره پژوهشی - نشریه شماره 3419- بخشنامه شماره 2753/54-1670/102 مورخ ۲4/۰5/۱۳۷۹ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه و شرایط عمومی همسان قراردادهای خدمات مدیریت طرح- نشریه شماره ۲۴۱۲۱ مورخ ۲۸/۰۱/۱۳۸۰ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های مهندسی، تأمین کالا و تجهیزات، ساختمان و نصب به صورت توأم (EPC) برای کارهای صنعتی - نشریه شماره ۵۴۹۰ مورخ ۰۱/۰۳/۱۳۸۱ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه، پیوست‌ها، شرایط عمومی و شرایط خصوصی پیمان‌های تامین کالا و تجهیزات، ساختمان و نصب به صورت توام  (PC)، برای کارهای صنعتی مورخ  ۱۸/۱۲/۱۳۸۳ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	قرارداد همسان طرح و ساخت (EPC غیر صنعتی)- 85428/101 مورخ ۱۵/۰۵/۱۳۸۴ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقت‌نامه مشارکت عمومی- خصوصی (PPP) بخشنامه شماره ۹۳/۱۷۲۸۰۴-مورخ ۲۶/۱۲/۱۳۹۳ "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="•	موافقتنامه ساخت، بهره‌برداری، واگذاری  (BOT)- نشریه شماره ۴۶۹ مورخ ۲۴/۱۰/۱۳۸۷ "
        />
        <FormControlLabel control={<Checkbox />} label="•    سایر " />
      </FormGroup>

      <Divider sx={{ gridColumn: "span 12" }} />

      {/* 


        4-1- موضوع قرارداد

      
      */}
      <Typography variant="h5" gridColumn={"span 12"}>
        4-1- موضوع قرارداد:
      </Typography>

      {/* 


        4-2

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-2-
      </Typography>
      <TextField
        label="شماره: "
        variant="outlined"
        sx={{ gridColumn: "span 3" }}
      />
      <TextField
        label="تاریخ: "
        variant="outlined"
        type="date"
        focused
        sx={{ gridColumn: "span 3" }}
      />

      {/* <Divider sx={{ gridColumn: "span 3" }} /> */}
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      {/* 


        4-3

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-3-
      </Typography>
      <TextField
        label="مبلغ اوليه/ حق‌الزحمه: "
        variant="outlined"
        type="text"
        InputProps={{
          endAdornment: "ریال",
        }}
        sx={{ gridColumn: "span 3" }}
      />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-4

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-4-
      </Typography>
      <TextField
        label="مدت اوليه: "
        variant="outlined"
        type="text"
        InputProps={{
          endAdornment: "ماه",
        }}
        sx={{ gridColumn: "span 3" }}
      />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار

      
      */}
      <Typography variant="h6" gridColumn={"span 12"}>
        4-5- فهرست‌هاي پايه منضم به پيمان و سال انتشار{" "}
      </Typography>

      {/* 


        4-5-1- فهرست بهاي واحد پايه رشته

      
      */}
      <Typography variant="body1" gridColumn={"span 1"}>
        4-5-1-
      </Typography>
      <TextField
        label="فهرست بهاي واحد پايه رشته :"
        InputProps={{
          endAdornment: "سال",
        }}
        sx={{ gridColumn: "span 3" }}
      />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان

      
      */}
      <Typography variant="h6" gridColumn={"span 12"}>
        4-6- فهرست بهاي خاص (غيرپايه) منضم به پيمان:
      </Typography>

      <RadioGroup defaultValue="true" name="radio-buttons-group">
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="دارد"
          defaultChecked
        />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="ندارد"
        />
      </RadioGroup>

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-7- "ضريب پيشنهادي

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-7-{" "}
      </Typography>

      <TextField
        label="ضريب پيشنهادي: "
        sx={{ gridColumn: "span 3" }}
      />
      <RadioGroup defaultValue="true" row>
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="درصدپلوس"
          defaultChecked
        />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="مينوس"
        />
      </RadioGroup>

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-8- نحوه واگذاري كار

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-8-
      </Typography>

      <FormControl
        sx={{
          gridColumn: "span 6",
        }}
      >
        <FormLabel id="demo-row-radio-buttons-group-label">
          نحوه واگذاري كار
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="مناقصه "
            control={<Radio />}
            label="مناقصه "
          />
          <FormControlLabel
            value="ترك مناقصه  "
            control={<Radio />}
            label="ترك مناقصه  "
          />
          <FormControlLabel control={<TextField />} label="" />
        </RadioGroup>
      </FormControl>

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-9- پيمان مشمول تعديل

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-9-
      </Typography>
      <FormControl
        sx={{
          gridColumn: "span 6",
        }}
      >
        <FormLabel id="demo-row-radio-buttons-group-label">
          پيمان مشمول تعديل{" "}
        </FormLabel>
        <RadioGroup row>
          <FormControlLabel
            value="مي‌باشد "
            control={<Radio />}
            label="مي‌باشد "
          />
          <FormControlLabel
            value="نمي‌باشد"
            control={<Radio />}
            label="نمي‌باشد"
          />
        </RadioGroup>
      </FormControl>

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-10- دوره شاخص مبنا

      
      */}
      <Typography variant="h6" gridColumn={"span 2"}>
        4-10- دوره شاخص مبنا
      </Typography>
      <TextField
        label="ماه"
        type="number"
        sx={{
          gridColumn: "span 2",
        }}
      />
      <TextField
        label="سال"
        type="number"
        sx={{
          gridColumn: "span 2",
        }}
      />

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-11- تاريخ شروع كار

      
      */}
      <Typography variant="h6" gridColumn={"span 2"}>
        4-11- تاريخ شروع كار:
      </Typography>
      {/* 


        4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري

      
      */}
      <Typography variant="h6" gridColumn={"span 2"}>
        4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري:{" "}
      </Typography>

      <TextField
        label="خواهان"
        type="date"
        focused
        sx={{
          gridColumn: "span 3",
        }}
      />
      <TextField
        label="خوانده"
        type="date"
        focused
        sx={{
          gridColumn: "span 3",
        }}
      />

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Typography variant="h6" gridColumn={"span 5"}>
        4-12- پيشرفت فيزيكي كار در تاريخ درخواست داوري:{" "}
      </Typography>

      <TextField
        label="خواهان"
        type="number"
        InputProps={{
          endAdornment: "درصد",
        }}
        sx={{
          gridColumn: "span 3",
        }}
      />
      <TextField
        label="خوانده"
        type="number"
        InputProps={{
          endAdornment: "درصد",
        }}
        sx={{
          gridColumn: "span 3",
        }}
      />
      {/* 


        4-13- پيشرفت ریالی كار در تاريخ درخواست داوري

      
      */}
      <Typography variant="h6" gridColumn={"span 5"}>
        4-13- پيشرفت ریالی كار در تاريخ درخواست داوري:{" "}
      </Typography>

      <TextField
        label="خواهان"
        type="number"
        InputProps={{
          endAdornment: "درصد",
        }}
        sx={{
          gridColumn: "span 3",
        }}
      />
      <TextField
        label="خوانده"
        type="number"
        InputProps={{
          endAdornment: "درصد",
        }}
        sx={{
          gridColumn: "span 3",
        }}
      />

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-14- وضعیت قرارداد در تاریخ درخواست داوری

      
      */}
      <Typography variant="h6" gridColumn={"span 4"}>
        4-14- وضعیت قرارداد در تاریخ درخواست داوری:
      </Typography>

      <FormControl
        sx={{
          gridColumn: "span 12",
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="ابلاغ خاتمه "
            control={<Radio />}
            label="ابلاغ خاتمه "
          />
          <FormControlLabel
            value="ابلاغ فسخ"
            control={<Radio />}
            label="ابلاغ فسخ"
          />
          <FormControlLabel
            value="جاری"
            control={<Radio />}
            label="جاری"
          />
          <FormControlLabel
            value="تحویل موقت"
            control={<Radio />}
            label="تحویل موقت"
          />
          <FormControlLabel
            value="تحویل قطعی "
            control={<Radio />}
            label="تحویل قطعی "
          />
          <FormControlLabel
            control={
              <TextField label={"تاریخ"} type="date" focused />
            }
            label=""
          />
        </RadioGroup>
      </FormControl>

      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />

      {/* 


        4-15- دستگاه نظارت (مهندس مشاور) 

      
      */}
      <Typography variant="h6" gridColumn={"span 1"}>
        4-15-
      </Typography>
      <TextField
        label={"دستگاه نظارت (مهندس مشاور) :"}
        sx={{
          gridColumn: "span 4",
        }}
      />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 6" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      {/* 


        4-16- تاخیرات

      
      */}
      <Typography variant="h6" gridColumn={"span 12"}>
        4-16- تاخیرات
      </Typography>
      <Typography variant="body1" gridColumn={"span 2"}>
        4-16-1- مجاز
      </Typography>
      <TextField
        label={"از نظر خواهان:"}
        sx={{
          gridColumn: "span 3",
        }}
        InputProps={{
          endAdornment: "روز",
        }}
      />
      <TextField
        label={"از نظر خوانده:"}
        sx={{
          gridColumn: "span 3",
        }}
        InputProps={{
          endAdornment: "روز",
        }}
      />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Divider sx={{ gridColumn: "span 2" }} />
      <div
        style={{
          gridColumn: "span 12",
        }}
      />
      <Typography variant="body1" gridColumn={"span 2"}>
        4-16-2- غیر مجاز
      </Typography>
      <TextField
        label={"از نظر خواهان:"}
        sx={{
          gridColumn: "span 3",
        }}
        InputProps={{
          endAdornment: "روز",
        }}
      />
      <TextField
        label={"از نظر خوانده:"}
        sx={{
          gridColumn: "span 3",
        }}
        InputProps={{
          endAdornment: "روز",
        }}
      />
      <Divider sx={{ gridColumn: "span 12" }} />
      {/* 


        توجهات

      
      */}
      <Typography
        variant="h5"
        fontWeight={800}
        gridColumn={"span 12"}
      >
        توجه مهم: چنانچه در خصوص تاخیرات و یا تبعات ناشی از آن اختلافی
        وجود دارد، لازم است موارد زیر ارسال شوند:
      </Typography>
      <Typography
        variant="h6"
        fontWeight={800}
        gridColumn={"span 12"}
      >
        • گزارش توجیهی تاخیرات قرارداد شامل:
      </Typography>
      <List sx={{ gridColumn: "span 12" }}>
        <Typography variant="body1">
          • برنامه های زمان‏بندی اولیه و اصلاحی ابلاغ شده
        </Typography>
        <Typography variant="body1">
          • گزارش تهیه شده توسط پیمانکار (به همراه کلیه مستندات و
          پیوست‏ها)
        </Typography>
        <Typography variant="body1">
          • گزارش رسیدگی به تاخیرات توسط مهندس مشاور
        </Typography>
        <Typography variant="body1">
          • مستندات ابلاغ نتایج رسیدگی به تاخیرات به پیمانکار توسط
          کارفرما
        </Typography>
      </List>
    </Box>
  );
};

export default AddContract;
