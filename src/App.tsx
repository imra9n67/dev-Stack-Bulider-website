import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import Footer from "./Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#08070b]">

      <Navbar />

      <main>

        <Hero />
        <Technologies />

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
        <Footer />
      </main>
    </div>
  );
}

export default App;