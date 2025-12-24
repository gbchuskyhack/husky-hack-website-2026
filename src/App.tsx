import NavBar from './components/Nav'

export default function App() {
  return (
    <>
      <NavBar />

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to HuskyHack
        </h1>

        <p className="text-gray-600">
          This page is using a reusable Tailwind navbar component.
        </p>
      </main>
    </>
  )
}
