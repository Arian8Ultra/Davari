import { Box } from "@mui/material";
import useLayoutStore from "../../Context/LayoutStore";
import InfoCard from "../../components/Home/Info/InfoCard";
import { Titles } from "../../static/Titles";
import PeopleCard from "../../components/Home/People/PeopleCard";
import HomeComplaintsList from "../../components/Home/Complaints/HomeComplaintsList";

const Home = () => {
  const setPageTitle = useLayoutStore((state) => state.setPageTitle);
  setPageTitle(Titles.home);
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(12,1fr)"}
      gridAutoRows={"35dvh 35dvh"}
      gap={4}
      height={'100%'}
      overflow={'hidden'}
    >
      <InfoCard
        columns="span 3"
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
        columns="span 5"
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
      <HomeComplaintsList columns="9/span 4" rows="span 2" />
    </Box>
  );
};

export default Home;
