import axios from "axios";
import { SERVER_IP } from "../../constants/api";

/**
 * auth API 요청 Interface
 * @param {String} url 통신 URI
 * @param {String} data 입력 데이터
 * @param {String} params 쿼리 데이터
 * @returns 응답 객체
 */
const authAPIInterface = async (url, data = null, params = null) => {
  try {
    const res = await axios.post(`${SERVER_IP}${url}`, data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log(res);
    return res.data;
  } catch (e) {
    console.error("emergency : ", e);
  }
};

const requestLogin = async (data) => {
  const res = await authAPIInterface("/login", data);
  return res;
};

const requestRegister = async (data) => {
  const res = await authAPIInterface("/register", data);
  return res;
};

const emailVerify = async (data) => {
  const res = await authAPIInterface("/email-verify", data);
  return res;
};

const phoneNumberVerify = async (data) => {
  const res = await authAPIInterface("/phone-number-verify", data);
  return res;
};

export { requestLogin, requestRegister, emailVerify, phoneNumberVerify };
