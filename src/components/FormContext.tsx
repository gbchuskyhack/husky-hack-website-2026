import {createContext, useCallback, useContext, useRef} from "react";
import type {InputFieldRef} from "./InputField.tsx";

const FormContext = createContext<{
    registerField: (name: string, ref: InputFieldRef) => void;
    unregisterField: (name: string) => void;
} | null>(null);

/*
* Hook meant to be used on the parent form when defining a new one.
* Example:
* export const HackathonForm = ({ children, onSubmit, submitLabel = "Submit" }) => {
  const { fieldRefs, registerField, unregisterField } = useFormRegistry();
  // ... the rest of your state and submit logic
}
* */
export const useFormRegistry = () => {
    const fieldRefs = useRef<Record<string, InputFieldRef>>({});

    const registerField = useCallback((name, ref) => {
        fieldRefs.current[name] = ref;
    }, []);

    const unregisterField = useCallback((name) => {
        delete fieldRefs.current[name];
    }, []);

    return {
        fieldRefs,
        registerField,
        unregisterField
    };
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a HackathonForm');
    }
    return context;
};

export default FormContext