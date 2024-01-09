import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ComplaintFileCard from "../../../components/Complaints/ComplaintFileCard";
import { GetContractFilesQueryDocument } from "../../../gql/graphql";
import BackButton from "../../../components/BackButton";

const FilePage = () => {
  const { complaintId } = useParams();

  const { data: files } = useQuery(GetContractFilesQueryDocument, {
    variables: {
      id: complaintId ? parseInt(complaintId) : 0,
    },
    onCompleted(data) {
      console.log("files", data);
    },
  });

  return (
    <>
    <BackButton />
    
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(3,1fr)"}
        gap={4}
      >
        {files?.complaintFile_getComplaintFiles.result?.items?.map(
          (item) => (
            <ComplaintFileCard
              title={item.title}
              complaintId={item.complaintId}
              description={item.description}
              id={item.id}
              key={item.id}
              fileName={item.fileGallery?.name}
            />
          )
        )}
      </Box>
    </>
  );
};

export default FilePage;
