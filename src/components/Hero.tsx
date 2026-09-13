const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto flex min-h-[520px] max-w-[1280px] items-center px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Hero Content */}
          <div className="max-w-[650px]">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              Build Your Ideal
              <br />
              <span className="gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-7 text-slate-500 sm:text-[17px]">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#technologies"
                className="gradient-bg rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-200 hover:text-pink-500"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/banner-stack.png"
              alt="Development technology stack"
              className="w-[280px] max-w-full object-contain sm:w-[360px] lg:w-[430px]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero