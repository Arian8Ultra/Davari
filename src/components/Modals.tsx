/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { CancelOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Red, RedLight, primaryLightTransparent } from "../theme/color";
import FaTypography from "./FaComponents/FaTypography";

interface NewModalProps {
  width?: string | number | object;
  color?: string;
  height?: string | number | object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  name?: string;
  title?: string;
  open: boolean;
  onClose?: Function;
  backgroundColor?: string;
  background?: string;
  isCloseable?: boolean;
  dividerColor?: string;
}

export default function NewModal(props: NewModalProps) {
  let {
    width,
    height,
    color,
    name,
    backgroundColor,
    background,
    isCloseable,
    dividerColor,
    ...rest
  } = props;
  name = props.name != null ? props.name : "عنوان";
  width = props.width != null ? props.width : "30vmax";
  backgroundColor =
    props.backgroundColor != null
      ? props.backgroundColor
      : primaryLightTransparent;
  isCloseable = props.isCloseable != null ? props.isCloseable : true;
  dividerColor =
    props.dividerColor != null ? props.dividerColor : "transparent";
  height = props.height != null ? props.height : "95vh";
  const handleClose = () => {
    if (props.isCloseable) props.onClose && props.onClose();
  };
  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width,
          maxHeight: height,
          overflow: "auto",
          bgcolor: backgroundColor,
          background: background,
          boxShadow: 24,
          borderRadius: "15px",
          backdropFilter: "blur(5px)",
          p: 4,
        }}
        {...rest}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width={isCloseable ? "100%" : "max-content"}
          >
            <FaTypography
              fontSize="25px"
              fontWeight="bold"
              color={color}
              textAlign={"center"}
            >
              {props.title != null ? props.title : name}
            </FaTypography>
            {isCloseable && (
              <IconButton
                onClick={handleClose}
                sx={{
                  color: color != null ? color : Red,
                  transition: "all 0.3s ease",
                  padding: 0,
                  "&:hover": {
                    background: color != null ? color : Red,
                    color: RedLight,
                  },
                }}
              >
                <CancelOutlined />
              </IconButton>
            )}
          </Stack>
        </Box>
        <Box
          width="100%"
          height="2px"
          bgcolor={dividerColor}
          my={"10px"}
          borderRadius={"20px"}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {props.children}
        </Box>
      </Box>
    </Modal>
  );
}
