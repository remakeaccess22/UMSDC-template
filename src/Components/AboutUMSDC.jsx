function AboutUMSDC() {
  return (
    <>
      <div className="px-6 py-8 mt-5 max-w-5xl mx-auto font-source text-white">
        <h1 className="text-heading font-bold">
          Inside{" "}
          <span className="text-gradient from-secondary to-primary">UMSDC</span>
        </h1>
        <div className="mt-5">
          <p className="font-light text-titlesec leading-relaxed">
            <span className="font-bold">
              The University of Mindanao Student Developer Community (UMSDC)
            </span>{" "}
            is a civic organization that empowers students passionate about
            technology. We offer hands-on training, real-world projects, and a
            supportive community to help members grow personally and
            professionally, develop innovative solutions, and prepare for
            successful tech careers.
          </p>
          <div className="font-source py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-600 divide-y lg:divide-y-0 lg:divide-x divide-backgroundblur rounded-xl backdrop-blur-lg">
              <div className="group relative z-10 p-6 md:p-10 h-full flex flex-col bg-backgroundblur bg-opacity-40 rounded-l-xl rounded-r-none">
                <img
                  src="/src/assets/Learn.svg"
                  alt="Learn"
                  width="100"
                  height="16"
                />
                <div className="mt-5">
                  <p className="font-bold text-title text-white uppercase">
                    Learn
                  </p>
                  <p className="mt-3 font-light text-white">
                    Dive into hands-on training and gain the skills needed to
                    excel in the tech industry. At UMSDC, we provide
                    opportunities to learn through workshops, seminars, and
                    real-world projects.
                  </p>
                </div>
              </div>
              <div className="group relative z-10 p-6 md:p-10 h-full flex flex-col bg-backgroundblur bg-opacity-40">
                <img
                  src="/src/assets/Innovate.svg"
                  alt="Innovate"
                  width="60"
                  height="10"
                />
                <div className="mt-5">
                  <p className="font-bold text-title text-white uppercase">
                    Innovate
                  </p>
                  <p className="mt-3 font-light text-white">
                    Collaborate with peers to develop cutting-edge solutions.
                    Our community fosters creativity, encouraging members to
                    bring fresh ideas to life and tackle real-world challenges.
                  </p>
                </div>
              </div>
              <div className="group relative z-10 p-6 md:p-10 h-full flex flex-col bg-backgroundblur bg-opacity-40 rounded-l-none rounded-r-xl">
                <img
                  src="/src/assets/Connect.svg"
                  alt="Connect"
                  width="90"
                  height="16"
                />
                <div className="mt-5">
                  <p className="font-bold text-title text-white uppercase">
                    Connect
                  </p>
                  <p className="mt-3 font-light text-white">
                    Join a supportive network of tech enthusiasts. UMSDC offers
                    a platform to connect with like-minded individuals, industry
                    professionals, and potential mentors to build lasting
                    relationships and a successful career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUMSDC;
