import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({
  label,
  type,
  className = "",
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <div>
        {icon && <FontAwesomeIcon icon={icon} />}
        <input
          className="general-input"
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}

export default Input;