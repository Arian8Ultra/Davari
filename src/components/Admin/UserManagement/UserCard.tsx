/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useMutation, useQuery } from "@apollo/client";
import { Person2Outlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsFillCaretDownFill, BsKey } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import {
  ADD_USER_TO_ROLE,
  RoleType,
  UserDelete,
  UserUpdate,
} from "../../../GraphQL/Users/Mutations";
import { UserRole } from "../../../GraphQL/Users/Queries";
import { convertRoleToPersian } from "../../../functions/Functions";
import {
  Blue,
  BlueLight,
  Green,
  GreenLight,
  Red,
  RedLight,
  background,
  primary,
  primaryTransparent,
} from "../../../theme/color";
import NewModal from "../../Modals";
interface Props {
  fullName?: string;
  lastName?: string;
  personalCode?: string;
  department?: string;
  userName?: string;
  id: string | number;
  refetch: () => void;
  userRoles?: UserRole[];
  userType?: string;
}
const UserCard = (props: Props) => {
  // alijh state for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // alijh state for menuItem
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openAnchor = Boolean(anchorEl);
  const handleClickAnchor = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const [editModal, setEditModal] = useState({
    open: false,
    username: "",
    fullName: "",
    lastName: "",
    nationalCode: "",
  });

  const [roleModal, setRoleModal] = useState({
    open: false,
    roleType: "",
  });

  const [editUser] = useMutation(UserUpdate, {
    variables: {
      fullName: editModal.fullName,
      lastName: editModal.lastName,
      userName: editModal.username,
      nationalCode: editModal.nationalCode,
    },
    onCompleted(data) {
      console.log(data);
      alert("کاربر با موفقیت ویرایش شد");
      props.refetch();
    },
    onError(error) {
      console.error(error);
      alert("مشکلی در ویرایش کاربر به وجود آمده است");
    },
  });
  const [deleteUser] = useMutation(UserDelete, {
    variables: {
      id: props.id,
    },
    onCompleted(data) {
      console.log(data);
      alert("کاربر با موفقیت حذف شد");
      props.refetch();
    },
    onError(error) {
      console.log(error);
      alert("مشکلی در حذف کاربر به وجود آمده است");
    },
  });

  const [AddUserToRole] = useMutation(ADD_USER_TO_ROLE, {
    variables: {
      userId: props.id,
      roleType: roleModal.roleType,
    },
    onCompleted(data) {
      console.log(data);
      alert("کاربر با موفقیت به نقش اضافه شد");
      props.refetch();
    },
    onError(error) {
      console.log(error);
      alert("مشکلی در اضافه کردن کاربر به نقش به وجود آمده است");
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,1)",
        width: "100%",
        height: "100%",
        padding: 1.5,
        border: "1px solid rgba(100,100,100,0.2)",
        display: "grid",
        alignItems: "center",
        gap: 1,
        gridTemplateAreas:{
          xs: `"fullName department userName type" "operation operation operation"`,
          md: `"fullName department userName type" "operation operation operation"`,
          lg: `"fullName  department userName type operation"`,
          xl: `"fullName department userName type operation"`,
        },
        gridAutoColumns: "1fr",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.7)",
        },
      }}
    >
      <Typography
        gridArea={"fullName"}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
      >
        {props.fullName && props.fullName}
      </Typography>

      <Typography
        gridArea={"department"}
        display={{ xs: "none", md: "block" }}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
        // sx={{
        //   outline:'2px solid red'
        // }}
      >
        {props.department ? props.department : "ندارد"}
      </Typography>

      <Typography
        gridArea={"userName"}
        display={{ xs: "none", md: "block" }}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
        // sx={{
        //   outline:'2px solid red'
        // }}
      >
        {props.userName && props.userName}
      </Typography>
      <Typography
        gridArea={"type"}
        display={{ xs: "none", md: "block" }}
        textAlign={"center"}
        fontSize={{
          xs: 11,
          sm: 12,
          md: 14,
          lg: 16,
        }}
        // sx={{
        //   outline:'2px solid red'
        // }}
      >
        {props.userType && props.userType}
      </Typography>
      <Box
        gridArea={"operation"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // outline: "1px solid red",
          gap: 2,
          // width: "100%",
          // outline: "1px solid red",
        }}
      >
        <Button
          id="basic-button"
          aria-controls={openAnchor ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openAnchor ? "true" : undefined}
          onClick={handleClickAnchor}
          fullWidth
        >
          <BsFillCaretDownFill />
        </Button>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={openAnchor}
          onClose={handleCloseAnchor}
          sx={{
            "& .MuiMenu-paper": {
              borderRadius: "0.5rem",
              // border: `2px solid ${primary}`,
              width: anchorEl ? anchorEl.clientWidth : undefined,
            },
          }}
          MenuListProps={{
            sx: {
              borderRadius: "15px",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              handleCloseAnchor();
              setEditModal({
                open: true,
                username: props.userName ? props.userName : "",
                fullName: props.fullName ? props.fullName : "",
                lastName: props.lastName ? props.lastName : "",
                nationalCode: props.personalCode
                  ? props.personalCode
                  : "",
              });
            }}
            sx={{
              gap: 1,
              "&:hover": {
                background: grey[300],
              },
            }}
          >
            <Tooltip title={"ویرایش کاربر"}>
              <IconButton
                sx={{
                  // backgroundColor: Blue,
                  outline: `2px solid ${Blue}`,
                  color: Blue,
                  "&:hover": {
                    backgroundColor: BlueLight,
                  },
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.4rem",
                  },
                }}
              >
                <AiOutlineEdit />
              </IconButton>
            </Tooltip>
            <Typography>ویرایش کاربر</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleOpen();
              handleCloseAnchor();
            }}
            sx={{
              gap: 1,
              "&:hover": {
                background: grey[300],
              },
            }}
          >
            <Tooltip title={"دسترسی های کاربر"}>
              <IconButton
                sx={{
                  // backgroundColor: Blue,
                  outline: `2px solid ${grey[500]}`,
                  color: grey[500],
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.4rem",
                  },
                }}
              >
                <Person2Outlined />
              </IconButton>
            </Tooltip>
            <Typography>مشاهده دسترسی ها</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              const agree = confirm(
                `آیا از حذف کاربر '${props.fullName} ${props.lastName}' مطمئن هستید؟`
              );
              if (agree) {
                void deleteUser();
                handleCloseAnchor();
              }
            }}
            sx={{
              gap: 1,
              "&:hover": {
                background: grey[300],
              },
            }}
          >
            <Tooltip title={"حذف کاربر"}>
              <IconButton
                sx={{
                  // backgroundColor: Red,
                  outline: `2px solid ${Red}`,
                  color: Red,
                  "&:hover": {
                    backgroundColor: RedLight,
                  },
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.4rem",
                  },
                }}
              >
                <AiOutlineDelete />
              </IconButton>
            </Tooltip>
            <Typography>حذف کاربر</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseAnchor();
              setRoleModal({
                open: true,
                roleType: "",
              });
            }}
            sx={{
              gap: 1,
              "&:hover": {
                background: grey[300],
              },
            }}
          >
            <Tooltip title={"تغییر دسترسی ها"}>
              <IconButton
                sx={{
                  // backgroundColor: Green,
                  outline: `2px solid ${Green}`,
                  color: Green,
                  "&:hover": {
                    backgroundColor: GreenLight,
                  },
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.4rem",
                  },
                }}
              >
                <VscPreview />
              </IconButton>
            </Tooltip>
            <Typography>تغییر دسترسی ها</Typography>
          </MenuItem>
          <MenuItem
            onClick={handleCloseAnchor}
            sx={{
              gap: 1,
              "&:hover": {
                background: grey[300],
              },
            }}
          >
            <Tooltip title={"تغییر رمز عبور"}>
              <IconButton
                sx={{
                  // backgroundColor: primary,
                  outline: `2px solid ${primary}`,
                  color: primary,
                  "&:hover": {
                    backgroundColor: primaryTransparent,
                  },
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.4rem",
                  },
                }}
              >
                <BsKey />
              </IconButton>
            </Tooltip>
            <Typography>تغییر رمز عبور</Typography>
          </MenuItem>
        </Menu>
      </Box>

      <NewModal
        open={editModal.open}
        onClose={() => {
          setEditModal({
            open: false,
            username: "",
            fullName: "",
            lastName: "",
            nationalCode: "",
          });
        }}
        name="ویرایش کاربر"
        background={background}
        isCloseable={true}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          <TextField
            fullWidth
            label={"نام"}
            variant={"outlined"}
            value={editModal.fullName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setEditModal({
                ...editModal,
                fullName: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label={"نام خانوادگی"}
            variant={"outlined"}
            value={editModal.lastName}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setEditModal({ ...editModal, lastName: e.target.value })
            }
          />

          <TextField
            fullWidth
            label={"کد ملی"}
            variant={"outlined"}
            value={editModal.nationalCode}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderRadius: "15px",
                },
            }}
            onChange={(e) =>
              setEditModal({
                ...editModal,
                nationalCode: e.target.value,
              })
            }
          />

          <Button
            fullWidth
            variant={"contained"}
            sx={{
              backgroundColor: primary,
              color: "#fff",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: primaryTransparent,
              },
            }}
            onClick={() => {
              void editUser();
            }}
          >
            ویرایش
          </Button>
        </Box>
      </NewModal>
      <NewModal
        name="تغییر دسترسی ها"
        open={roleModal.open}
        onClose={() => {
          setRoleModal({
            open: false,
            roleType: "",
          });
        }}
        background={background}
        isCloseable={true}
      >
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2,1fr)",
            width: "100%",
          }}
        >
          <Select
            onChange={(e) =>
              setRoleModal({ ...roleModal, roleType: e.target.value })
            }
            value={roleModal.roleType}
            native
          >
            <option value={""}>انتخاب کنید</option>
            {RoleType.getValues().map((role) => (
              <option value={role.value}>
                {convertRoleToPersian(role.name)}
              </option>
            ))}
          </Select>

          <Button
            fullWidth
            variant={"contained"}
            sx={{
              backgroundColor: primary,
              color: "#fff",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: primaryTransparent,
              },
            }}
            onClick={() => {
              setRoleModal({ ...roleModal, open: false });
              void AddUserToRole();
            }}
          >
            افزودن دسترسی
          </Button>
        </Box>
      </NewModal>
      <NewModal
        open={open}
        onClose={handleClose}
        isCloseable
        background={background}
        name="دسترسی ها"
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {props.userRoles &&
              props.userRoles.map((role, index) => (
                <ListItem>
                  <Typography
                    key={index}
                    variant={"body2"}
                    textAlign={"center"}
                  >
                    {convertRoleToPersian(role.roleType)}
                  </Typography>
                </ListItem>
              ))}
          </ListItem>
        </Box>
      </NewModal>
      {/* <Collapse
        in={collapse}
        sx={{
          gridColumn: {
            sm: "1/3",
            lg: "1/7",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(1,1fr)",
              outline: `1px solid ${primary}`,
            }}
          >
            <Typography
              variant={"body1"}
              sx={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "center",
                backgroundColor: primaryGrey,
                color: "#fff",
              }}
            >
              دسترسی ها
            </Typography>
            {props.userRoles &&
              props.userRoles.map((role, index) => (
                <Typography
                  key={index}
                  variant={"body2"}
                  textAlign={"center"}
                >
                  {convertRoleToPersian(role.roleType)}
                </Typography>
              ))}
          </Box>
        </Box>
      </Collapse> */}
    </Box>
  );
};

export default UserCard;
