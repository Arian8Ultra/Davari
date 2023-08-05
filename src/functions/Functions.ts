export const convertRoleToPersian = (role: string) => {
    switch (role) {
        case "SUPER_ADMIN":
            return "مدیر کل";
        case "ADMIN":
            return "مدیر";
        case "EDITOR":
            return "ویرایشگر";
        case "NORMAL":
            return "کاربر";
        default:
            return "نامشخص";
    }
}