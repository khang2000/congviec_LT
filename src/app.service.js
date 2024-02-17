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
