const apiUrl = "https://g.lifetek.vn:203/api/files/single";
const customerApiUrl = "https://g.lifetek.vn:220/api/customers";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjI2NjBhYzFjOGM4MTMwNmYxODQ5NTIwIiwiaWF0IjoxNzA2NTgzMjI5LCJleHAiOjE3MTg1ODMyMjl9.pZS9oGDy3ftrN9-fWWP8JVnG7cHfibHOKtw3UgaFMDI";
const newData = {
  type: 1,
  kanbanStatus: "62c63d566b24ef5278427ef0",
  others: {},
  callback: false,
  facebook: "",
  code: "KH1706603392670",
  name: "A",
  lastName: "Nguy?n Van",
  nickName: "NVA",
  phoneNumber: "09422135487",
  email: "",
  gender: "male",
  birthDay: "2024-01-30",
  provincial: null,
  website: "Website A",
  fax: "020321321321",
  idetityCardNumber: "876543",
  passportNumber: "sdfghjkl",
  bank: "nganhang3",
  bankAccountNumber: "0987654342",
  taxCode: "",
  isTax: false,
  address: "H� N?i",
  certifiedNoTaxNumber: "",
  position: "",
  businessRegistrationNumber: "",
  managerEmployee: null,
  viewableEmployees: [],
  note: "",
  avatar: "https://g.lifetek.vn:203/api/files/65b8b3fdbca66b6de2f44c0b",
  avatarURL: "blob:http://localhost:2002/c3b68d93-c333-47e8-8bc8-f3e520f3c70f",
  detailInfo: {
    typeCustomer: {
      typeOfCustomer: "c1",
      group: "",
      branches: "",
      career: [],
      productType: [],
      contactWays: "",
      areas: [],
      introducedWay: "",
      introPerson: "",
      phoneIntroPerson: "",
      introducedNote: "",
      setAttribute: {},
    },
    represent: {
      name: "",
      phoneNumber: "",
      gender: "male",
      birthDay: "30/01/2024",
      email: "",
      position: "",
      note: "",
      localPersonInfo: [],
    },
    options: {
      isTaxTitle: false,
      taxTitle: [
        {
          name: "bac",
          percent: 10,
        },
      ],
    },
  },
};
// const deepCloneNewData = _.cloneDeep(newData);

export { apiUrl, customerApiUrl, token, newData };
