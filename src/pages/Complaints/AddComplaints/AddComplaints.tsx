import React from "react";
import BackButton from "../../../components/BackButton";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { primary } from "../../../theme/color";

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
          label=" شرط اول (عمرانی بودن محل اعتبار طرح)"
          control={
            <Checkbox
              checked={
                FisrtCondition.checked[0] && FisrtCondition.checked[1]
              }
              indeterminate={
                FisrtCondition.checked[0] !==
                FisrtCondition.checked[1]
              }
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              
            />
          }
          sx={{
            gridColumn: "span 12",
          }}
        />
      </Box>
    </>
  );
};

export default AddComplaint;
