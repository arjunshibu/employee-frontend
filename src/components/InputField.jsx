const InputField = ({
  label = '',
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
