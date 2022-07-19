import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const onUsernameChange = (e) => {
    setCredentials((currentCredentials) => ({
      ...currentCredentials,
      username: e.target.value,
    }));
  };

  const onPasswordChange = (e) => {
    setCredentials((currentCredentials) => ({
      ...currentCredentials,
      password: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    navigate('/employees');
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <InputField
        className="login-form-input"
        label="Username"
        id="username"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={onUsernameChange}
      />
      <InputField
        className="login-form-input"
        label="Password"
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={onPasswordChange}
      />
      <Button className="btn btn-primary" label="Login" type="submit" />
    </form>
  );
};

export default LoginForm;
