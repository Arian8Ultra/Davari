import { Box } from "@mui/material";
import useLayoutStore from "../../Context/LayoutStore";
import InfoCard from "../../components/Home/Info/InfoCard";
import { Titles } from "../../static/Titles";
import PeopleCard from "../../components/Home/People/PeopleCard";

const Home = () => {
  const setPageTitle = useLayoutStore((state) => state.setPageTitle);
  setPageTitle(Titles.home);
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(12,1fr)"} gap={4}>
      <InfoCard
        columns="span 2"
        data={[
          {
            title: "تستی",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
            date: "1/4/1400",
          },
        ]}
      />
      <PeopleCard
        columns="span 6"
        people={[
          {
            id: 1,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 2,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 3,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
          {
            id: 4,
            firstName: "علی",
            lastName: "محمدی",
            nationalCode: "1234567890",
            email: "ali@gmail.com",
          },
        ]}
      />
    </Box>
  );
};

export default Home;
