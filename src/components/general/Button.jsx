import "./general.css";

function Button({ label, className = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={`general-button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;