import { redirect } from "react-router-dom";
import RegisterForm from "../../components/auth/register/RegisterForm";
import RegisterLayout from "../../components/auth/register/RegisterLayout";
import { requestRegister } from "../../services/auth/auth";

const RegisterPage = () => {
  return (
    <>
      <RegisterLayout />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const authForm = {
    emil: data.get("email-form"),
    phoneNumber: data.get("phone-number-form"),
    password: data.get("pw-form"),
  };

  const res = await requestRegister(authForm);

  if (res === 200) {
    window.alert("회원가입이 완료되었습니다.");
    return redirect("/home");
  }
};
