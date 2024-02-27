/**
 * `uploadImage` Upload ảnh
 * @async
 * @param { string} apiUrl - link url để lấy dữ liệu
 * @param {File} image - ảnh được tải lên
 * @returns {Promise<string>} - dữ liệu được trả về từ url
 * @see https://g.lifetek.vn:203/api/files/single/
 */
const uploadImage = async (apiUrl, image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * `addCustomer` Upload thông tin người dùng
 * @async
 * @param { string} customerApiUrl - link url để lấy dữ liệu
 * @param {string} token - Token được sử dụng để xác thực yêu cầu
 * @param {Object} data - Dữ liệu người dùng cần được thêm vào API
 * @returns {Promise<string>} - dữ liệu được trả về từ url
 * @see https://g.lifetek.vn:220/api/customers/
 */
const addCustomer = async (customerApiUrl, token, data) => {
  try {
    const response = await fetch(customerApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
/**
 * Hàm deepClone đối tượng
 * @param {object} obj - object cần deepClone
 * @returns {object} obj - đối tượng được deepClone
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
export { uploadImage, addCustomer, deepClone };
