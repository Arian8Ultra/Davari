/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ReactNode } from "react";

export const convertRoleToPersian = (role: string) => {
  switch (role) {
    case "SUPER_ADMIN":
      return "مدیر کل";
    case "ADMIN":
      return "مدیر";
    case "EDITOR":
      return "ویرایشگر";
    case "SENIOR_USER":
      return "کاربر ارشد";
    case "EXPERT":
      return "کارشناس";
    case "NORMAL":
      return "کاربر";
    default:
      return role;
  }
};

export function convertToPersianDigits(
  str: string | number | ReactNode | Date | any | unknown | undefined
) {
  if (typeof str === "number") {
    str = str.toString();
  }
  if (typeof str === "undefined") return str;

  if (str instanceof Date)
    return new Date(str).toLocaleDateString("fa-IR");

  if (str instanceof Error) return str;

  if (str instanceof ArrayBuffer) return str;

  if (str instanceof Function) return str;

  if (str instanceof WeakMap) str = str.toString();

  if (str instanceof WeakSet) str = str.toString();

  if (str instanceof ArrayBuffer) str = str.toString();

  if (str instanceof Boolean) str = str.toString();

  if (str instanceof Number) str = str.toString();

  if (str instanceof String) str = str.toString();

  if (str instanceof Symbol) str = str.toString();

  if (str instanceof BigInt) str = str.toString();

  if (str instanceof DataView) str = str.toString();

  if (str instanceof Float32Array) str = str.toString();

  if (str instanceof Float64Array) str = str.toString();

  if (str instanceof Int8Array) str = str.toString();

  if (str instanceof Int16Array) str = str.toString();

  if (typeof str !== "string") return String(str);

  return str.replace(/\d/g, function (digit) {
    return String.fromCharCode(digit.charCodeAt(0) + 1728);
  });
}


export function convertToEnglishDigits(str: string) {
  return str.replace(/\u06F0/g, "0").replace(/\u06F1/g, "1");
}

