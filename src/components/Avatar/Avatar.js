import "./Avatar.scss";

function Avatar(props) {
  const { alt = "avatar", src } = props;
  return (
    <div className="avatar">
      {src && <img className="avatar__image" alt={alt} src={src} />}
    </div>
  );
}

export default Avatar;
