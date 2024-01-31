import React from "react";
import { useState, useRef, useEffect } from "react";
import user_avatar from "../src/images/noinfor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";
const User = () => {
  const [image, setImage] = useState();
  const inputRef = useRef(null);
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(URL.createObjectURL(image));
    };
  }, [image]);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  const [inpVal, setInpVal] = useState({
    name: "",
    nickname: "",
    phoneNumber: "",
    birthDay: "",
    code: "",
    lastName: "",
    address: "",
    gender: "",
    provincial: "",
    website: "",
    idetityCardNumber: "",
    passportNumber: "",
    bankAccountNumber: "",
  });
  const formData = new FormData();
  formData.append("file", image);
  const Upload = (e) => {
    e.preventDefault();

    fetch(`https://g.lifetek.vn:203/api/files/single`, {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        alert(data.message);
      })
      .catch((error) => console.log(error.message));
  };
  const getData = (e) => {
    const { value, name } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    // const { name, nickname, phoneNumber, birthDay } = inpVal;
    // if (name === "") {
    //   alert("fill your name");
    // } else if (nickname === "") {
    //   alert("fill your nickname");
    // } else if (phoneNumber === "") {
    //   alert("fill your phoneNumber");
    // } else if (birthDay === "") {
    //   alert("fill your birthDay");
    // } else {
    // const data = { name, nickname, phoneNumber, birthDay, };
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
      avatarURL:
        "blob:http://localhost:2002/c3b68d93-c333-47e8-8bc8-f3e520f3c70f",
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

    newData.name = inpVal.name;
    newData.nickname = inpVal.nickname;
    newData.phoneNumber = inpVal.phoneNumber;
    newData.birthDay = inpVal.birthDay;
    newData.lastName = inpVal.lastName;
    newData.address = inpVal.address;
    newData.gender = inpVal.gender;
    newData.provincial = inpVal.provincial;
    newData.website = inpVal.website;
    newData.code = inpVal.code;
    newData.passportNumber = inpVal.passportNumber;
    newData.bankAccountNumber = inpVal.bankAccountNumber;
    newData.idetityCardNumber = inpVal.idetityCardNumber;
    fetch("https://g.lifetek.vn:220/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjI2NjBhYzFjOGM4MTMwNmYxODQ5NTIwIiwiaWF0IjoxNzA2NTgzMjI5LCJleHAiOjE3MTg1ODMyMjl9.pZS9oGDy3ftrN9-fWWP8JVnG7cHfibHOKtw3UgaFMDI`,
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        alert(data.message);
      })
      .catch((error) => console.log(error.message));
    // }
  };
  return (
    <div className="body-ct">
      <div className="left">
        <form>
          <div>
            <p className="ttkh">
              <FontAwesomeIcon icon={faPen} /> Thông tin khách hàng{" "}
              <i>Các trường có dấu * là cần nhập</i>
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              MÃ KHÁCH HÀNG
            </label>
            <input
              type="text"
              className="form-control"
              id="code"
              name="code"
              onChange={getData}
              placeholder="KH12345678"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              TÊN KHÁCH HÀNG *
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              HỌ
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nickname" className="form-label">
              BIỆT DANH *
            </label>
            <input
              type="text"
              className="form-control"
              id="nickname"
              name="nickname"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              SỐ ĐIỆN THOẠI *
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              onChange={getData}
            />
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              ĐỊA CHỈ
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={getData}
            />
          </div>{" "}
          <div className="mb-3">
            <label className="form-label " htmlFor="gender">
              GIỚI TÍNH
            </label>
            <select
              className="form-control form-select"
              name="gender"
              id="gender"
              onChange={getData}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="birthDay" className="form-label">
              NGÀY SINH *
            </label>
            <input
              type="date"
              className="form-control"
              id="birthDay"
              name="birthDay"
              onChange={getData}
            />
          </div>{" "}
          <div className="mb-3">
            <label htmlFor="provincial" className="form-label">
              KHU VỰC
            </label>
            <input
              type="email"
              className="form-control"
              id="provincial"
              name="provincial"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              WEBSITE
            </label>
            <input
              type="email"
              className="form-control"
              id="website"
              name="website"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="idetityCardNumber" className="form-label">
              CMND
            </label>
            <input
              type="email"
              className="form-control"
              id="idetityCardNumber"
              name="idetityCardNumber"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passportNumber" className="form-label">
              HỘ CHIẾU
            </label>
            <input
              type="text"
              className="form-control"
              id="passportNumber"
              name="passportNumber"
              onChange={getData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bankAccountNumber" className="form-label">
              SỐ TÀI KHOẢN NGÂN HÀNG
            </label>
            <input
              type="text"
              className="form-control"
              id="bankAccountNumber"
              name="bankAccountNumber"
              onChange={getData}
            />
          </div>
          <button type="submit" onClick={addData} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <form className="right" onSubmit={Upload}>
        <div>
          <p className="ttkh">
            <FontAwesomeIcon icon={faUser} fontSize="15px" /> Chọn ảnh đại diện
          </p>
        </div>
        <div onClick={handleImageClick}>
          {image ? (
            <img src={URL.createObjectURL(image)} />
          ) : (
            <img src={user_avatar} />
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          ></input>
        </div>
        <button className="btn-upload" type="submit">
          Thêm ảnh đại diện
        </button>
      </form>
    </div>
  );
};

export default User;
