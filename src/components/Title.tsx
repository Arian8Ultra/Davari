import { Box } from '@mui/material'
import { BsFillGridFill } from 'react-icons/bs'
import useLayoutStore from '../Context/LayoutStore'
import { SideBarMenu } from '../assets/static/SideBar'


interface Props {
  icon?: React.ReactNode
  title?: string
}
const Title = (props: Props) => {
    const pageTitle = useLayoutStore(state => state.pageTitle)
    const icon = SideBarMenu.find(item => item.to === window.location.pathname)?.icon || <BsFillGridFill />
  return (
    <Box
    sx={{
        width: '100%',
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 1,
        fontSize: '1.4rem',
        // color: primaryGrey,
    }}>
        {icon ? icon : <BsFillGridFill />}
        {props.title ? props.title : pageTitle && pageTitle}
        </Box>
  )
}

export default Title