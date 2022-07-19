import logo from '../img/logo.png';

const Logo = ({ className = 'logo' }) => {
  return (
    <img className={className} src={logo} alt="KeyValue Software Systems" />
  );
};

export default Logo;
