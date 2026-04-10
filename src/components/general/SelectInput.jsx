import "./general.css";

function SelectInput({
  label,
  options,
  className = "",
  value,
  setValue,
}) {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <select className="general-select" value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;