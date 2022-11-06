import "./TextField.scss";

function TextField(props) {
  const { alt, src, type="text", placeholder, label,id } = props;
  return (
    <div className="text-field">
        <label htmlFor={id} className="text-field__label">{label}</label>
    <div className="text-field__wrapper">
      {src&&<span className="text-field__prepend">
        <img alt={alt} src={src} />
      </span>}
      <span className="text-field__body">
        <input id={id} type={type} placeholder={placeholder} className="text-field__input"/>
      </span>
      </div>
    </div>
  );
}

export default TextField;
