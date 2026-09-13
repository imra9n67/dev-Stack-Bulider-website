import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#08070b]">
      <Navbar />

      <main>
        <Hero />

        {/* Technologies section - পরে এখানে cards বসবে */}
        <section
          id="technologies"
          className="min-h-screen bg-[#0b0a0f] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white">
              Technologies
            </h2>

            <p className="mt-3 text-gray-400">
              Explore technologies and build your perfect stack.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="min-h-screen bg-[#08070b] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white">
              Projects
            </h2>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="min-h-screen bg-[#0b0a0f] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white">
              About
            </h2>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-screen bg-[#08070b] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white">
              Contact
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;