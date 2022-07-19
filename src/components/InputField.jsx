import '../css/styles.scss';

const InputField = ({
  label = '',
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
  value = '',
  className = 'input',
  onChange,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
