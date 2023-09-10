/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import BackButton from "../../../../components/BackButton";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Green, GreenLight } from "../../../../theme/color";
import { VscAdd } from "react-icons/vsc";

const NewAddForm = () => {
    const { formId, fromType } = useParams<{
        formId: string;
        fromType: string;
      }>();

      console.log(formId, fromType);
      const [table, setTable] = React.useState([0]);
      const [lastRow, setLastRow] = React.useState(1);

  return (
    <React.Fragment>
      <BackButton steps={-2} />
      <div className="ruler">
        {[...Array(12)].map((_item, index) => {
          return (
            <div
              key={index}
              className="ruler_item"
              style={{ gridColumn: index + 1 }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
        <div className="main_grid">
        {table[0] >= 0 && (
          <IconButton
            sx={{
              gridRow: table.length + 1,
              gridColumn: `0/span 1`,
              height: "max-content",
              width: "max-content",
              padding: "1rem",
              color: "white",
              // aspectRatio: "1/1",
              backgroundColor: Green,
              "&:hover": {
                backgroundColor: GreenLight,
                color: Green,
              },
            }}
            onClick={() => {
              setLastRow(lastRow + 1);
            }}
          >
            <VscAdd />
          </IconButton>
        )}
        </div>
    </React.Fragment>
  );
};

export default NewAddForm;
