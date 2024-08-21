

function NavBar() {
  return (
    <>
    <section className="parent px-6 py-8 max-w-5xl mx-auto">
      <nav className="md:flex md:justify-between md:items-center font-source font-semibold bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-full px-4 py-2">
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/UMSDC Logo.svg"
            alt="UMSDC"
            width="165"
            height="16"
          />
          <p className="text-captions text-white">
            University of Mindanao Student <br /> Developer Community
          </p>
        </div>
        <div className="Right Side flex space-x-8 items-center text-body">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-secondary text-white "
          >
            Home
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-secondary text-white "
          >
            Events
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-secondary text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-secondary text-white"
          >
            Contacts
          </a>
          <div>
            <a
              href="#"
              className="transition-colors duration-300 hover:bg-hoverSecondary bg-secondary rounded-full text-body py-2 px-6 font-bold"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </section>
    </>
  );
}

export default NavBar;
