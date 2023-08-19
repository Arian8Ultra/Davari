import { Box, Button } from "@mui/material"
import React from "react"
import { BsDatabaseAdd } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { Green, GreenLight } from "../../../theme/color"
import useLayoutStore from "../../../Context/LayoutStore"

const FormManager = () => {
  const setPageTitle = useLayoutStore(state => state.setPageTitle)

  const navigate= useNavigate()
  return (
    <React.Fragment>
      {/* <div>FormManager</div> */}
      <Box sx={{
        width: '100%',
        display: 'flex',
      }}>
        <Button
          variant="contained"
          endIcon={<BsDatabaseAdd />}
          onClick={() => {
            setPageTitle("افزودن فرم جدید")
            navigate("addform")
          }}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: GreenLight,
              color:Green
            },
          }}
        >
          افزودن فرم جدید
        </Button>
      </Box>
    </React.Fragment>
  )
}

export default FormManager