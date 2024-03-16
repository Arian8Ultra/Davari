import { Alert, AlertTitle, Collapse } from "@mui/material";
import React, { useEffect } from "react";
import { useAlertStore } from "../../Context/AlertStore";
interface Props {
  time?: number;
}
const SAlert = ({ time }: Props) => {
  const {
    alertOpen,
    alertType,
    alertMessage,
    setAlertOpen,
    setAlertMessage,
    setAlertType,
  } = useAlertStore();

  const Title = () => {
    switch (alertType) {
      case "success":
        return "موفقیت";
      case "error":
        return "خطا";
      case "info":
        return "اطلاعات";
      case "warning":
        return "هشدار";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (alertOpen) {
      setTimeout(() => {
        setAlertOpen(false);
        setAlertType("success");
        setAlertMessage("");
      }, time || 5000);
    }
  }, [alertOpen]);

  return (
    <Collapse
      in={alertOpen}
      sx={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 2000,
      }}
    >
      <Alert
        severity={alertType}
        onClose={() => {
          useAlertStore.getState().setAlertOpen(false);
        }}
      >
        <AlertTitle>{Title()}</AlertTitle>
        {alertMessage}
      </Alert>
    </Collapse>
  );
};

export default SAlert;
