import React from "react";

const Topbar = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = React.useState("slider"); 

  const handleNavigation = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
    <div className="topBarSection">
      <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4 h-20">
          <a className="flex title-font font-medium items-center text-gray-900">
            <img
              src="/title.png"
              alt="Logo"
              className="w-auto h-12 sm:h-16 md:h-20 object-contain" 
            />
          </a>

          <nav className="flex space-x-5">
            {[
              { name: "Home", id: "slider" },
              { name: "About", id: "about" },
              { name: "Programs", id: "programs" },
              { name: "Gallery", id: "gallery" },
              { name: "Contact", id: "contact" },
            ].map(({ name, id }) => (
              <a
                key={id}
                onClick={() => handleNavigation(id)}
                className={`relative px-4 py-2 text-lg font-semibold cursor-pointer transition-all duration-500 ease-in-out ${
                  activeSection === id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <span className="relative z-10">{name}</span>
                {activeSection === id && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-100 transition-transform duration-500 ease-in-out"
                  ></span>
                )}
                {activeSection !== id && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-500 ease-in-out hover:scale-x-100"
                  ></span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-20"></div>
    </div>
  );
};

export default Topbar;
