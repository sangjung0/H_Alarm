import { Link } from "react-router-dom";
import '../../../styles/auth/AuthNav.scss'
const AuthNav = () => {
  return (
    <div className="auth-nav-container">
      <Link to="login" className="login-nav">
        로그인
      </Link>
      <Link to="register" className="register-nav">
        회원가입
      </Link>
    </div>
  );
};

export default AuthNav;
