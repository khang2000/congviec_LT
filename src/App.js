import "./App.css";
import user_avatar from "../src/images/noinfor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import { addCustomer, uploadImage } from "./app.service";
import { newData } from "./constant";
function App() {
  const apiUrl = "https://g.lifetek.vn:203/api/files/single";
  const customerApiUrl = "https://g.lifetek.vn:220/api/customers";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjI2NjBhYzFjOGM4MTMwNmYxODQ5NTIwIiwiaWF0IjoxNzA2NTgzMjI5LCJleHAiOjE3MTg1ODMyMjl9.pZS9oGDy3ftrN9-fWWP8JVnG7cHfibHOKtw3UgaFMDI";
  const [image, setImage] = useState();
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
    console.log(URL.createObjectURL(image));
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

  const getData = (e) => {
    const { value, name } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = async (e) => {
    e.preventDefault();

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
    // newData.avatarURL = URL.createObjectURL(image);
    // /////
    ///CALL API USER
    try {
      const dataUser = await addCustomer(customerApiUrl, token, newData);
      console.log(dataUser);
      alert(dataUser.message);
    } catch (error) {
      console.error(error);
    }
    // addCustomer(customerApiUrl, token, newData);
    /////////
    /// CALL API IMAGE
    try {
      const data = await uploadImage(apiUrl, image);
      console.log(data);
      if (!data) {
        newData.avatar = "";
        newData.avatarURL = "";
      } else {
        newData.avatar = data.url;
        newData.avatarURL = URL.createObjectURL(image);
        console.log(newData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="body-ct">
      <form className="left">
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
      <div className="right">
        <div>
          <p className="ttkh">
            <FontAwesomeIcon icon={faUser} fontSize="15px" /> Chọn ảnh đại diện
          </p>
        </div>
        <div onClick={handleImageClick} className="right-child">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="" />
          ) : (
            <img src={user_avatar} alt="" />
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          ></input>
          <button className="btn-upload" type="submit">
            Thêm ảnh đại diện
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
