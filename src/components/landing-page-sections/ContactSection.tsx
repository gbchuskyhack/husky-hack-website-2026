import {MoveRight, Mail, User, BookOpen, MessageSquare} from 'lucide-react';
import {useCallback, useRef, useState} from "react";
import InputField from "../InputField.tsx";
import {useFormRegistry} from "../FormContext.tsx";
import FormContext from "../FormContext.tsx";

export default function ContactSection() {
    const [isHovered, setIsHovered] = useState(false)
    const {fieldRefs, registerField, unregisterField} = useFormRegistry();

    const nameRef = useRef(null)
    const subjectRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()

        const data: Record<string, string | number | null> = {};

        Object.values(fieldRefs.current).forEach((field) => {
            if (!field) return; // Skip if a ref was unmounted but not cleaned up

            console.log("Checking field:", field.getValue()); // If this looks like <div>...</div>, that's the problem!
            // validationCheck = field.validate();
            data[field.getName()] = field.getValue();
        });
        console.log("Sending",data)

    }, [])

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="w-full max-w-xl bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                    <header className="mb-8 text-left px-4">
                        <h2 className="text-3xl font-bold text-gray-900">Get in touch.</h2>
                        <p className="text-gray-500 mt-2">Fill out the fields below to send an email.</p>
                    </header>
                    <FormContext.Provider value={{registerField, unregisterField}}>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name & Subject Row */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div>
                                    <User size={18} className="text-gray-400"/>
                                    <InputField
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        // className="bg-transparent p-3 flex-1 focus:outline-none text-gray-700"
                                        ref={nameRef}
                                        label={"Name"}
                                    />
                                </div>

                                <div
                                    // className="flex-1 flex items-center gap-2 rounded-full bg-gray-100 p-1 pl-4 focus-within:bg-gray-200 transition-colors">
                                    >
                                    <BookOpen size={18} className="text-gray-400"/>
                                    <InputField
                                        type="text"
                                        name="subject"
                                        required
                                        ref={subjectRef}
                                        placeholder="Subject"
                                        className="bg-transparent p-3 flex-1 focus:outline-none text-gray-700"
                                        label={"Subject"}/>
                                </div>
                            </div>

                            {/* Body Textarea */}
                            <div
                                // className="flex items-start gap-2 rounded-[2rem] bg-gray-100 p-4 focus-within:bg-gray-200 transition-colors">
                                >
                                <MessageSquare size={18} className="text-gray-400 mt-3"/>
                                <InputField
                                    name="body"
                                    type={"message"}
                                    required
                                    rows={5}
                                    ref={messageRef}
                                    placeholder="Your message..."
                                    label={"Message"}/>
                            </div>

                            {/* Submit Action Area */}
                            <div
                                className="flex items-center justify-between gap-2 rounded-full bg-gray-900 p-1 pl-6 group">
                                <p className="text-sm text-gray-400 font-medium">
                                    Ready to send?
                                </p>

                                <button
                                    type="submit"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="flex items-center gap-3 bg-white py-4 px-8 rounded-full font-bold text-gray-900 hover:pr-10 transition-all duration-300 hover:text-blue-600 active:scale-95"
                                >
                                    <span>Send Email</span>
                                    <MoveRight
                                        className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}/>
                                </button>
                            </div>
                        </form>
                    </FormContext.Provider>

                </div>
            </div>
        </>
    )
}