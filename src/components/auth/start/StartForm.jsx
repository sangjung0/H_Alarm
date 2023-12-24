import Logo from "../../../commons/Logo";
import AuthNav from "./AuthNav";
import "../../../styles/auth/StartForm.scss";
const StartForm = () => {
  return (
    <div className="start-form">
      <div className="start-logo">
        <Logo />
      </div>
      <span className="start-title">Get the fxxk up</span>
      <AuthNav />
    </div>
  );
};

export default StartForm;
