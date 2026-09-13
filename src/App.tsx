import Navbar from "./Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Home
        </h1>
      </section>

      {/* TECHNOLOGIES */}
      <section
        id="technologies"
        className="flex min-h-screen items-center justify-center bg-gray-50 px-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Technologies
        </h1>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Projects
        </h1>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center bg-gray-50 px-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          About
        </h1>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <h1 className="text-4xl font-bold text-gray-900">
          Contact
        </h1>
      </section>
    </div>
  );
}

export default App;