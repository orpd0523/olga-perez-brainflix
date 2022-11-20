import "./TextField.scss";

function TextField(props) {
  const {
    alt,
    src,
    type = "text",
    multiline,
    placeholder,
    label,
    id,
    name,
    full,
  } = props;
  const wrapper = "text-field__wrapper";
  const wrapperClass = multiline
    ? `${wrapper} ${wrapper}--multiline ${
        full ? `${wrapper}--multiline--full` : ""
      }`
    : wrapper;
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
            name={name}
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
