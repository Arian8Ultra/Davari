import { PersonRounded } from "@mui/icons-material";
import { useUserStore } from "../../Context/UserStore";
import { convertRoleToPersian, convertToPersianDigits } from "../../functions/Functions";

const ProfilePage = () => {
  const { user } = useUserStore();
  return (
    <div
      className="grid grid-cols-2 w-4/6 rounded-2xl p-5 
      outline-1 bg-white-100 shadow-md 
      mx-auto relative
    "
    >
      <div
        className="absolute rounded-full 
      bg-secondary-500 w-20 aspect-square top-0 right-1/2 translate-x-1/2 
      -translate-y-1/2 flex justify-center items-center text-primary-500 text-xl"
      >
        <PersonRounded className="w-14 h-14" />
      </div>
      <div className="text-16px flex gap-3 items-center">
        <p>نام:</p>
        <h2>{user.fullName}</h2>
      </div>
      <div className="text-16px flex gap-3 items-center justify-end">
        <p>کد ملی:</p>
        <h3>{convertToPersianDigits(user.nationalCode)}</h3>
      </div>
      <div className="text-16px flex gap-3 items-center">
        <p>شماره تماس:</p>
        <h3>{convertToPersianDigits(user.phoneNumber)}</h3>
      </div>
      <div className="text-16px flex gap-3 items-center justify-end">
        <p>ایمیل:</p>
        <h3>{user.email}</h3>
      </div>
      <div className="text-16px flex gap-3 items-center">
        <p>نقش:</p>
        <h3>{convertRoleToPersian(user.userRoles?.[0]?.roleType || "")}</h3>
      </div>
    </div>
  );
};

export default ProfilePage;
