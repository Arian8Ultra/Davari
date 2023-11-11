/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MutationOptions, QueryFunctionOptions, useLazyQuery, useQuery } from "@apollo/client";
import { DocumentNode, TypedQueryDocumentNode } from "graphql";

export const errors: Record<string, ErrorType> = {
  IncorrectPassword: {
    code: 51,
    name: "IncorrectPassword",
    fa: "رمز عبور اشتباه است",
  },
  NewPasswordDoesNotMatch: {
    code: 52,
    name: "NewPasswordDoesNotMatch",
    fa: "رمز عبور جدید با تکرار آن مطابقت ندارد",
  },
  PasswordMismatch: {
    code: 53,
    name: "PasswordMismatch",
    fa: "رمز عبور اشتباه است",
  },
  InvalidEmail: {
    code: 54,
    name: "InvalidEmail",
    fa: "ایمیل نامعتبر",
  },
  InvalidToken: {
    code: 55,
    name: "InvalidToken",
    fa: "توکن نامعتبر",
  },
  PasswordRequiresDigit: {
    code: 56,
    name: "PasswordRequiresDigit",
    fa: "رمز عبور باید شامل عدد باشد",
  },
  PasswordRequiresLower: {
    code: 57,
    name: "PasswordRequiresLower",
    fa: "رمز عبور باید شامل حروف کوچک باشد",
  },
  PasswordRequiresNonAlphanumeric: {
    code: 58,
    name: "PasswordRequiresNonAlphanumeric",
    fa: "رمز عبور باید شامل حروف و عدد باشد",
  },
  PasswordRequiresUniqueChars: {
    code: 59,
    name: "PasswordRequiresUniqueChars",
    fa: "رمز عبور باید شامل کاراکترهای منحصر به فرد باشد",
  },
  PasswordRequiresUpper: {
    code: 60,
    name: "PasswordRequiresUpper",
    fa: "رمز عبور باید شامل حروف بزرگ باشد",
  },
  PasswordTooShort: {
    code: 61,
    name: "PasswordTooShort",
    fa: "رمز عبور باید حداقل ۶ کاراکتر باشد",
  },
  RecoveryCodeRedemptionFailed: {
    code: 62,
    name: "RecoveryCodeRedemptionFailed",
    fa: "کد بازیابی اشتباه است",
  },
  PhoneConfirmationFailed: {
    code: 63,
    name: "PhoneConfirmationFailed",
    fa: "تایید شماره تلفن اشتباه است",
  },

  Failed: { code: 101, name: "Failed", fa: "خطا" },
  CreationFailed: {
    code: 102,
    name: "CreationFailed",
    fa: "خطا در ایجاد",
  },
  UpdateFailed: {
    code: 103,
    name: "UpdateFailed",
    fa: "خطا در بروزرسانی",
  },
  DeleteFailed: { code: 104, name: "DeleteFailed", fa: "خطا در حذف" },
  Could_Not_Map_Data: {
    code: 105,
    name: "Could_Not_Map_Data",
    fa: "خطا",
  },
  NotFound: { code: 106, name: "NotFound", fa: "پیدا نشد" },
  NotEnoughData: {
    code: 107,
    name: "NotEnoughData",
    fa: "اطلاعات کافی نیست",
  },
  InvalidId: { code: 108, name: "InvalidId", fa: "آی دی نامعتبر" },
  AuthenticationFailed: {
    code: 109,
    name: "AuthenticationFailed",
    fa: "احراز هویت ناموفق",
  },
  UserNotAllowed: {
    code: 110,
    name: "UserNotAllowed",
    fa: "کاربر مجاز نیست",
  },
  AlreadyExist: {
    code: 111,
    name: "AlreadyExist",
    fa: "قبلا ثبت شده",
  },
  UserNotFound: {
    code: 112,
    name: "UserNotFound",
    fa: "کاربر پیدا نشد",
  },
  FileIsExecutable: {
    code: 113,
    name: "FileIsExecutable",
    fa: "فایل قابل اجرا نیست",
  },
  FileIsTooLarge: {
    code: 114,
    name: "FileIsTooLarge",
    fa: "فایل بزرگ است",
  },
  TitleRequired: {
    code: 115,
    name: "TitleRequired",
    fa: "عنوان الزامی است",
  },
  FileNameRequired: {
    code: 116,
    name: "FileNameRequired",
    fa: "نام فایل الزامی است",
  },
  FileNotFound: {
    code: 117,
    name: "FileNotFound",
    fa: "فایل پیدا نشد",
  },
  FileUrlRequired: {
    code: 118,
    name: "FileUrlRequired",
    fa: "آدرس فایل الزامی است",
  },
  UserIdRequired: {
    code: 119,
    name: "UserIdRequired",
    fa: "آی دی کاربر الزامی است",
  },
  ContractIdRequired: {
    code: 120,
    name: "ContractIdRequired",
    fa: "آی دی قرارداد الزامی است",
  },
  ContractorIdRequired: {
    code: 121,
    name: "ContractorIdRequired",
    fa: "آی دی پیمانکار الزامی است",
  },
  OrganizationIdRequired: {
    code: 122,
    name: "OrganizationIdRequired",
    fa: "شناسه سازمان الزامی است",
  },
  ContractNumberRequired: {
    code: 123,
    name: "ContractNumberRequired",
    fa: "شماره قرارداد الزامی است",
  },
  IsExecutiveRequired: {
    code: 124,
    name: "IsExecutiveRequired",
    fa: "وضعیت اجرایی بودن الزامی است",
  },
  ParentIdRequired: {
    code: 125,
    name: "ParentIdRequired",
    fa: "آی دی پدر الزامی است",
  },
  SenderRequired: {
    code: 127,
    name: "SenderRequired",
    fa: "فرستنده الزامی است",
  },
  ReceiverRequired: {
    code: 128,
    name: "ReceiverRequired",
    fa: "گیرنده الزامی است",
  },
  NationalCodeNotValid: {
    code: 129,
    name: "NationalCodeNotValid",
    fa: "کد ملی نامعتبر است",
  },
  FilledByRequired: {
    code: 130,
    name: "FilledByRequired",
    fa: "پر کننده الزامی است",
  },
  FirstConditionRequired: {
    code: 131,
    name: "FirstConditionRequired",
    fa: "شرط اول الزامی است",
  },
  SecondConditionRequired: {
    code: 132,
    name: "SecondConditionRequired",
    fa: "شرط دوم الزامی است",
  },
  ThirdConditionRequired: {
    code: 133,
    name: "ThirdConditionRequired",
    fa: "شرط سوم الزامی است",
  },
  FourthConditionRequired: {
    code: 134,
    name: "FourthConditionRequired",
    fa: "شرط چهارم الزامی است",
  },
  ProjectNameRequired: {
    code: 135,
    name: "ProjectNameRequired",
    fa: "نام پروژه الزامی است",
  },
  ProjectNumberRequired: {
    code: 136,
    name: "ProjectNumberRequired",
    fa: "شماره پروژه الزامی است",
  },
  HasReadAgreementRequired: {
    code: 137,
    name: "HasReadAgreementRequired",
    fa: "موافقت با قرارداد الزامی است",
  },
  ComplaintIdRequired: {
    code: 138,
    name: "ComplaintIdRequired",
    fa: "شناسه شکایت الزامی است",
  },
  SuggestedAmountRequired: {
    code: 139,
    name: "SuggestedAmountRequired",
    fa: "مبلغ پیشنهادی الزامی است",
  },
  ContentRequired: {
    code: 140,
    name: "ContentRequired",
    fa: "محتوا الزامی است",
  },
  NoteTypeRequired: {
    code: 141,
    name: "NoteTypeRequired",
    fa: "نوع یادداشت الزامی است",
  },
  FileIdRequired: {
    code: 142,
    name: "FileIdRequired",
    fa: "شناسه فایل الزامی است",
  },
  DepartmentTypeRequired: {
    code: 143,
    name: "DepartmentTypeRequired",
    fa: "نوع دپارتمان الزامی است",
  },
};

export const QueryWrapper = (
  query: DocumentNode,
  queryName: string,
  variables?: any,
  options?: QueryFunctionOptions<any, any>
) => {
  const { data, loading, error,refetch } = useQuery(query, {
    variables,
    ...options,
    onCompleted(data) {
      console.log(data);
      const status = data[queryName].status;
      if (status.code != 1) {
        console.log(errors[status.value].fa);
        if (status.code == 44) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/";
        }
        throw new Error(errors[status.value].fa);
      }
    },
  });

  const result = { data: data ? data[queryName].result : null, loading, error ,refetch};

  return result;
};


type ErrorType = {
  code: number;
  name: string;
  fa: string;
};

// const errors = {
//   IncorrectPassword: { code: 51, name: "IncorrectPassword" },
//   NewPasswordDoesNotMatch: {
//     code: 52,
//     name: "NewPasswordDoesNotMatch",
//     fa: "رمز عبور جدید با تکرار آن مطابقت ندارد",
//   },
//   PasswordMismatch: {
//     code: 53,
//     name: "PasswordMismatch",
//     fa: "رمز عبور اشتباه است",
//   },
//   InvalidEmail: {
//     code: 54,
//     name: "InvalidEmail",
//     fa: "ایمیل نامعتبر",
//   },
//   InvalidToken: {
//     code: 55,
//     name: "InvalidToken",
//     fa: "توکن نامعتبر",
//   },
//   PasswordRequiresDigit: {
//     code: 56,
//     name: "PasswordRequiresDigit",
//     fa: "رمز عبور باید شامل عدد باشد",
//   },
//   PasswordRequiresLower: {
//     code: 57,
//     name: "PasswordRequiresLower",
//     fa: "رمز عبور باید شامل حروف کوچک باشد",
//   },
//   PasswordRequiresNonAlphanumeric: {
//     code: 58,
//     name: "PasswordRequiresNonAlphanumeric",
//     fa: "رمز عبور باید شامل حروف و عدد باشد",
//   },
//   PasswordRequiresUniqueChars: {
//     code: 59,
//     name: "PasswordRequiresUniqueChars",
//     fa: "رمز عبور باید شامل کاراکترهای منحصر به فرد باشد",
//   },
//   PasswordRequiresUpper: {
//     code: 60,
//     name: "PasswordRequiresUpper",
//     fa: "رمز عبور باید شامل حروف بزرگ باشد",
//   },
//   PasswordTooShort: {
//     code: 61,
//     name: "PasswordTooShort",
//     fa: "رمز عبور باید حداقل ۶ کاراکتر باشد",
//   },
//   RecoveryCodeRedemptionFailed: {
//     code: 62,
//     name: "RecoveryCodeRedemptionFailed",
//     fa: "کد بازیابی اشتباه است",
//   },
//   PhoneConfirmationFailed: {
//     code: 63,
//     name: "PhoneConfirmationFailed",
//     fa: "تایید شماره تلفن اشتباه است",
//   },

//   Failed: { code: 101, name: "Failed", fa: "خطا" },
//   CreationFailed: {
//     code: 102,
//     name: "CreationFailed",
//     fa: "خطا در ایجاد",
//   },
//   UpdateFailed: {
//     code: 103,
//     name: "UpdateFailed",
//     fa: "خطا در بروزرسانی",
//   },
//   DeleteFailed: { code: 104, name: "DeleteFailed", fa: "خطا در حذف" },
//   Could_Not_Map_Data: {
//     code: 105,
//     name: "Could_Not_Map_Data",
//     fa: "خطا",
//   },
//   NotFound: { code: 106, name: "NotFound", fa: "پیدا نشد" },
//   NotEnoughData: {
//     code: 107,
//     name: "NotEnoughData",
//     fa: "اطلاعات کافی نیست",
//   },
//   InvalidId: { code: 108, name: "InvalidId", fa: "آی دی نامعتبر" },
//   AuthenticationFailed: {
//     code: 109,
//     name: "AuthenticationFailed",
//     fa: "احراز هویت ناموفق",
//   },
//   UserNotAllowed: {
//     code: 110,
//     name: "UserNotAllowed",
//     fa: "کاربر مجاز نیست",
//   },
//   AlreadyExist: {
//     code: 111,
//     name: "AlreadyExist",
//     fa: "قبلا ثبت شده",
//   },
//   UserNotFound: {
//     code: 112,
//     name: "UserNotFound",
//     fa: "کاربر پیدا نشد",
//   },
//   FileIsExecutable: {
//     code: 113,
//     name: "FileIsExecutable",
//     fa: "فایل قابل اجرا نیست",
//   },
//   FileIsTooLarge: {
//     code: 114,
//     name: "FileIsTooLarge",
//     fa: "فایل بزرگ است",
//   },
//   TitleRequired: {
//     code: 115,
//     name: "TitleRequired",
//     fa: "عنوان الزامی است",
//   },
//   FileNameRequired: {
//     code: 116,
//     name: "FileNameRequired",
//     fa: "نام فایل الزامی است",
//   },
//   FileNotFound: {
//     code: 117,
//     name: "FileNotFound",
//     fa: "فایل پیدا نشد",
//   },
//   FileUrlRequired: {
//     code: 118,
//     name: "FileUrlRequired",
//     fa: "آدرس فایل الزامی است",
//   },
//   UserIdRequired: {
//     code: 119,
//     name: "UserIdRequired",
//     fa: "آی دی کاربر الزامی است",
//   },
//   ContractIdRequired: {
//     code: 120,
//     name: "ContractIdRequired",
//     fa: "آی دی قرارداد الزامی است",
//   },
//   ContractorIdRequired: {
//     code: 121,
//     name: "ContractorIdRequired",
//     fa: "آی دی پیمانکار الزامی است",
//   },
//   OrganizationIdRequired: {
//     code: 122,
//     name: "OrganizationIdRequired",
//     fa: "شناسه سازمان الزامی است",
//   },
//   ContractNumberRequired: {
//     code: 123,
//     name: "ContractNumberRequired",
//     fa: "شماره قرارداد الزامی است",
//   },
//   IsExecutiveRequired: {
//     code: 124,
//     name: "IsExecutiveRequired",
//     fa: "وضعیت اجرایی بودن الزامی است",
//   },
//   ParentIdRequired: {
//     code: 125,
//     name: "ParentIdRequired",
//     fa: "آی دی پدر الزامی است",
//   },
//   SenderRequired: {
//     code: 127,
//     name: "SenderRequired",
//     fa: "فرستنده الزامی است",
//   },
//   ReceiverRequired: {
//     code: 128,
//     name: "ReceiverRequired",
//     fa: "گیرنده الزامی است",
//   },
//   NationalCodeNotValid: {
//     code: 129,
//     name: "NationalCodeNotValid",
//     fa: "کد ملی نامعتبر است",
//   },
//   FilledByRequired: {
//     code: 130,
//     name: "FilledByRequired",
//     fa: "پر کننده الزامی است",
//   },
//   FirstConditionRequired: {
//     code: 131,
//     name: "FirstConditionRequired",
//     fa: "شرط اول الزامی است",
//   },
//   SecondConditionRequired: {
//     code: 132,
//     name: "SecondConditionRequired",
//     fa: "شرط دوم الزامی است",
//   },
//   ThirdConditionRequired: {
//     code: 133,
//     name: "ThirdConditionRequired",
//     fa: "شرط سوم الزامی است",
//   },
//   FourthConditionRequired: {
//     code: 134,
//     name: "FourthConditionRequired",
//     fa: "شرط چهارم الزامی است",
//   },
//   ProjectNameRequired: {
//     code: 135,
//     name: "ProjectNameRequired",
//     fa: "نام پروژه الزامی است",
//   },
//   ProjectNumberRequired: {
//     code: 136,
//     name: "ProjectNumberRequired",
//     fa: "شماره پروژه الزامی است",
//   },
//   HasReadAgreementRequired: {
//     code: 137,
//     name: "HasReadAgreementRequired",
//     fa: "موافقت با قرارداد الزامی است",
//   },
//   ComplaintIdRequired: {
//     code: 138,
//     name: "ComplaintIdRequired",
//     fa: "شناسه شکایت الزامی است",
//   },
//   SuggestedAmountRequired: {
//     code: 139,
//     name: "SuggestedAmountRequired",
//     fa: "مبلغ پیشنهادی الزامی است",
//   },
//   ContentRequired: {
//     code: 140,
//     name: "ContentRequired",
//     fa: "محتوا الزامی است",
//   },
//   NoteTypeRequired: {
//     code: 141,
//     name: "NoteTypeRequired",
//     fa: "نوع یادداشت الزامی است",
//   },
//   FileIdRequired: {
//     code: 142,
//     name: "FileIdRequired",
//     fa: "شناسه فایل الزامی است",
//   },
//   DepartmentTypeRequired: {
//     code: 143,
//     name: "DepartmentTypeRequired",
//     fa: "نوع دپارتمان الزامی است",
//   },
// };
