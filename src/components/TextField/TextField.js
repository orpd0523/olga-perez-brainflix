import "./TextField.scss";

function TextField(props) {
  const { alt, src, type = "text", multiline, placeholder, label, id } = props;
  const wrapper = "text-field__wrapper";
  const wrapperClass = multiline ? `${wrapper} ${wrapper}--multiline` : wrapper;
  const Node = multiline ? "textarea" : "input";
  return (
    <div className="text-field">
      <label htmlFor={id} className="text-field__label">
        {label}
      </label>
      <div className={wrapperClass}>
        {src && (
          <span className="text-field__prepend">
            <img alt={alt} src={src} />
          </span>
        )}
        <span className="text-field__body">
          <Node
            id={id}
            type={type}
            placeholder={placeholder}
            className="text-field__input"
          />
        </span>
      </div>
    </div>
  );
}

export default TextField;
