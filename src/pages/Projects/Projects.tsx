import {
  Box,
  Button,
  TextField,
  useScrollTrigger
} from "@mui/material";
import { AiFillFileAdd } from "react-icons/ai";
import ProjectsList from "../../components/Projects/ProjectsList";
import {
  Green,
  GreenLight,
  onPrimary,
  primaryGrey
} from "../../theme/color";

const Projects = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 110,
    target: window ? window : undefined,
  });
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={
        {
          // outline: '1px solid red',
        }
      }
    >
      {/* {!trigger && ( */}
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingY={1}
        sx={{
          justifySelf: "flex-start",
          alignSelf: "flex-start",
          gap: 2,
        }}
      >
        <Button
          variant='contained'
          endIcon={<AiFillFileAdd />}
          sx={{
            "borderRadius": 2,
            "backgroundColor": Green,
            "fontWeight": 700,
            "fontStyle": "normal",
            "fontSize": "1rem",
            "boxShadow": "none",
            "height": "100%",
            "&:hover": {
              backgroundColor: GreenLight,
            },
          }}
        >
          افزودن طرح
        </Button>
        <TextField
          label='جستجوی طرح'
          placeholder='عنوان یا کد طرح'
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.2)",
              boxShadow: "none",
              width: "40vw",
              fontSize: "1rem",
            },
          }}
        />
      </Box>
      {/* )} */}

      <ProjectsList />
      {trigger && (
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          padding={0}
          sx={{
            justifySelf: "flex-start",
            alignSelf: "flex-start",
            flexDirection: {
              xs: "column",
              lg: "row-reverse",
            },
            position: "fixed",
            bottom: 0,
            right: 0,
            left: {
              xs: 0,
              lg: "auto",
            },
            backgroundColor: primaryGrey,
            backdropFilter: "blur(10px)",
            borderRadius: "10px 0 0 0",
            gap: 0,
          }}
        >
          <Button
            variant='text'
            endIcon={<AiFillFileAdd />}
            sx={{
              "borderRadius": 0,
              "backgroundColor": Green,
              "height": "3rem",
              "color": primaryGrey,
              "fontWeight": 700,
              "fontStyle": "normal",
              "fontSize": "1.2rem",
              // "boxShadow": "2px 2px 10px 2px rgba(0,0,0,0.3)",
              "boxShadow": "none",
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
          >
            افزودن طرح
          </Button>
          <TextField
            label='جستجوی طرح'
            placeholder='عنوان یا کد طرح'

            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px 0 0 0",
                backgroundColor: "rgba(255,255,255,0)",
                boxShadow: "none",
                width: "20vw",
                height: "3rem",
                color: "white",
              },
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              // change label color
              "& .MuiFormLabel-root": {
                color: "white",
              },
              // change label color on focus
              "& .Mui-focused": {
                color: onPrimary,
              },
              "color": "white",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Projects;
