export const Input = ({
  value,
  label,
  type,
  name,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="h-6 text-sm font-medium" htmlFor={label}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="w-full p-4 border border-gray-200 border-solid rounded-md h-11"
        name={name}
        id={label}
        type={type}
        required={required}
      />
    </div>
  );
};
