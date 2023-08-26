import { DeleteOutline, DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { Box, Button, Collapse, IconButton } from "@mui/material";
import React from "react";
import {
  Red,
  RedLight,
  primary,
  primaryLightTransparent,
} from "../../theme/color";
import { useMutation } from "@apollo/client";
import {
  DELETE_COMPLAINT_FORM,
  DELETE_COMPLAINT_RESPONSE_FORM,
} from "../../GraphQL/Form/Mutations";

interface FormCardProps {
  id: number;
  title: string;
  description: string;
  type: "complaint" | "response";
}
const FormCard = (props: FormCardProps) => {
  const [open, setOpen] = React.useState(false);
  const [deleteComplaint] = useMutation(DELETE_COMPLAINT_FORM, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log(data);
      alert("فرم مورد نظر حذف شد");
      window.location.reload();
    },
    onError(error) {
      console.log(error);
    },
  });

  const [deleteResponse] = useMutation(
    DELETE_COMPLAINT_RESPONSE_FORM,
    {
      variables: {
        id: props.id,
      },
      onCompleted(data) {
        console.log(data);
        alert("فرم مورد نظر حذف شد");
        window.location.reload();
      },
      onError(error) {
        console.log(error);
      },
    }
  );
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderTop: "none",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: '5px',
        fontSize: "1.2rem",
        color: primary,
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          padding: "0.5rem 1rem",
          width: "100%",
          gridColumn: {
            xs: "span 5",
            lg: "span 3",
          },
        }}
        onClick={() => setOpen(!open)}
      >
        عنوان: {props.title}
      </Box>
      <Box
        sx={{
          padding: "0.5rem 1rem",
          width: "100%",
          display:'flex',
          gap:'5px',
          justifyContent:'flex-end',
          alignItems:'center',
          gridColumn: {
            xs: "span 5",
            lg: "span 2",
          },
        }}
      >
        <Button
          sx={{
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "5px",
            background: Red,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'12px',
            "&:hover": {
              background: RedLight,
              color: Red,
              // outline:`2px ${Red} solid`
            },
          }}
          onClick={() => {
            const agree = confirm("آیا ا حذف این فرم مطمئن هستید؟");

            if (agree) {
              switch (props.type) {
                case "complaint":
                  void deleteComplaint();
                  break;
                case "response":
                  void deleteResponse();
                  break;
              }
            }
          }}
        >
            حذف
          <DeleteOutlineRounded sx={{
            height:'17px'
          }} />
        </Button>
        <Button
          sx={{
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "5px",
            background: primary,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'12px',
            "&:hover": {
              background: primaryLightTransparent,
              color: primary,
              // outline:`2px ${Red} solid`
            },
          }}
          onClick={() => {
            const agree = confirm("آیا ا حذف این فرم مطمئن هستید؟");

            if (agree) {
              switch (props.type) {
                case "complaint":
                  void deleteComplaint();
                  break;
                case "response":
                  void deleteResponse();
                  break;
              }
            }
          }}
        >
            ویرایش
          <EditOutlined sx={{
            height:'17px'
          }} />
        </Button>
      </Box>
      <Collapse
        in={open}
        sx={{
          width: "100%",
          //   marginBlock:open ? '0.5rem' : 0,
          transition: "all ease-in-out 0.3s",
          borderRadius: "10px 10px 0 0",
          background: primaryLightTransparent,
          gridColumn: "span 5",
        }}
        onClick={() => setOpen(!open)}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "1rem",
            fontSize: "1rem",
            color: "black",
          }}
        >
          توضیحات: {props.description}
        </Box>
      </Collapse>
    </Box>
  );
};

export default FormCard;
