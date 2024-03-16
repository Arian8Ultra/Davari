import { Box, Card } from "@mui/material";
import useLayoutStore from "../../Context/LayoutStore";
import InfoCard from "../../components/Home/Info/InfoCard";
import { Titles } from "../../static/Titles";
import PeopleCard from "../../components/Home/People/PeopleCard";
import HomeComplaintsList from "../../components/Home/Complaints/HomeComplaintsList";
import { Yellow, YellowLight, primary } from "../../theme/color";
import roadMapImage from "../../assets/RoadMap.png";
import Samaneh from "../../assets/Samaneh.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components

const Home = () => {
  const setPageTitle = useLayoutStore((state) => state.setPageTitle);
  setPageTitle(Titles.home);
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(12,1fr)"}
      gridAutoRows={"40dvh 40dvh"}
      gap={2}
      height={"100%"}
      overflow={"hidden"}
      justifyContent={"center"}
      alignItems={"center"}
      boxSizing={'content-box'}
    >
      <Box
        sx={{
          gridColumn: {
            xs: "span 12",
            md: "span 6",
            lg: "span 2",
          },
          gridRow: "span 2",
          height: "100%",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Pagination, Autoplay]}
          // style={{
          //   height: "100%",
          // }}
          style={
            {
              height: "100%",
              "--swiper-pagination-color": "#FFF",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "3px",
            } as React.CSSProperties
          }
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          // navigation={true}
        >
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                background: "rgba(218,227,243,1)",
                borderRadius: "1rem",
                padding: "0rem",
                boxSizing: "border-box",
              }}
            >
              <InfoCard
                data={[
                  {
                    title: "ثبت درخواست داوری:",
                    description:
                      "•	بدینوسیله به اطلاع کلیه کاربران دستگاه‌های اجرایی می‌رساند؛                    ازین پس رسیدگی به پرونده‌های پروژه‌های عمرانی (قرارداد پیمانکاری دولتی)  شورای عالی فنی صرفاً از طریق سامانه هوشمند شورای عالی فنی، قابل انجام خواهد بود",
                    date: "1/4/1400",
                  },
                ]}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                background: "rgba(218,227,243,1)",
                borderRadius: "1rem",
                padding: "0rem",
                boxSizing: "border-box",
              }}
            >
              <InfoCard
                // columns={{
                //   xs: "span 12",
                //   md: "span 6",
                //   lg: "span 3",
                // }}
                topColor={YellowLight}
                backgrounColor={Yellow}
                data={[
                  {
                    title: "پرداخت هزینه کانون کارشناسان :",
                    description:
                      "•	به اطلاع کلیه کاربران سامانه هوشمند داوری می‌رساند، جهت پرداخت هزینه کانون کارشناسان رسمی دادگستری تنها 10 روز کاری فرصت دارند.        لازم به ذکر است که ادامه مراحل داوری، منوط به پرداخت مبلغ فوق بوده و در صورت تاخیر، مسئولیت تطویل زمان با آن خواهان خواهد بود. ",
                    date: "1/4/1400",
                  },
                ]}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        sx={{
          gridColumn: {
            xs: "span 12",
            md: "span 12",
            lg: "span 7",
          },
          gridRow: "span 2",
          height: "100%",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation, Pagination, Autoplay]}
          // style={{
          //   height: "100%",
          // }}
          style={
            {
              height: "100%",
              "--swiper-pagination-color": "#FFF",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "3px",
            } as React.CSSProperties
          }
          autoplay={{
            delay: 8000,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          // navigation={true}
        >
          {/* <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                background: "rgba(218,227,243,1)",
                borderRadius: "1rem",
                padding: "2rem",
                boxSizing: "border-box",
              }}
            >
              <img
                src={roadMapImage}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </SwiperSlide> */}
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                background: "rgb(240, 244, 195)",
                borderRadius: "1rem",
                padding: "2rem",
                boxSizing: "border-box",
              }}
            >
              <img
                src={Samaneh}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      {/* <Card
        sx={{
          width: "100%",
          height: "100%",
          gridColumn: {
            xs: "span 12",
            md: "span 6",
            lg: "span 8",
          },
          gridRow: "span 2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          background: "rgba(218,227,243,1)",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        <img
          src={roadMapImage}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Card> */}
      {/* <InfoCard
        columns={{
          xs: "span 12",
          md: "span 6",
          lg: "span 3",
        }}
        data={[
          {
            title: "تستی",
            description:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
            date: "1/4/1400",
          },
        ]}
      /> */}
      {/* <PeopleCard
        columns={{
          xs: "span 12",
          md: "span 6",
          lg: "span 5",
        }}
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
      /> */}
      <HomeComplaintsList
        columns={{
          xs: "span 12",
          md: "span 6",
          lg: "10/span 3",
        }}
      />
    </Box>
  );
};

export default Home;
