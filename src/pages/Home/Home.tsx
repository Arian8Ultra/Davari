import useLayoutStore from "../../Context/LayoutStore"
import { Titles } from "../../static/Titles"

const Home = () => {
  const setPageTitle = useLayoutStore(state => state.setPageTitle)
  setPageTitle(Titles.home)
  return (
    <div>Home</div>
  )
}

export default Home