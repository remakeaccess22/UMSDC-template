
function HeroPage() {
    return (
      <>
        <header className="px-6 py-8 mt-5 max-w-5xl mx-auto font-source">
          <div className="max-w-2xl">
            <h1 className="text-heading font-bold text-secondary">
              <span className="text-primary">Ignite</span> your Passion,
              <span className="text-primary"> Build </span>
              your Future
            </h1>
            <p className="max-w-lg text-white mt-2 text-titlesec font-light">
              Empowering students through technology and leadership. We bridge
              the gap between theory and practice, preparing our members for the
              dynamic world of tech.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="transition-colors duration-300 hover:bg-hoverSecondary bg-secondary rounded-full text-title py-3 px-7 font-bold"
            >
              Join our Community
            </a>
          </div>
          <div>
            <h2 className="mt-8 font-semibold text-white">Connect with Us:</h2>
          </div>
          <div className="py-5 flex space-x-6 items-center">
            <a href="#">
              <img
                src="/src/assets/Facebook.svg"
                alt="Facebook"
                width="40"
                height="16"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/Discord.svg"
                alt="Discord"
                width="40"
                height="16"
              />
            </a>
            <a href="#">
              <img
                src="/src/assets/LinkedIn.svg"
                alt="Discord"
                width="40"
                height="16"
              />
            </a>
          </div>
        </header>
      </>
    );
}

export default HeroPage;
