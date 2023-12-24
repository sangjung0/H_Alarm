import { useState } from "react";
import { Form } from "react-router-dom";
import "../../../styles/auth/LoginForm.scss";
const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <Form method="post">
      <div className="login-form" >
        <div className="input-wrapper id-input">
          <input
            name="id-form"
            className="id-form"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디"
          />
        </div>
        <div className="input-wrapper pw-input">
          <input
            name="pw-form"
            className="pw-form"
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호"
          />
        </div>

        <button type="submit" className="login-btn">
          확인
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;
