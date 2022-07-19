import '../css/styles.scss';

const Button = ({ className, label, type, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
