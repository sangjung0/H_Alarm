import { Link } from "react-router-dom";
import "../../../styles/auth/LoginLayout.scss";
const LoginLayout = () => {
  return (
    <div className="login-layout-container">
      <Link className="login-back-btn" to="/">&lt;</Link>
      <span className="login-title">로그인</span>
    </div>
  );
};

export default LoginLayout;
