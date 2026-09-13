import hero from "./assets/hero.png";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#08070b] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-pink-500" />

            <span className="text-xs font-medium text-gray-300 sm:text-sm">
              Build Your Developer Stack
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Your
            <br />

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #ff8a1f 0%, #ff3f9f 52%, #7c4dff 100%)",
              }}
            >
              Perfect Dev Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Discover the technologies, tools, and frameworks you need
            to build modern, scalable, and powerful applications.
            Create your own developer stack and level up your skills.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(110deg, #ff8a1f 0%, #ff3f9f 52%, #7c4dff 100%)",
              }}
            >
              Explore Technologies

              <span className="ml-2 text-lg">
                →
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-pink-400 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-xl font-bold text-white">
                14+
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Technologies
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                7
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Categories
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                4.9
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Top Rating
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">

          <div
            className="absolute h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
            style={{
              background:
                "linear-gradient(110deg, #ff8a1f, #ff3f9f, #7c4dff)",
            }}
          />
          <div className="relative w-full max-w-xl">
           <img
  src={hero}
  alt="Developer technology stack"
  className="w-full object-contain"
/>
          </div>
        </div>
      </div>
    </section>
  );
}