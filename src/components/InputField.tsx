import {ChangeEvent, RefObject, useCallback, useContext, useEffect, useImperativeHandle, useState} from "react";
import FormContext from "./FormContext.tsx";

export interface InputFieldRef {
    getValue: () => string;
    getName: () => string;
    validate: () => boolean;
    setExternalError: (msg: string) => void;
    reset: () => void;
}

export type FieldValidation = {
    rule: (value: string) => boolean;
    message: string;
};

type InputFieldProps = {
    label: string;
    type: "input" | "message" | "email"
    // | "radio" | "dropdown"
    name: string;
    required?: boolean
    placeholder?: string
    customValidation?: FieldValidation[]
    maxLength?: number
    ref?: RefObject<InputFieldRef | null>;

};

function InputField(props: InputFieldProps) {
    // States
    const [value, setValue] = useState("");
    const [error, setError] = useState<string>("")
    // const valueRef = useRef(value); //Using a ref for the value because we need to update it from the parent
    // valueRef.current = value;
    const {
        label,
        name,
        type,
        required = false,
        placeholder,
        customValidation = [],
        maxLength = 100,
        ref
    } = props;

    const runValidation = useCallback((): boolean => {
        // console.log("value",value.trim())
        if (required && !value.trim()) {
            setError(`${label} is required`);
            return false;
        }
        for (const v of customValidation) {
            if (!v.rule(value)) {
                setError(v.message);
                return false;
            }
        }
        setError(null);
        return true;
    }, [value, required, customValidation, label]);

    const api:InputFieldRef = {
        getValue: () => value,
        getName: () => name,
        validate: () => runValidation(), // uses the callback function
        setExternalError: (msg: string) => setError(msg),
        reset: () => {
            setValue("");
            setError(null);
        }
    };

    const formContext = useContext(FormContext);

    const setRegistry = useCallback((node: any) => {
        if (formContext) {
            if (node) {
                // node is the object returned by useImperativeHandle
                formContext.registerField(name, node);
            } else {
                // node is null when the component unmounts
                formContext.unregisterField(name);
            }
        }
    }, [formContext, name]);
    // Expose methods via the ref prop
    useImperativeHandle(ref, () => api, [api]);    // useEffect(() => {
    //
    //     console.log("Current state val",value)
    //     console.log("current ref val:",ref?.current?.getValue())
    // }, [value]);
    //
    useEffect(() => {
        if (formContext) formContext.registerField(name, api);
        return () => formContext?.unregisterField(name);
    }, [name, api]);




    return (
        <div ref={setRegistry}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type === "long-answer" ? "text" : type}
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                onBlur={() => runValidation()}
                className={`p-2 border rounded-md focus:ring-2 outline-none transition-all ${
                    error ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
                }`}
            />
            <button onClick={()=>console.log(ref?.current?.getValue())}/>
            <div className="min-h-[1.25rem] mt-1">
                {error && (
                    <p className="text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
            <input id={name} type={type} name={name}
            placeholder="yourmail@example.com"
            className="
          w-full bg-transparent border-0 border-b-2 border-gray-400 px-1
          py-2 text-black focus:outline-none focus:border-emerald-600 transition" />
        </div>
    );
}

export default InputField;