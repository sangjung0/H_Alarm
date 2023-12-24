import LoginPage, { action as loginAction } from "../pages/auth/LoginPage";
import RegisterPage, {
  action as registerAction,
} from "../pages/auth/RegisterPage";
import StartPage from "../pages/auth/Startpage";

const auth = [
  {
    index: true,
    element: <StartPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
    action: loginAction,
  },
  {
    path: "register",
    element: <RegisterPage />,
    action: registerAction,
  },
];

export default auth;
