/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from "@mui/material";
import { VscArrowCircleRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { primary } from "../theme/color";

const BackButton = (props: { steps?: number; to?: string }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      color="primary"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "1rem",
        borderRadius: "50px",
        marginBlock: "0.5rem",
        "&:hover": {
          color: "white",
          background: primary,
        },
      }}
      onClick={() => {
        props.to
          ? navigate(
              // @ts-ignore
              props.to ? props.to : props.steps ? props.steps : -1
            )
          : window.history.back();
      }}
    >
      <VscArrowCircleRight />
      بازگشت
    </Button>
  );
};

export default BackButton;
