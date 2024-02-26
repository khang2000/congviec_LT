/**
 * Hàm kiểm tra và trả về thông báo lỗi nếu giá trị của một trường không hợp lệ.
 * @param {string} fieldName - Tên trường cần kiểm tra.
 * @param {string} value - Giá trị của trường cần kiểm tra.
 * @returns {string} - Thông báo lỗi nếu có, ngược lại trả về chuỗi rỗng.
 */
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

/**
 * Validate a form based on the provided input values.
 * @param {Object} inpVal - Các giá trị đầu vào cần được xác thực
 * @returns {Object} - trả về một object chứa lỗi xác thực cho từng trường
 */
const validateForm = (inpVal) => {
  let valid = true;
  const newErrors = {};

  Object.keys(inpVal).forEach((fieldName) => {
    const value = inpVal[fieldName];
    const errorMessage = validateField(fieldName, value);
    newErrors[fieldName] = errorMessage;
    if (errorMessage) {
      valid = false;
    }
  });

  return { valid, errors: newErrors };
};

export { validateField, validateForm };
