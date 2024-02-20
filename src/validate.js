const validateField = (fieldName, value) => {
  switch (fieldName) {
    case "name":
      return value.trim() ? "" : "Vui lòng nhập tên đăng nhập";

    case "nickname":
      return value.trim() ? "" : "Vui lòng nhập biệt danh";

    case "phoneNumber":
      return value.trim()
        ? /^\d+$/.test(value)
          ? ""
          : "Sđt không hợp lệ"
        : "Vui lòng nhập SĐT";

    case "birthDay":
      return value.trim() ? "" : "Vui lòng nhập ngày sinh";

    case "code":
      return value.trim() ? "" : "Vui lòng nhập mã khách hàng";

    case "lastName":
      return value.trim() ? "" : "Vui lòng nhập họ";

    case "address":
      return value.trim() ? "" : "Vui lòng nhập địa chỉ";

    case "provincial":
      return value.trim() ? "" : "Vui lòng nhập tỉnh";

    case "website":
      return value.trim() ? "" : "Vui lòng nhập website";

    case "idetityCardNumber":
      return value.trim()
        ? /^\d+$/.test(value)
          ? ""
          : "CMND không hợp lệ, phải là số"
        : "Vui lòng nhập CMND";

    case "passportNumber":
      return value.trim() ? "" : "Vui lòng nhập hộ chiếu";

    case "bankAccountNumber":
      return value.trim()
        ? /^\d+$/.test(value)
          ? ""
          : "Tài khoản ngân hàng không hợp lệ, phải là số"
        : "Vui lòng nhập tài khoản ngân hàng";
    case "abc":
      return value.trim() ? "" : "Vui lòng nhập abc";
    default:
      return "";
  }
};

export { validateField };
