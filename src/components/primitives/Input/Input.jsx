import './style.css';

const Input = ({
  label,
  placeholder,
  type,
  defaultValue = "",
}) => {
  return (
    <>
      <p className="input-titles">{label}</p>
      <input
        className="input-box"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default Input;