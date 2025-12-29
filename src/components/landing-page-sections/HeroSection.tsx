import { type FormEvent, useRef } from "react";
import FormContext, { useFormRegistry } from "../FormContext.tsx";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
    const { fieldRefs, registerField, unregisterField } = useFormRegistry();

    // Refs for form
    const emailRef = useRef(null)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const data: Record<string, string | number | null> = {};

        if (!fieldRefs.current) return; // Error message?

        // iterates through the field refs and validates each input field
        Object.values(fieldRefs.current).forEach((field: any) => {
            if (!field) return; // Skip if a ref was unmounted but not cleaned up

            console.log("Checking field:", field.getValue());
            // validationCheck = field.validate();
            data[field.getName()] = field.getValue();
        });
        console.log("Sending", data)
    }

    return (
        <div id='Home' className='h-screen flex flex-col justify-center items-center gap-4'>
            <div className='content-center mx-5'>
                <h1 className='text-4xl font-extrabold text-blue-600 text-center mt-5'>Husky Hack</h1>
                <p className="text-sm text-gray-600">
                    May 2026 (Detail TBD)
                </p>
            </div>

            <FormContext.Provider value={{ unregisterField, registerField }}>
                {/*Note: This could be a wrapper component*/}
                <form onSubmit={handleSubmit}>
                    {/* <InputField
                        label="Dont miss a thing"
                        name="email"
                        type="email"
                        required={true}
                        placeholder="Enter your email"
                        ref={emailRef}
                    /> */}

                    <div className="flex items-center gap-4 rounded-full bg-gray-200 p-2">
                        <div className="flex items-center gap-2 bg-white rounded-full hover:pr-2 transition-all duration-300">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email address"
                                ref={emailRef}
                                className="p-4 rounded-full flex-1 focus:outline-none focus:ring-none"
                            />

                            <button
                                type="submit"
                                className="p-4 rounded-full font-bold hover:scale-[1.04] transition-all duration-300 hover:text-blue-600"
                            >
                                <MoveRight />
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 pr-2">
                            Don't miss a thing.
                        </p>
                    </div>
                </form>
            </FormContext.Provider>
        </div>
    );
}
