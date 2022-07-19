import Logo from '../components/Logo';
import LoginForm from '../containers/LoginForm';
import art from '../img/art.png';

const Login = () => {
  return (
    <main className="login">
      <img className="login-art" src={art} alt="Login Art" />
      <div>
        <Logo className="login-logo" />
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
