import React from "react";
import BackButton from "../../../components/BackButton";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Green, GreenLight, primary } from "../../../theme/color";
import { RoundedCorner } from "@mui/icons-material";

const AddComplaint = () => {
  const [FisrtCondition, setFisrtCondition] = React.useState({
    checked: [] as boolean[],
  });
  const [SecondCondition, setSecondCondition] = React.useState({
    checked: [] as boolean[],
  });
  const [ThirdCondition, setThirdCondition] = React.useState({
    checked: [] as boolean[],
  });
  const [FourthCondition, setFourthCondition] = React.useState({
    checked: [] as boolean[],
  });
  const [AgreeWithTerms, setAgreeWithTerms] = React.useState(false);
  return (
    <>
      <BackButton to="/complaints/addContract" />
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        padding={"2rem"}
        border={`2px solid ${primary}`}
        borderRadius={"1rem"}
      >
        <Typography
          variant="h4"
          gridColumn={"span 12"}
          textAlign={"center"}
          sx={
            {
              // borderBottom: `2px solid ${primary}`,
            }
          }
        >
          فرم احراز شرایط داوری
        </Typography>

        <FormControlLabel
          label="شرط اول (عمرانی بودن محل اعتبار طرح)"
          sx={{
            cursor: "default",
            gridColumn: "span 12",
          }}
          control={
            <Checkbox
              checked={FisrtCondition.checked[0] || false}
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              icon={<RoundedCorner />}
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={"عمرانی (تملک دارایی سرمایه ای)"}
            control={
              <Checkbox
                checked={FisrtCondition.checked[0] || false}
                onChange={(e) => {
                  setFisrtCondition({
                    checked: [e.target.checked, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={"غیرعمرانی"}
            control={
              <Checkbox
                checked={FisrtCondition.checked[1] || false}
                onChange={(e) => {
                  setFisrtCondition({
                    checked: [false, e.target.checked, false],
                  });
                }}
              />
            }
          />
        </FormGroup>

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

        <FormControlLabel
          label="شرط دوم (تراضی بر داوری شورا)"
          sx={{
            cursor: "default",
            gridColumn: "span 12",
          }}
          control={
            <Checkbox
              checked={
                SecondCondition.checked[0] ||
                SecondCondition.checked[1] ||
                false
              }
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              icon={<RoundedCorner />}
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={
              "در ماده حل اختلاف قرارداد، داوری شورای عالی فنی درج شده است."
            }
            control={
              <Checkbox
                checked={SecondCondition.checked[0] || false}
                onChange={(e) => {
                  setSecondCondition({
                    checked: [e.target.checked, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "طرفین پس از عقد قرارداد، بر داوری شورا تراضی نموده اند."
            }
            control={
              <Checkbox
                checked={SecondCondition.checked[1] || false}
                onChange={(e) => {
                  setSecondCondition({
                    checked: [false, e.target.checked, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "فاقد تراضی روی داوری شورا در حین قرارداد یا پس از آن."
            }
            control={
              <Checkbox
                checked={SecondCondition.checked[2] || false}
                onChange={(e) => {
                  setSecondCondition({
                    checked: [false, false, e.target.checked],
                  });
                }}
              />
            }
          />
        </FormGroup>

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

        <FormControlLabel
          label="شرط سوم (عدم تسویه حساب)"
          sx={{
            cursor: "default",
            gridColumn: "span 12",
          }}
          control={
            <Checkbox
              checked={
                ThirdCondition.checked[0] ||
                ThirdCondition.checked[1] ||
                ThirdCondition.checked[2] ||
                false
              }
              icon={<RoundedCorner />}
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={"صورتحساب نهایی توسط پیمانکار امضا نشده است."}
            control={
              <Checkbox
                checked={ThirdCondition.checked[0] || false}
                onChange={(e) => {
                  setThirdCondition({
                    checked: [e.target.checked, false, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "صورتحساب نهایی بدون امضای پیمانکار، به پیمانکار ابلاغ شده است؛ اما پیمانکار ظرف مهلت مقرر در قرارداد به آن اعتراض نموده است."
            }
            control={
              <Checkbox
                checked={ThirdCondition.checked[1] || false}
                onChange={(e) => {
                  setThirdCondition({
                    checked: [false, e.target.checked, false, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "صورتحساب نهایی توسط پیمانکار امضا شده است اما صرفا دعاوی مربوط به آزادسازی ضمانتنامه ها مورد درخواست است."
            }
            control={
              <Checkbox
                checked={ThirdCondition.checked[2] || false}
                onChange={(e) => {
                  setThirdCondition({
                    checked: [false, false, e.target.checked, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={"هیچ یک از موارد فوق."}
            control={
              <Checkbox
                checked={ThirdCondition.checked[3] || false}
                onChange={(e) => {
                  setThirdCondition({
                    checked: [false, false, false, e.target.checked],
                  });
                }}
              />
            }
          />
        </FormGroup>

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

        <FormControlLabel
          label="شرط چهارم (عدم طرح در مراجع قضایی یا داوری)"
          sx={{
            cursor: "default",
            gridColumn: "span 12",
          }}
          control={
            <Checkbox
              checked={
                FourthCondition.checked[0] ||
                FourthCondition.checked[1] ||
                false
              }
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              icon={<RoundedCorner />}
              sx={{
                cursor: "default",
              }}
            />
          }
        />
        <FormGroup
          sx={{
            gridColumn: "2/span 11",
          }}
        >
          <FormControlLabel
            label={
              "رای قطعی در خصوص دعاوی مورد درخواست توسط مراجع قضایی صادر نشده است."
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[0] || false}
                onChange={(e) => {
                  setFourthCondition({
                    checked: [e.target.checked, false],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "قرار عدم صلاحیت (استماع) توسط مراجع قضایی صادر شده است."
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[1] || false}
                onChange={(e) => {
                  setFourthCondition({
                    checked: [false, e.target.checked],
                  });
                }}
              />
            }
          />
          <FormControlLabel
            label={
              "رای قطعی در خصوص دعاوی مورد درخواست توسط شورای عالی فنی صادر نشده است. "
            }
            control={
              <Checkbox
                checked={FourthCondition.checked[2] || false}
                onChange={(e) => {
                  setFourthCondition({
                    checked: [false, false, e.target.checked],
                  });
                }}
              />
            }
          />
        </FormGroup>

        <div
          style={{
            gridColumn: "span 12",
          }}
        />
        <Divider sx={{ gridColumn: "span 12" }} />
        <div
          style={{
            gridColumn: "span 12",
          }}
        />

        <FormControlLabel
          label={
            "این خواهان/خوانده شیوه نامه داوری شورای عالی فنی را مطالعه نموده و موافقت خود را با آن اعلام می دارد."
          }
          sx={{
            gridColumn: "span 6",
          }}
          control={
            <Checkbox
              checked={AgreeWithTerms}
              onChange={(e) => {
                setAgreeWithTerms(e.target.checked);
              }}
            />
          }
        />

        <Button
          variant="contained"
          sx={{
            gridColumn: "10 / span 3",
          }}
        >
          دانلود شیوه نامه داوری شورای عالی فنی
        </Button>
        <Button
          variant="contained"
          sx={{
            gridColumn: "span 12",
            background: Green,
            color: GreenLight,
            width: "max-content",
            justifySelf: "center",
            padding: "0.5rem 3rem",
            "&:hover": {
              background: GreenLight,
              color: Green,
            },
          }}
        >
          ارسال درخواست
        </Button>
      </Box>
    </>
  );
};

export default AddComplaint;
