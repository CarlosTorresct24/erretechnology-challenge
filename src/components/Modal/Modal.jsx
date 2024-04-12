import "./style.css";

const Modal = ({
  title,
  children
}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;