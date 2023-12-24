import { redirect } from "react-router-dom";
import LoginForm from "../../components/auth/login/LoginForm";
import LoginLayout from "../../components/auth/login/LoginLayout";
import { requestLogin } from "../../services/auth/auth";

const LoginPage = () => {
  return (
    <div>
      <LoginLayout />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const authForm = {
    id: data.get("id-form"),
    password: data.get("pw-form"),
  };

  const res = await requestLogin(authForm);

  if (res === 200) {
    return redirect("/home");
  }
};
