const FileInputField = ({
  label = '',
  name = '',
  id = '',
  placeholder = '',
}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <label htmlFor={id} className="proof-input">
        <span id="file-name" className="file-name">
          Choose file
        </span>
        <span className="btn-browse">Browse</span>
      </label>
      <input type="file" name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default FileInputField;
