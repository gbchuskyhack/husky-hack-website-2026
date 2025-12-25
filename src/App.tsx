import NavBar from './components/Nav'
import InputField from './components/InputField'

export default function App() {
  return (
    <>
      <NavBar />
      {/* Home */}
    <div id='Home' className='h-[90vh] bg-amber-200'>
      <div className='content-center h-full mx-5'>
        <h1 className='text-4xl font-extrabold text-blue-600 text-center mt-5'>Husky Hack</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae nostrum, ut possimus eum sed vitae ab ratione molestiae voluptate cumque alias debitis sapiente eius vero, sequi odio voluptatibus voluptatem!</p>
      </div>
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
          <br />
          Sign up for our newsletter to get notified when we launch.
        </p>
        {/* Newsletter Signup */}
        <form
          method="POST"
          className="flex flex-col items-center gap-4"
          aria-label="Newsletter signup"
        >
          <InputField
            label="Email address"
            type="email"
            name="email"
          />

          <button
            type="submit"
            className="
              mt-2 w-72 rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white transition
              hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            Notify Me
          </button>
        </form>
      </div>
    </div>

    {/* Sponsors */}
    <div className='h-screen bg-gray-500 flex justify-center'>
      <h1 className='text-3xl font-bold pt-[10vh]'>Our Sponsors</h1>
      {/* Gold Level Sponsors */}
      <div id='goldSponsors' className=''>

      </div>
      {/* Silver Level Sponsors */}
      <div id='silverSponsors' className=''>

      </div>
      {/* Bronze Level Sponsors */}
      <div id='bronzeSponsors' className=''>

      </div>
    </div>
    </>
  )
}
