/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { BsEye, BsEyeSlash, BsPersonAdd } from "react-icons/bs";
import { VscOrganization } from "react-icons/vsc";
import { Calendar, CalendarProvider } from "zaman";
import { useUserStore } from "../../../Context/UserStore";
import { UserSignUp } from "../../../GraphQL/Users/Mutations";
import { GET_ALL_ORGANIZATION_USERS } from "../../../GraphQL/Users/Queries";
import UserList from "../../../components/Admin/UserManagement/UserList";
import NewModal from "../../../components/Modals";
import { Titles } from "../../../static/Titles";
import {
  Green,
  GreenLight,
  background,
  primary,
  secondary,
} from "../../../theme/color";
import { User } from "../../../static/Types";

const UserManagement = () => {
  const user = useUserStore((state) => state.user);
  const [addModal, setAddModal] = useState({
    open: false,
    confirmPassword: "",
    departmentId: 0,
    email: "",
    firstName: "",
    lastName: "",
    nationalCode: "",
    personnelCode: "",
    password: "",
    phoneNumber: "",
    userName: "",
    showPassword: false,
  });
  const [addPersonelToOrganzationModal, setAddPersonelToOrganzation] =
    useState({
      open: false,
      confirmPassword: undefined as string | undefined,
      parentID: null as string | null,
      email: undefined as string | undefined,
      firstName: undefined as string | undefined,
      lastName: undefined as string | undefined,
      nationalCode: undefined as string | undefined,
      password: undefined as string | undefined,
      phoneNumber: undefined as string | undefined,
      userName: undefined as string | undefined,
      birthDate: undefined as Date | undefined,
      showPassword: false,
      showCalendar: false,
      parentIsSet: false,
    });

  const [addOrganizationModal, setAddOrganizationModal] = useState({
    open: false,
    confirmPassword: undefined as string | undefined,
    password: undefined as string | undefined,
    phoneNumber: undefined as string | undefined,
    nationalCode: undefined as string | undefined,
    email: undefined as string | undefined,
    fullName: undefined as string | undefined,
    showPassword: false,
    userName: undefined as string | undefined,
  });

  const [userSignUp, { loading, error }] = useMutation(UserSignUp, {
    // variables: {
    //   fullName: addModal.firstName + " " + addModal.lastName,
    //   nationalCode: addModal.nationalCode,
    //   personnelCode: addModal.personnelCode,
    //   password: addModal.password,
    //   confirmPassword: addModal.confirmPassword,
    //   email: addModal.email,
    //   departmentId: addModal.departmentId,
    //   phoneNumber: addModal.phoneNumber,
    // },
    onCompleted(data) {
      console.log(data);
      alert("کاربر با موفقیت افزوده شد");
    },
    onError(error) {
      console.error(error);
      alert("مشکلی در افزودن کاربر به وجود آمده است");
    },
  });

  const { data: OrganizationsUsers } = useQuery(
    GET_ALL_ORGANIZATION_USERS,
    {
      onCompleted(data) {
        console.log(data);
      },
    }
  );

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingY={1}
        gap={1}
      >
        <Button
          variant="contained"
          endIcon={<BsPersonAdd />}
          href="/signUp"
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",

            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
        >
          افزودن کاربر
        </Button>
        {/* <Button
          variant="contained"
          endIcon={<BsPersonAdd />}
          onClick={() => [
            setAddPersonelToOrganzation({
              ...addPersonelToOrganzationModal,
              open: true,
              parentID: user.parentId ? user.parentId : "",
              parentIsSet: user.parentId ? true : false,
            }),
          ]}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            display:
              user.userType === "ORGANIZATION" ||
              user.userRoles?.find(
                (role) => role.roleType === "SENIOR_USER"
              )
                ? "flex"
                : "none",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
        >
          افزودن کارشناس
        </Button> */}
        <Button
          variant="contained"
          endIcon={<BsPersonAdd />}
          onClick={() => [
            setAddPersonelToOrganzation({
              ...addPersonelToOrganzationModal,
              open: true,
            }),
          ]}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            width: "max-content",
            display: user.userRoles?.find(
              (role) => role.roleType === "SUPER_ADMIN"
            )
              ? "flex"
              : "none",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
        >
          افزودن کاربر به دستگاه
        </Button>
        <Button
          variant="contained"
          endIcon={<VscOrganization />}
          onClick={() => [
            setAddOrganizationModal({
              ...addOrganizationModal,
              open: true,
            }),
          ]}
          sx={{
            borderRadius: 2,
            backgroundColor: Green,
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "1rem",
            boxShadow: "none",
            width: "max-content",
            display: user.userRoles?.find(
              (role) => role.roleType === "SUPER_ADMIN"
            )
              ? "flex"
              : "none",
            "&:hover": {
              backgroundColor: GreenLight,
              color: Green,
            },
          }}
        >
          افزودن دستگاه
        </Button>
      </Box>


      <UserList />

      <NewModal
        open={addOrganizationModal.open}
        onClose={() =>
          setAddOrganizationModal({
            ...addOrganizationModal,
            open: false,
          })
        }
        name={"افزودن دستگاه"}
        width={{
          xs: "90%",
          sm: "60%",
          md: "50%",
          lg: "40%",
        }}
        isCloseable={true}
        backgroundColor={background}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            lg: "repeat(2, 1fr)",
          }}
          gap={2}
          width={"100%"}
        >
          <TextField
            fullWidth
            label={"نام کاربری"}
            variant={"outlined"}
            autoComplete="Name"
            value={addOrganizationModal.userName}
            sx={{
              gridColumn: "span 2",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                userName: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"نام"}
            variant={"outlined"}
            autoComplete="Name"
            value={addOrganizationModal.fullName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                fullName: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"کد ملی"}
            variant={"outlined"}
            autoComplete="Name"
            value={addOrganizationModal.nationalCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                nationalCode: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"شماره موبایل"}
            variant={"outlined"}
            autoComplete="phoneNumber"
            value={addOrganizationModal.phoneNumber}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            type="number"
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                phoneNumber: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"ایمیل"}
            variant={"outlined"}
            autoComplete="email"
            value={addOrganizationModal.email}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                email: e.target.value,
              })
            }
          />

          <Divider sx={{ gridColumn: "span 2" }} />

          <TextField
            fullWidth
            label={"رمز عبور"}
            variant={"outlined"}
            value={addOrganizationModal.password}
            type={
              addOrganizationModal.showPassword ? "text" : "password"
            }
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setAddOrganizationModal({
                      ...addOrganizationModal,
                      showPassword:
                        !addOrganizationModal.showPassword,
                    })
                  }
                >
                  {addOrganizationModal.showPassword ? (
                    <BsEye />
                  ) : (
                    <BsEyeSlash />
                  )}
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                password: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"تکرار رمز عبور"}
            variant={"outlined"}
            value={addOrganizationModal.confirmPassword}
            type={
              addOrganizationModal.showPassword ? "text" : "password"
            }
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setAddOrganizationModal({
                      ...addOrganizationModal,
                      showPassword:
                        !addOrganizationModal.showPassword,
                    })
                  }
                >
                  {addOrganizationModal.showPassword ? (
                    <BsEye />
                  ) : (
                    <BsEyeSlash />
                  )}
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddOrganizationModal({
                ...addOrganizationModal,
                confirmPassword: e.target.value,
              })
            }
          />

          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: error ? red[500] : Green,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: "span 2",
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
            type="submit"
            onClick={() =>
              userSignUp({
                variables: {
                  fullName: addOrganizationModal.fullName
                    ? addOrganizationModal.fullName
                    : "",
                  nationalCode: addOrganizationModal.nationalCode
                    ? addOrganizationModal.nationalCode
                    : "",
                  password: addOrganizationModal.password
                    ? addOrganizationModal.password
                    : "",
                  confirmPassword:
                    addOrganizationModal.confirmPassword
                      ? addOrganizationModal.confirmPassword
                      : "",
                  phoneNumber: addOrganizationModal.phoneNumber
                    ? addOrganizationModal.phoneNumber
                    : "",
                  email: addOrganizationModal.email
                    ? addOrganizationModal.email
                    : "",
                  userType: "ORGANIZATION",
                  userName: addOrganizationModal.userName
                    ? addOrganizationModal.userName
                    : "",
                  birthDate: new Date(),
                },
              })
            }
          >
            {loading && "در حال افزودن..."}
            افزودن
          </Button>
        </Box>
      </NewModal>

      {/* 












       */}

      <NewModal
        open={addPersonelToOrganzationModal.open}
        onClose={() =>
          setAddPersonelToOrganzation({
            ...addPersonelToOrganzationModal,
            open: false,
          })
        }
        name={"افزودن کاربر به دستگاه"}
        width={{
          xs: "90%",
          sm: "60%",
          md: "50%",
          lg: "40%",
        }}
        isCloseable={true}
        backgroundColor={background}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            lg: "repeat(2, 1fr)",
          }}
          gap={2}
          width={"100%"}
        >
          <TextField
            fullWidth
            label={"نام دستگاه"}
            variant={"outlined"}
            autoComplete="firstName"
            value={
              addPersonelToOrganzationModal.parentIsSet
                ? user.parentId
                : addPersonelToOrganzationModal.parentID
            }
            sx={{
              gridColumn: "span 2",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                parentID:
                  OrganizationsUsers?.user_getUsers?.result?.items.find(
                    (item: User) => item.id === e.target.value
                  )?.id,
              });
            }}
            disabled={addPersonelToOrganzationModal.parentIsSet}
            select
          >
            {OrganizationsUsers?.user_getUsers?.result?.items.map(
              (item: User) => (
                <MenuItem key={item.id} value={item.id ?? undefined}>
                  {item.fullName}
                </MenuItem>
              )
            )}
          </TextField>
          <TextField
            fullWidth
            label={"نام کاربری"}
            variant={"outlined"}
            autoComplete="firstName"
            value={addPersonelToOrganzationModal.userName}
            sx={{
              gridColumn: "span 2",
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                userName: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"نام"}
            variant={"outlined"}
            autoComplete="firstName"
            value={addPersonelToOrganzationModal.firstName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                firstName: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"نام خانوادگی"}
            variant={"outlined"}
            autoComplete="lastName"
            value={addPersonelToOrganzationModal.lastName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                lastName: e.target.value,
              })
            }
          />
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              color: secondary,
              // change color of outline
              "& .MuiButton-outlined .MuiButton-outlined": {
                borderRadius: "0.5rem",
                borderColor: primary,
              },
            }}
            onClick={() =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                showCalendar: true,
              })
            }
          >
            تاریخ تولد
            {addPersonelToOrganzationModal.birthDate && (
              <Box
                component={"span"}
                sx={{
                  color: secondary,
                  fontSize: "0.8rem",
                  marginInline: 1,
                }}
              >
                {addPersonelToOrganzationModal.birthDate.toLocaleDateString(
                  "fa-IR"
                )}
              </Box>
            )}
          </Button>
          <Modal
            open={addPersonelToOrganzationModal.showCalendar}
            onClose={() =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                showCalendar: false,
              })
            }
          >
            <Box
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              width={"max-content"}
              height={"max-content"}
              display={"flex"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: background,
                transform: "translate(-50%, -50%)",
                flexDirection: "column",
                borderRadius: "0.5rem",
              }}
            >
              <CalendarProvider
                locale={"fa"}
                direction="rtl"
                accentColor={"#4c5760"}
              >
                <Calendar
                  defaultValue={
                    addPersonelToOrganzationModal.birthDate
                  }
                  onChange={(day) =>
                    setAddPersonelToOrganzation({
                      ...addPersonelToOrganzationModal,
                      birthDate: day,
                    })
                  }
                />
              </CalendarProvider>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 2,
                  backgroundColor: primary,
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "1rem",
                  boxShadow: "none",
                  margin: 2,
                  "&:hover": {
                    backgroundColor: GreenLight,
                    color: Green,
                  },
                }}
                onClick={() =>
                  setAddPersonelToOrganzation({
                    ...addPersonelToOrganzationModal,
                    showCalendar: false,
                  })
                }
              >
                تایید
              </Button>
            </Box>
          </Modal>
          <TextField
            fullWidth
            label={"کد ملی"}
            variant={"outlined"}
            autoComplete="lastName"
            type="number"
            value={addPersonelToOrganzationModal.nationalCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                nationalCode: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"شماره موبایل"}
            variant={"outlined"}
            autoComplete="phoneNumber"
            value={addPersonelToOrganzationModal.phoneNumber}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            type="number"
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                phoneNumber: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"ایمیل"}
            variant={"outlined"}
            autoComplete="email"
            value={addPersonelToOrganzationModal.email}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                email: e.target.value,
              })
            }
          />
          <Divider
            sx={{
              gridColumn: "span 2",
            }}
          />

          <TextField
            fullWidth
            label={"رمز عبور"}
            variant={"outlined"}
            value={addPersonelToOrganzationModal.password}
            type={
              addPersonelToOrganzationModal.showPassword
                ? "text"
                : "password"
            }
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setAddPersonelToOrganzation({
                      ...addPersonelToOrganzationModal,
                      showPassword:
                        !addPersonelToOrganzationModal.showPassword,
                    })
                  }
                >
                  {addPersonelToOrganzationModal.showPassword ? (
                    <BsEye />
                  ) : (
                    <BsEyeSlash />
                  )}
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                password: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"تکرار رمز عبور"}
            variant={"outlined"}
            value={addPersonelToOrganzationModal.confirmPassword}
            type={
              addPersonelToOrganzationModal.showPassword
                ? "text"
                : "password"
            }
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setAddPersonelToOrganzation({
                      ...addPersonelToOrganzationModal,
                      showPassword:
                        !addPersonelToOrganzationModal.showPassword,
                    })
                  }
                >
                  {addPersonelToOrganzationModal.showPassword ? (
                    <BsEye />
                  ) : (
                    <BsEyeSlash />
                  )}
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "0.5rem",
                },
            }}
            onChange={(e) =>
              setAddPersonelToOrganzation({
                ...addPersonelToOrganzationModal,
                confirmPassword: e.target.value,
              })
            }
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: error ? red[500] : Green,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: "span 2",
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
            type="submit"
            onClick={() =>
              userSignUp({
                variables: {
                  fullName:
                    addPersonelToOrganzationModal.firstName +
                    " " +
                    addPersonelToOrganzationModal.lastName,
                  nationalCode:
                    addPersonelToOrganzationModal.nationalCode,
                  password: addPersonelToOrganzationModal.password,
                  confirmPassword:
                    addPersonelToOrganzationModal.confirmPassword,
                  email: addPersonelToOrganzationModal.email,
                  phoneNumber: addModal.phoneNumber,
                  userName: addPersonelToOrganzationModal.userName,
                  userType: "INDIVIDUAL",
                  birthDate: addPersonelToOrganzationModal.birthDate,
                  parentId: addPersonelToOrganzationModal.parentID,
                },

                // $confirmPassword: String!
                // $email: String!
                // $fullName: String!
                // $nationalCode: String!
                // $password: String!
                // $phoneNumber: String!
                // $userName: String!
                // $birthDate: Date!
                // $userType : UserType!
              })
            }
          >
            {loading && "در حال افزودن..."}
            افزودن
          </Button>
        </Box>
      </NewModal>

      <NewModal
        open={addModal.open}
        onClose={() => setAddModal({ ...addModal, open: false })}
        name={Titles.usersCreate}
        width={{
          xs: "90%",
          sm: "60%",
          md: "40%",
          lg: "30%",
        }}
        isCloseable={true}
        backgroundColor={background}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            lg: "repeat(2, 1fr)",
          }}
          gap={2}
          width={"100%"}
        >
          <TextField
            fullWidth
            label={"نام"}
            variant={"outlined"}
            autoComplete="firstName"
            value={addModal.firstName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, firstName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"نام خانوادگی"}
            variant={"outlined"}
            autoComplete="lastName"
            value={addModal.lastName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, lastName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"نام کاربری"}
            variant={"outlined"}
            autoComplete="userName"
            value={addModal.userName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                userName: e.target.value,
              })
            }
          />
          <TextField
            fullWidth
            label={"کد ملی"}
            type="number"
            variant={"outlined"}
            autoComplete="nationalCode"
            value={addModal.nationalCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                nationalCode: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"کد پرسنلی"}
            type="number"
            variant={"outlined"}
            autoComplete="personnelCode"
            value={addModal.personnelCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                personnelCode: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"ایمیل"}
            variant={"outlined"}
            autoComplete="email"
            value={addModal.email}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"رمز عبور"}
            variant={"outlined"}
            autoComplete="password"
            value={addModal.password}
            type={addModal.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setAddModal({
                      ...addModal,
                      showPassword: !addModal.showPassword,
                    })
                  }
                >
                  {addModal.showPassword ? <BsEye /> : <BsEyeSlash />}
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({ ...addModal, password: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"تکرار رمز عبور"}
            variant={"outlined"}
            type="password"
            value={addModal.confirmPassword}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                confirmPassword: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"شماره تماس"}
            variant={"outlined"}
            type="phoneNumber"
            autoComplete="phoneNumber"
            value={addModal.phoneNumber}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                phoneNumber: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"دپارتمان"}
            variant={"outlined"}
            value={addModal.departmentId}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setAddModal({
                ...addModal,
                departmentId: parseInt(e.target.value),
              })
            }
            select
          ></TextField>

          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: error ? red[500] : Green,
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1rem",
              boxShadow: "none",
              gridColumn: {
                xs: "1/2",
                lg: "1/3",
              },
              "&:hover": {
                backgroundColor: GreenLight,
              },
            }}
            type="submit"
            onClick={() => userSignUp()}
          >
            {loading && "در حال افزودن..."}
            افزودن
          </Button>
        </Box>
      </NewModal>
    </>
  );
};

export default UserManagement;
