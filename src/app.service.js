// app.service.js
// const apiUrl = "https://g.lifetek.vn:203/api/files/single";
// const customerApiUrl = "https://g.lifetek.vn:220/api/customers";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjI2NjBhYzFjOGM4MTMwNmYxODQ5NTIwIiwiaWF0IjoxNzA2NTgzMjI5LCJleHAiOjE3MTg1ODMyMjl9.pZS9oGDy3ftrN9-fWWP8JVnG7cHfibHOKtw3UgaFMDI";
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
    alert(error.message);
  }
};

export { uploadImage, addCustomer };
