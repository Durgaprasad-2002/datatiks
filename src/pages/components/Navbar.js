import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Desktop dropdown visibility
  const [nestedMenu, setNestedMenu] = useState(null); // Mobile submenu tracking
  const [activeSubcategory, setActiveSubcategory] = useState(null); // Track the active subcategory for mobile

  const handleToggle = () => setToggle((prev) => !prev);

  const openNestedMenu = (menu) => {
    if (toggle) setNestedMenu(menu);
  };
  const closeNestedMenu = () => {
    setNestedMenu(null);
    setActiveSubcategory(null);
  };

  const services = [
    {
      name: "Frontend Development",
      subcategories: [
        { name: "Angular", link: "/services/angular" },
        { name: "React", link: "/services/react" },
        { name: "Vue.js", link: "/services/vue" },
        {
          name: "Digital Marketing",
          link: "/services/digital-marketing",
        },
      ],
    },
    {
      name: "Backend Development",
      subcategories: [
        { name: "Node.js", link: "/services/nodejs" },
        {
          name: "Express.js",
          link: "/services/express",
        },
        { name: "Django", link: "/services/django" },
        {
          name: "Python Libraries",
          link: "/services/python-libraries",
        },
      ],
    },
    {
      name: "Cloud Computing & Platforms",
      subcategories: [
        { name: "AWS", link: "/services/aws" },
        { name: "Azure", link: "/services/azure" },
        { name: "GCP", link: "/services/gcp" },
        {
          name: "Cloud Environments",
          link: "/services/cloud-environments",
        },
        {
          name: "Cloud and Platform Management",
          link: "/services/platform-management",
        },
      ],
    },
    {
      name: "DevOps & Infrastructure",
      subcategories: [{ name: "DevOps", link: "/services/devops" }],
    },
    {
      name: "Salesforce Development & Administration",
      subcategories: [
        {
          name: "Salesforce Development",
          link: "/services/development",
        },
        {
          name: "Salesforce Administration",
          link: "/services/administration",
        },
        {
          name: "Salesforce Lightning",
          link: "/services/lightning",
        },
        { name: "Salesforce CPQ", link: "/services/cpq" },
      ],
    },
    {
      name: "Data Science & Analytics",
      subcategories: [
        {
          name: "Data Science",
          link: "/services/data-science",
        },
        { name: "Analytics", link: "/services/analytics" },
      ],
    },
    {
      name: "Cybersecurity & Ethical Hacking",
      subcategories: [
        { name: "CHFI", link: "/services/chfi" },
        { name: "CND", link: "/services/cnd" },
        { name: "CEH", link: "/services/ceh" },
      ],
    },
    {
      name: "Digital Transformation & Management",
      subcategories: [
        { name: "EDM", link: "/services/edm" },
        {
          name: "Digital Transformation",
          link: "/services/digital-transformation",
        },
        {
          name: "Coding & App Development",
          link: "/services/coding-app-development",
        },
      ],
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="brand">
        <img
          className="brand-img"
          src="https://www.datatiks.com/uploads/e8d1a40cfe85879a6006a0ac852007c0.png"
          alt="brand-logo"
        />
      </div>

      <div
        className={`nav-links-container ${
          toggle ? "show-links" : "hide-links"
        }`}
      >
        <ul className="lists">
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <li
            className="nav-link services"
            onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
            onMouseLeave={() => setShowDropdown(false)} // Hide dropdown on leave
            onClick={() => openNestedMenu("services")} // Open for mobile view
          >
            Services
            {showDropdown && (
              <ul className="dropdown">
                {services.map((service) => (
                  <li key={service.name} className="dropdown-item">
                    <Link to="#" className="item-link">
                      {service.name}
                    </Link>
                    <ul className="dropdown-submenu">
                      {service.subcategories.map((subService) => (
                        <li key={subService.name} className="submenu-item">
                          <Link to={subService.link} className="item-link">
                            {subService.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <Link to="/faculty">
            <li className="nav-link">Faculty</li>
          </Link>
          <Link to="/corporate/partner">
            <li className="nav-link">Corporate Partner</li>
          </Link>
          <Link to="/contact">
            <li className="nav-link">Contact Us</li>
          </Link>
        </ul>
      </div>

      {/* Mobile Nested Menu for Services */}
      {nestedMenu === "services" && (
        <div className="nested-menu">
          <button className="back-button" onClick={closeNestedMenu}>
            ← Back
          </button>
          <ul className="nested-lists">
            {services.map((service) => (
              <li key={service.name} className="nested-item">
                <span
                  onClick={() =>
                    setActiveSubcategory(
                      activeSubcategory === service.name ? null : service.name
                    )
                  }
                >
                  {service.name}
                </span>
                {/* Display subcategories separately */}
                {activeSubcategory === service.name && (
                  <div className="nested-submenu">
                    {service.subcategories.map((subService) => (
                      <li key={subService.name} className="inner-list">
                        <Link to={subService.link}>{"" + subService.name}</Link>
                      </li>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className={`toggle-container ${toggle ? "closeToggle" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
    </nav>
  );
}

// import React, { useState } from "react";
// import "../styles.css";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [toggle, setToggle] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // Desktop dropdown visibility
//   const [nestedMenu, setNestedMenu] = useState(null); // Mobile submenu tracking

//   const handleToggle = () => setToggle((prev) => !prev);

//   const openNestedMenu = (menu) => setNestedMenu(menu);
//   const closeNestedMenu = () => setNestedMenu(null);

//   const services = {
//     Service1: [
//       { name: "Sub-Service 1", link: "/service1/sub1" },
//       { name: "Sub-Service 2", link: "/service1/sub2" },
//     ],
//     Service2: [
//       { name: "Sub-Service A", link: "/service2/subA" },
//       { name: "Sub-Service B", link: "/service2/subB" },
//     ],
//     Service3: [
//       { name: "Sub-Service X", link: "/service3/subX" },
//       { name: "Sub-Service Y", link: "/service3/subY" },
//     ],
//   };

//   return (
//     <nav className="navbar">
//       <div className="brand">
//         <img
//           className="brand-img"
//           src="https://www.datatiks.com/uploads/e8d1a40cfe85879a6006a0ac852007c0.png"
//           alt="brand-logo"
//         />
//       </div>

//       <div
//         className={`nav-links-container ${
//           toggle ? "show-links" : "hide-links"
//         }`}
//       >
//         <ul className="lists">
//           <Link to="/">
//             <li className="nav-link">Home</li>
//           </Link>
//           <li
//             className="nav-link services"
//             onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
//             onMouseLeave={() => setShowDropdown(false)} // Hide dropdown on leave
//             onClick={() => openNestedMenu("services")} // Open for mobile view
//           >
//             Services
//             {showDropdown && (
//               <ul className="dropdown">
//                 {Object.keys(services).map((service) => (
//                   <li key={service} className="dropdown-item">
//                     <Link to="#">{service}</Link>
//                     <ul className="dropdown-submenu">
//                       {services[service].map((subService) => (
//                         <li key={subService.name} className="submenu-item">
//                           <Link to={subService.link}>{subService.name}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//           <Link to="/faculty">
//             <li className="nav-link">Faculty</li>
//           </Link>
//           <Link to="/corporate/partner">
//             <li className="nav-link">Corporate Partner</li>
//           </Link>
//           <Link to="/contact">
//             <li className="nav-link">Contact Us</li>
//           </Link>
//         </ul>
//       </div>

//       {nestedMenu === "services" && (
//         <div className="nested-menu">
//           <button className="back-button" onClick={closeNestedMenu}>
//             ← Back
//           </button>
//           <ul className="nested-lists">
//             {Object.keys(services).map((service) => (
//               <li key={service} className="nested-item">
//                 <span>{service}</span>
//                 <ul className="nested-submenu">
//                   {services[service].map((subService) => (
//                     <li key={subService.name}>
//                       <Link to={subService.link}>{subService.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div
//         className={`toggle-container ${toggle ? "closeToggle" : ""}`}
//         onClick={handleToggle}
//       >
//         <div className="toggle-bar"></div>
//         <div className="toggle-bar"></div>
//         <div className="toggle-bar"></div>
//       </div>
//     </nav>
//   );
// }

// import React, { useState } from "react";
// import "../styles.css";

// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [toggle, setToggle] = useState(false);
//   const [nestedMenu, setNestedMenu] = useState(null); // To track which submenu is open

//   function handleToggle() {
//     setToggle((prev) => !prev);
//   }

//   function openNestedMenu(menu) {
//     setNestedMenu(menu);
//   }

//   function closeNestedMenu() {
//     setNestedMenu(null);
//   }

//   return (
//     <nav className="navbar">
//       <div className="brand">
//         <img
//           className="brand-img"
//           src="https://www.datatiks.com/uploads/e8d1a40cfe85879a6006a0ac852007c0.png"
//           alt="brand-logo"
//         />
//       </div>
//       <div
//         className={`nav-links-container ${
//           toggle ? "show-links" : "hide-links"
//         }`}
//       >
//         <ul className="lists">
//           <Link to="/">
//             <li className="nav-link">Home</li>
//           </Link>
//           <li
//             className="nav-link services"
//             onClick={() => openNestedMenu("services")}
//           >
//             Services
//           </li>
//           <Link to="/faculty">
//             <li className="nav-link">Faculty</li>
//           </Link>
//           <Link to="/corporate/partner">
//             <li className="nav-link">Corporate Partner</li>
//           </Link>
//           <Link to="/contact">
//             <li className="nav-link">Contact Us</li>
//           </Link>
//         </ul>
//       </div>

//       {nestedMenu === "services" && (
//         <div className="nested-menu">
//           <button className="back-button" onClick={closeNestedMenu}>
//             ← Back
//           </button>
//           <ul className="nested-lists">
//             <li className="nested-item">
//               <span onClick={() => openNestedMenu("service1")}>Service 1</span>
//             </li>
//             <li className="nested-item">
//               <span onClick={() => openNestedMenu("service2")}>Service 2</span>
//             </li>
//             <li className="nested-item">
//               <span onClick={() => openNestedMenu("service3")}>Service 3</span>
//             </li>
//           </ul>
//         </div>
//       )}

//       {nestedMenu === "service1" && (
//         <div className="nested-menu">
//           <button className="back-button" onClick={closeNestedMenu}>
//             ← Back
//           </button>
//           <ul className="nested-lists">
//             <li className="nested-item">
//               <Link to="/service1/sub1">Sub-Service 1</Link>
//             </li>
//             <li className="nested-item">
//               <Link to="/service1/sub2">Sub-Service 2</Link>
//             </li>
//           </ul>
//         </div>
//       )}

//       <div
//         className={`toggle-container ${toggle ? "closeToggle" : ""}`}
//         onClick={handleToggle}
//       >
//         <div className="toggle-bar"></div>
//         <div className="toggle-bar"></div>
//         <div className="toggle-bar"></div>
//       </div>
//     </nav>
//   );
// }
