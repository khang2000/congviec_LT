import React, { useState, useRef } from "react";
import user_avatar from "../images/noinfor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";
import { addCustomer, uploadImage, deepClone } from "../app.service";
import { customerApiUrl, apiUrl, token, newData } from "../constant";
import { validateField, validateForm } from "../validate";
const MyForm = () => {
  const [image, setImage] = useState();
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
  const [errors, setErrors] = useState({});

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };
  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
    const errorMessage = validateField(name, value);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const addData = async (e) => {
    e.preventDefault();

    const { valid, errors } = validateForm(inpVal);
    if (valid) {
      const deepCloneNewData = deepClone(newData);

      deepCloneNewData.name = inpVal.name;
      deepCloneNewData.nickname = inpVal.nickname;
      deepCloneNewData.phoneNumber = inpVal.phoneNumber;
      deepCloneNewData.birthDay = inpVal.birthDay;
      deepCloneNewData.lastName = inpVal.lastName;
      deepCloneNewData.address = inpVal.address;
      deepCloneNewData.gender = inpVal.gender;
      deepCloneNewData.provincial = inpVal.provincial;
      deepCloneNewData.website = inpVal.website;
      deepCloneNewData.code = inpVal.code;
      deepCloneNewData.passportNumber = inpVal.passportNumber;
      deepCloneNewData.bankAccountNumber = inpVal.bankAccountNumber;
      deepCloneNewData.idetityCardNumber = inpVal.idetityCardNumber;

      //UPLOAD IMAGE
      if (image) {
        try {
          const data = await uploadImage(apiUrl, image);
          if (!data) {
            deepCloneNewData.avatar = "";
            deepCloneNewData.avatarURL = "";
          } else {
            deepCloneNewData.avatar = data.url;
            deepCloneNewData.avatarURL = URL.createObjectURL(image);
          }
        } catch (error) {
          console.error(error);
        }
      }
      //UPLOAD INFORMATION
      try {
        const response = await addCustomer(
          customerApiUrl,
          token,
          deepCloneNewData
        );
        console.log("API Response:", response);
      } catch (error) {
        console.error("Error calling addCustomer:", error);
      }
    } else {
      setErrors(errors);
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
            className={errors.code ? "form-control input" : "form-control"}
            type="text"
            id="code"
            name="code"
            onBlur={handleBlur}
            onChange={onChangeInput}
            placeholder="KH12345678"
          />
          {errors.code && <span>{errors.code}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            TÊN KHÁCH HÀNG *
          </label>
          <input
            type="text"
            className={errors.name ? "form-control input" : "form-control"}
            id="name"
            name="name"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            HỌ
          </label>
          <input
            type="text"
            className={errors.lastName ? "form-control input" : "form-control"}
            id="lastName"
            name="lastName"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">
            BIỆT DANH *
          </label>
          <input
            type="text"
            className={errors.nickname ? "form-control input" : "form-control"}
            id="nickname"
            name="nickname"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.nickname && <span>{errors.nickname}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            SỐ ĐIỆN THOẠI *
          </label>
          <input
            type="text"
            className={
              errors.phoneNumber ? "form-control input" : "form-control"
            }
            id="phoneNumber"
            name="phoneNumber"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            ĐỊA CHỈ
          </label>
          <input
            type="text"
            className={errors.address ? "form-control input" : "form-control"}
            id="address"
            name="address"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>{" "}
        <div className="mb-3">
          <label className="form-label " htmlFor="gender">
            GIỚI TÍNH
          </label>
          <select
            className="form-control form-select"
            name="gender"
            id="gender"
            onChange={onChangeInput}
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
            className={errors.birthDay ? "form-control input" : "form-control"}
            id="birthDay"
            name="birthDay"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.birthDay && <span>{errors.birthDay}</span>}
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="provincial" className="form-label">
            KHU VỰC
          </label>
          <input
            type="text"
            className={
              errors.provincial ? "form-control input" : "form-control"
            }
            id="provincial"
            name="provincial"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.provincial && <span>{errors.provincial}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="website" className="form-label">
            WEBSITE
          </label>
          <input
            type="text"
            className={errors.website ? "form-control input" : "form-control"}
            id="website"
            name="website"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.website && <span>{errors.website}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="idetityCardNumber" className="form-label">
            CMND
          </label>
          <input
            type="text"
            className={
              errors.idetityCardNumber ? "form-control input" : "form-control"
            }
            id="idetityCardNumber"
            name="idetityCardNumber"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.idetityCardNumber && <span>{errors.idetityCardNumber}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="passportNumber" className="form-label">
            HỘ CHIẾU
          </label>
          <input
            type="text"
            className={
              errors.passportNumber ? "form-control input" : "form-control"
            }
            id="passportNumber"
            name="passportNumber"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.passportNumber && <span>{errors.passportNumber}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="bankAccountNumber" className="form-label">
            SỐ TÀI KHOẢN NGÂN HÀNG
          </label>
          <input
            type="text"
            className={
              errors.bankAccountNumber ? "form-control input" : "form-control"
            }
            id="bankAccountNumber"
            name="bankAccountNumber"
            onBlur={handleBlur}
            onChange={onChangeInput}
          />
          {errors.bankAccountNumber && <span>{errors.bankAccountNumber}</span>}
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
};

export default MyForm;
