import { useState } from "react";
import { Form } from "react-router-dom";
import "../../../styles/auth/RegisterForm.scss";
import { emailVerify, phoneNumberVerify } from "../../../services/auth/auth";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [emailVerifyCode, setEmailVerifyCode] = useState("");
  const [phoneVerifyCode, setPhoneVerifyCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const requestEmailVerify = async (data) => {
    const res = await emailVerify(data);
    console.log(res);
  };
  const requestPhoneNumberVerify = async (data) => {
    const res = await phoneNumberVerify(data);
    console.log(res);
  };

  return (
    <Form method="post">
      <div className="input-container">
        <div className="email-container">
          <input
            className="email-form"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="이메일"
          />
          <button
            className="email-verify-request-btn"
            type="button"
            onClick={requestEmailVerify}
          >
            인증번호 발송
          </button>
          <input
            className="email-verify-form"
            type="text"
            value={emailVerifyCode}
            onChange={(e) => {
              setEmailVerifyCode(e.target.value);
            }}
            placeholder="인증번호 입력"
          />
          <button
            className="email-verify-btn"
            type="button"
            onClick={requestPhoneNumberVerify}
          >
            인증번호 확인
          </button>
        </div>

        <div className="phone-number-container">
          <input
            className="phone-number-form"
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="전화번호"
          />
          <button className="phone-number-verify-request-btn" type="button">
            인증번호 발송
          </button>
          <input
            className="phone-number-verify-form"
            type="text"
            value={phoneVerifyCode}
            onChange={(e) => {
              setPhoneVerifyCode(e.target.value);
            }}
            placeholder="인증번호 입력"
          />
          <button className="phone-number-verify-btn" type="button">
            인증번호 확인
          </button>
        </div>

        <div className="pw-container">
          <input
            className="pw-form"
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호"
          />
          <input
            className="pw-check-form"
            type="password"
            value={pwCheck}
            onChange={(e) => {
              setPwCheck(e.target.value);
            }}
            placeholder="비밀번호 재입력"
          />
        </div>

        <button type="submit" className="register-btn">
          확인
        </button>
      </div>
    </Form>
  );
};

export default RegisterForm;
