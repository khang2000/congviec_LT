// app.service.js
const apiUrl = "https://g.lifetek.vn:203/api/files/single";
const customerApiUrl = "https://g.lifetek.vn:220/api/customers";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjI2NjBhYzFjOGM4MTMwNmYxODQ5NTIwIiwiaWF0IjoxNzA2NTgzMjI5LCJleHAiOjE3MTg1ODMyMjl9.pZS9oGDy3ftrN9-fWWP8JVnG7cHfibHOKtw3UgaFMDI";
const uploadImage = (image, onSuccess, onError) => {
  const formData = new FormData();
  formData.append("file", image);

  fetch(apiUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
};

const addCustomer = (data, onSuccess, onError) => {
  fetch(customerApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      onSuccess(responseData);
    })
    .catch((error) => {
      onError(error);
    });
};

export { uploadImage, addCustomer };
