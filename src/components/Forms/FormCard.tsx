import { Box, Collapse } from '@mui/material';
import React from 'react'
import { primary } from '../../theme/color';

interface FormCardProps {
    id: number;
    title: string;
    description: string;
}
const FormCard = (
    props: FormCardProps
) => {
    const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{
        border: '1px solid #ccc',
        borderTop: 'none',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        padding: '0.5rem 1rem',
        // borderRadius: '5px',
        fontSize: '1.2rem',
        color:primary,
        userSelect: 'none',
        cursor: 'pointer',
    }}
    onClick={() => setOpen(!open)}
    >
        عنوان: {props.title}
        <Collapse in={open}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                fontSize: '1rem',
                color: 'black'
            }}>
               توضیحات: {props.description}
            </Box>
        </Collapse>
    </Box>
  )
}

export default FormCard