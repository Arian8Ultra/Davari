import React from "react";
import { useGetUserLazyQuery, useGetUserQuery } from "../../../generated-types";
import { Button } from "@mui/material";
import { Add, PeopleAlt } from "@mui/icons-material";
import DCModal from "./DCModal";
interface Props {
  title: string;
  id: number;
  accuserId: string;
  accusedId: string;
}
const DCCard = ({ title, id, accuserId, accusedId }: Props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const { data: accuser } = useGetUserQuery({
    variables: {
      id: accuserId,
    },
  });

  const { data: accused } = useGetUserQuery({
    variables: {
      id: accusedId,
    },
  });
  return (
    <>
      <DCModal open={openModal} onClose={() => setOpenModal(false)} complaintId={id} />
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{accuser?.user_getUser?.result?.fullName}</td>
        <td>{accused?.user_getUser?.result?.fullName}</td>
        <td>
          <Button
            color="success"
            fullWidth
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setOpenModal(true)}
          >
            <PeopleAlt />
            تعیین کارشناس پرونده
          </Button>
        </td>
      </tr>
    </>
  );
};

export default DCCard;
