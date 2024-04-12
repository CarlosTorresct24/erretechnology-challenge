import './style.css';

const Button = ({
  children,
  style = {},
  type = "submit",
  onClick = () => null,
}) => {
  return <button type={type} style={style} className="btn-main" onClick={onClick}>{children}</button>;
};

export default Button;