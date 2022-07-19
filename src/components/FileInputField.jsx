import '../css/styles.scss';

const FileInputField = ({
  label = '',
  name = '',
  id = '',
  placeholder = '',
}) => {
  return (
    <div className="input file">
      <label htmlFor={id}>{label}</label>
      <label htmlFor={id} className="file-input">
        <span id="file-label-text" className="file-label-text">
          Choose file
        </span>
        <span className="file-browse">Browse</span>
      </label>
      <input
        type="file"
        name={name}
        className="file-input-hidden"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FileInputField;
