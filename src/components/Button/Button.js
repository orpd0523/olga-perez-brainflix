import "./Button.scss";

function Button(props) {
  const { alt, src, children, color = "primary", type = "button" } = props;
  return (
    <button className= {"button button--" + color} type={type}>
      <span className="button__prepend">
        <img className="button__icon" alt={alt} src={src} />
      </span>
      <span className="button__body">{children}</span>
    </button>
  );
}

export default Button;
