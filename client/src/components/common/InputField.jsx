const InputField = ({ label, type = "text", placeholder, min, max, rows }) => {
  const baseStyles =
    "bg-primary rounded px-4 py-3 placeholder:text-textLight outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-sm w-full";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold">{label}</label>
      {type === "textarea" ? (
        <textarea
          rows={rows || 4}
          placeholder={placeholder}
          className={`${baseStyles} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          className={baseStyles}
        />
      )}
    </div>
  );
};

export default InputField;
