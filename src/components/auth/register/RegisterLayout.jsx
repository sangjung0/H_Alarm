import { Link } from "react-router-dom";
import "../../../styles/auth/RegisterLayout.scss";
const RegisterLayout = () => {
  return (
    <div className="register-layout-container">
      <Link className="register-back-btn" to="/">
        &lt;
      </Link>
      <span className="register-title">회원가입</span>
    </div>
  );
};

export default RegisterLayout;
