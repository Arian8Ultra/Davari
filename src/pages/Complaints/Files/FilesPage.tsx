import React from "react";
import { useParams } from "react-router-dom";

const FilePage = () => {
    const {complaintId} = useParams(); 

  return <div>FilePage</div>;
};

export default FilePage;
