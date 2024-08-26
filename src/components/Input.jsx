const Input = ({ name, type, label, placeholder, value, onChange, error }) => {
  return (
    <div className="flex flex-col mt-10 mb-5">
      <div className="flex justify-between text-[10px] font-bold mb-2">
        <label htmlFor={name} className="text-darkSlateGrey">
          {label}
        </label>
        {error && <span className="text-tomato">{error}</span>}
      </div>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-12 border border-solid border-gray-300 rounded-md px-5 placeholder:text-gray-400 text-sm text-charcoalGrey focus:outline-0 focus:border-charcoalGrey ${
          error
            ? "text-tomato border-tomato focus:border-tomato bg-tomato/20"
            : ""
        }`}
      />
    </div>
  );
};

export default Input;
