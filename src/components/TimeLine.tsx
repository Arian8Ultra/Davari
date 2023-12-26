import { Box, BoxProps, Divider } from "@mui/material";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { ComplaintTimeLineStages } from "../static/TimeLineStages";
import { primary, primaryDark, secondary } from "../theme/color";

interface Props extends BoxProps {
  stage?: number;
}
const TimeLine = (props: Props) => {
  return (
    <Box
      display={{
        xs: "none",
        sm: "none",
        md: "grid",
        lg: "grid",
        xl: "grid",
      }}
      gridTemplateColumns={`1fr`}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      {...props}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={`repeat(${ComplaintTimeLineStages.length},1fr)`}
        justifyContent={"center"}
        alignItems={"center"}
        position={'relative'}
        {...props}
      >
        <Divider sx={{
            position:'absolute',
            width:"80%",
            transform: "translateY(-50%) translateX(-50%)",
            left: "50%",
        }}/>
        {ComplaintTimeLineStages.map((s) => (
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: "max-content",
              display: "flex",
              gap: 1,
              zIndex:100,
              justifySelf: "center",
              borderRadius: "3rem",
              border: `2px solid ${
                props.stage && props.stage > s.id
                  ? primary
                  : props.stage == s.id
                  ? primaryDark
                  : secondary
              }`,
              padding: 1,
              background:'white',
              color:
                props.stage && props.stage > s.id
                  ? primary
                  : props.stage == s.id
                  ? primaryDark
                  : secondary,
            }}
          >
            {props.stage && props.stage > s.id ? (
              <BsCheckCircleFill
                style={{ color: primary, fontSize: "3rem" }}
              />
            ) : (
              <BsCircle style={{ fontSize: "3rem" }} />
            )}
            {s.title}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TimeLine;
