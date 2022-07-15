const InputSelect = ({ label = '', name = '', id = '', options }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id}>
        <option>{label}</option>
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
