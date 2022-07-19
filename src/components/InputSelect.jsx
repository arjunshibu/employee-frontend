import '../css/styles.scss';

const InputSelect = ({
  label = '',
  name = '',
  id = '',
  value = '',
  options,
  // defaultLabel = true,
  onChange,
}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} onChange={onChange} value={value}>
        {/* {defaultLabel && <option value="">{label}</option>} */}
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
