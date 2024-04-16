/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { PersonRounded } from "@mui/icons-material";
import { useUserStore } from "../../Context/UserStore";
import {
  convertRoleToPersian,
  convertToPersianDigits,
} from "../../functions/Functions";
import {
  useGetUserProileLazyQuery,
  useGetUserProileQuery,
} from "../../../generated-types";

const ProfilePage = () => {
  const { user } = useUserStore();
  const { data } = useGetUserProileQuery({
    variables: { nationalCode: user.nationalCode },
  });
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
        <h2>
          {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]?.name ||
            user.fullName}
        </h2>
      </div>
      <div className="text-16px flex gap-3 items-center ">
        <p>کد ملی:</p>
        <h3>{convertToPersianDigits(user.nationalCode)}</h3>
      </div>
      <div className="text-16px flex gap-3 items-center">
        <p>شماره تماس:</p>
        <h3>{convertToPersianDigits(user.phoneNumber)}</h3>
      </div>
      <div className="text-16px flex gap-3 items-center">
        <p>ایمیل:</p>
        <h3>{user.email}</h3>
      </div>
      {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
        ?.webAddress && (
        <div className="text-16px flex gap-3 items-center">
          <p>آدرس وبسایت:</p>
          <h3>
            {
              data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
                ?.webAddress
            }
          </h3>
        </div>
      )}
      {/* <div className="text-16px flex gap-3 items-center">
        <p>نقش:</p>
        <h3>{convertRoleToPersian(user.userRoles?.[0]?.roleType || "")}</h3>
      </div> */}
      {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
        ?.addressDesc && (
        <div className="text-16px flex gap-3 items-center col-span-2">
          <p className="whitespace-nowrap">آدرس پستی:</p>
          <h3 className="text-16px">
            {
              data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
                ?.addressDesc
            }
          </h3>
        </div>
      )}
      {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
        ?.postCode && (
        <div className="text-16px flex gap-3 items-center col-span-2">
          <p className="whitespace-nowrap">کد پستی:</p>
          <h3 className="text-16px">
            {convertToPersianDigits(
              data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
                ?.postCode
            )}
          </h3>
        </div>
      )}
      {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
        ?.issuanceDate && (
        <div className="text-16px flex gap-3 items-center">
          <p className="whitespace-nowrap">تاریخ تاسیس:</p>
          <h3 className="text-16px">
            {new Date(
              data?.companyProfile_getCompanyProfiles?.result?.items?.[0]?.issuanceDate
            ).toLocaleDateString("fa-IR")}
          </h3>
        </div>
      )}
      {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
        ?.registerDate && (
        <div className="text-16px flex gap-3 items-center">
          <p className="whitespace-nowrap">تاریخ ثبت:</p>
          <h3 className="text-16px">
            {new Date(
              data?.companyProfile_getCompanyProfiles?.result?.items?.[0]?.registerDate
            ).toLocaleDateString("fa-IR")}
          </h3>
        </div>
      )}
      {data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
        ?.registerNumber && (
        <div className="text-16px flex gap-3 items-center">
          <p className="whitespace-nowrap">شماره ثبت:</p>
          <h3 className="text-16px">
            {convertToPersianDigits(
              data?.companyProfile_getCompanyProfiles?.result?.items?.[0]
                ?.registerNumber
            )}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
