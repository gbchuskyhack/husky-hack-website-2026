type InputFieldProps = {
    label: string;
    type: string;
    name: string;
};

function InputField(    {label, type, name}: InputFieldProps) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} name={name}
            placeholder="yourmail@example.com"
            className="
          w-full bg-transparent border-0 border-b-2 border-gray-400 px-1
          py-2 text-black focus:outline-none focus:border-emerald-600 transition" />
        </div>
    );
}

export default InputField;