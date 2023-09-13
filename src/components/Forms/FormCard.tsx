import {
  DeleteOutline,
  DeleteOutlineRounded,
  EditOutlined,
  ViewAgenda,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Green,
  GreenLight,
  Red,
  RedLight,
  primary,
  primaryLightTransparent,
  primaryLighter,
} from "../../theme/color";
import { useMutation } from "@apollo/client";
import {
  DELETE_COMPLAINT_FORM,
  DELETE_COMPLAINT_RESPONSE_FORM,
} from "../../GraphQL/Form/Mutations";
import { useNavigate } from "react-router-dom";

interface FormCardProps {
  id: number;
  title: string;
  description: string;
  type: "complaint" | "response";
}
const FormCard = (props: FormCardProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [deleteComplaint] = useMutation(DELETE_COMPLAINT_FORM, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log(data);
      // alert("فرم مورد نظر حذف شد");
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
        gridTemplateColumns: "repeat(10,1fr)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: '5px',
        fontSize: "1.2rem",
        color: primary,
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          padding: "0.5rem 1rem",
          width: "100%",
          textAlign: "center",
          borderRight: "1px solid #ccc",
          gridColumn: {
            xs: "span 1",
            lg: "span 1",
          },
        }}
      >
        <Typography
          variant="body1"
          textAlign={{
            xs: "center",
            lg: "center",
          }}
        >
          {props.id}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0.5rem 1rem",
          width: "100%",
          borderRight: "1px solid #ccc",
          cursor: "pointer",
          transition: "all ease-in-out 0.3s",
          background: open ? primaryLighter : "white",
          gridColumn: {
            xs: "span 6",
            md: "span 5",
            lg: "span 5",
          },
          "&:hover": {
            color: primary,
            borderRadius: "15px 15px 0 0",
            background: primaryLighter,
          },
        }}
        onClick={() => setOpen(!open)}
      >
        <Typography
          variant="body1"
          textAlign={{
            xs: "center",
            lg: "start",
          }}
          fontSize={{
            xs: "0.8rem",
            md: "0.9rem",
            lg: "1rem",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0.25rem 0.5rem",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          justifyContent: {
            xs: "center",
            lg: "center",
          },
          alignItems: "center",
          gridColumn: {
            xs: "span 3",
            md: "span 4",
            lg: "span 4",
          },
        }}
      >
        <Button
          sx={{
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "5px",
            background: Green,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: {
              xs: "0.8rem",
              md: "0.6rem",
              lg: "0.8rem",
            },
            "&:hover": {
              background: GreenLight,
              color: Green,
              // outline:`2px ${Red} solid`
            },
          }}
          onClick={() => {
            navigate(`viewForm/${props.id}/${props.type}`);
          }}
        >
          مشاهده
          <ViewAgenda
            sx={{
              height: "17px",
            }}
          />
        </Button>
        <Button
          sx={{
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "5px",
            background: primary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: {
              xs: "0.8rem",
              md: "0.6rem",
              lg: "0.8rem",
            },
            "&:hover": {
              background: primaryLightTransparent,
              color: primary,
              // outline:`2px ${Red} solid`
            },
          }}
          onClick={() => {
            navigate(`editForm/${props.id}/${props.type}`);
          }}
        >
          ویرایش
          <EditOutlined
            sx={{
              height: "17px",
            }}
          />
        </Button>
        <Button
          sx={{
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "5px",
            background: Red,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: {
              xs: "0.8rem",
              md: "0.6rem",
              lg: "0.8rem",
            },
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
          <DeleteOutlineRounded
            sx={{
              height: "17px",
            }}
          />
        </Button>
      </Box>
      <Collapse
        in={open}
        sx={{
          width: "100%",
          //   marginBlock:open ? '0.5rem' : 0,
          transition: "all ease-in-out 0.3s",
          // borderRadius: "10px 10px 0 0",
          gridColumn: "span 5",
          cursor: "pointer",
          background: primaryLighter,
          "&:hover": {
            color: primary,
          },
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
          {/* توضیحات:  */}
          <Typography variant="caption">
            {props.description}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FormCard;
