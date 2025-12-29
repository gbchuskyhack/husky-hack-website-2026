import InputField from "./components/InputField";
import SponsorLayout from "./components/Sponsors/SponsorLayout"
import Accordion from "./components/FAQ/Accordian"
import FormContext, {useFormRegistry} from "./components/FormContext.tsx";
import {FormEvent, useRef} from "react";

export default function Home() {

    const {fieldRefs, registerField, unregisterField} = useFormRegistry();

    // Refs for form
    const emailRef = useRef(null)

    function handleSubmit(e:FormEvent) {
        e.preventDefault()
        const data: Record<string, string | number | null> = {};

        if (!fieldRefs.current) return; // Error message?

        // iterates through the field refs and validates each input field
        Object.values(fieldRefs.current).forEach((field) => {
            if (!field) return; // Skip if a ref was unmounted but not cleaned up

            console.log("Checking field:", field.getValue());
            // validationCheck = field.validate();
            data[field.getName()] = field.getValue();
        });
        console.log("Sending",data)

    }

    return (
        <>
            <div id='Home' className='h-[90vh] bg-amber-200'>
                <div className='content-center h-full mx-5'>
                    <h1 className='text-4xl font-extrabold text-blue-600 text-center mt-5'>Husky Hack</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae nostrum, ut possimus eum
                        sed vitae ab ratione molestiae voluptate cumque alias debitis sapiente eius vero, sequi odio
                        voluptatibus voluptatem!</p>
                </div>

                <FormContext.Provider value={{unregisterField,registerField}}>
                    {/*Note: This could be a wrapper component*/}
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Dont miss a thing"
                            name="email"
                            type="text"
                            required={true}
                            placeholder="Enter your email"
                            ref={emailRef}
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </FormContext.Provider>
            </div>
            {/* About Us */}
            <div id='About-Us' className='h-screen bg-gray-700 text-white'>
                <div>
                    <h1 className='text-3xl text-center pt-[50vh]'>About Us</h1>
                </div>

            </div>
            {/* Schedule */}
            <div
                id="Schedule"
                className="h-screen bg-emerald-200 text-black flex items-center justify-center"
            >
                <div className="text-center max-w-md px-6">
                    <h1 className="text-3xl font-bold mb-4">Schedule</h1>

                    <p className="mb-6 text-gray-700">
                        Coming soon.
                        <br/>
                        Sign up for our newsletter to get notified when we launch.
                    </p>
                    {/* Newsletter Signup */}
              {/*      <form*/}
              {/*          method="POST"*/}
              {/*          className="flex flex-col items-center gap-4"*/}
              {/*          aria-label="Newsletter signup">*/}

              {/*          <InputField*/}
              {/*              label="Email address"*/}
              {/*              type="email"*/}
              {/*              name="email"*/}
              {/*          />*/}

              {/*          <button*/}
              {/*              type="submit"*/}
              {/*              className="*/}
              {/*mt-2 w-72 rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white transition*/}
              {/*hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">*/}
              {/*              Notify Me*/}
              {/*          </button>*/}
              {/*      </form>*/}
                </div>
            </div>

            <section id="Sponsors" className="min-h-screen bg-[#333] flex justify-center">
                <div className="w-full max-w-7xl px-6 py-24">
                    <h1 className="text-3xl font-bold text-center mb-10 text-white p-2">
                        Our Sponsors
                    </h1>

                    <div className="flex justify-center min-h-[30vh]">
                        <SponsorLayout/>
                    </div>
                    {/* To implemement in the future */}
                    <div id="SponsorSignUp" className="flex justify-center w-full mt-8">
                        <button
                            className="
              px-8 py-3 rounded-md 
              bg-gradient-to-r from-amber-500 to-yellow-400
              text-black font-semibold tracking-wide shadow-md
              transition-all duration-300 hover:scale-[1.04]
              hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#333]">
                            Become a Sponsor
                        </button>
                    </div>

                </div>
            </section>

            {/* FAQ */}
            <section id="FAQ" className="min-h-screen bg-[#222] text-white py-16">
                <h1 className="text-3xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h1>

                <div className="flex justify-center gap-12 px-8">
                    {/* Left Column */}
                    <div className="bg-[#1a1a1a] w-[40vw] p-6 space-y-4 rounded-md">
                        <Accordion
                            title="When is it?"
                            answer="We’ll announce the official date soon. Stay tuned!"
                        />

                        <Accordion
                            title="Who can participate?"
                            answer="Anyone with an interest in technology, design, or innovation is welcome."
                        />

                        <Accordion
                            title="Is it beginner friendly?"
                            answer="Yes! We welcome participants of all skill levels."
                        />
                    </div>

                    {/* Right Column */}
                    <div className="bg-[#1a1a1a] w-[40vw] p-6 space-y-4 rounded-md">
                        <Accordion
                            title="How much does it cost?"
                            answer="The event is completely free to attend."
                        />

                        <Accordion
                            title="Do I need a team?"
                            answer="You can join solo or form a team at the event."
                        />

                        <Accordion
                            title="What should I bring?"
                            answer="Bring your laptop, charger, and enthusiasm!"
                        />
                    </div>
                </div>
            </section>


        </>
    )
}
