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
        { name: "React", link: "/services/react" },
        { name: "MERN Stack", link: "/services/mern_stack" },
        { name: "MEAN Stack", link: "/services/mean_stack" },
        { name: "React Native", link: "/services/react_native" },
      ],
    },
    {
      name: "Backend Development",
      subcategories: [
        { name: "Java Full Stack", link: "/services/java_full_stack" },
        { name: "Python Full Stack", link: "/services/python_full_stack" },
        { name: "Azure", link: "/services/azure" },
        { name: "Snowflake", link: "/services/snowflake" },
      ],
    },
    {
      name: "Cloud Computing & Platforms",
      subcategories: [
        { name: "AWS Devops", link: "/services/aws_Devops" },
        { name: "Azure Devops", link: "/services/azure_devops" },
        { name: "GCP", link: "/services/gcp" },
        { name: "Blockchain", link: "/services/blockchain" },
      ],
    },
    {
      name: "DevOps & Infrastructure",
      subcategories: [
        { name: "ServiceNow", link: "/services/servicenow" },
        { name: "Cyber Security", link: "/services/cyber_security" },
        { name: "Testing", link: "/services/testing" },
      ],
    },
    {
      name: "Salesforce Development & Administration",
      subcategories: [
        { name: "Salesforce", link: "/services/salesforce" },
        { name: "Generative AI", link: "/services/generative_ai" },
        { name: "AI/ML", link: "/services/ai_ml" },
      ],
    },
    {
      name: "Data Science & Analytics",
      subcategories: [
        { name: "Tableau", link: "/services/tableau" },
        { name: "Powerbi", link: "/services/powerbi" },
      ],
    },
    {
      name: "Cybersecurity & Ethical Hacking",
      subcategories: [
        { name: "Sap Fi/Co", link: "/services/sap_fico" },
        { name: "Sap Hana", link: "/services/sap_hana" },
      ],
    },
    {
      name: "Digital Transformation & Management",
      subcategories: [
        { name: "Digital Marketing", link: "/services/digital_marketing" },
        { name: "Medical Coding", link: "/services/medical_coding" },
        { name: "Flutter", link: "/services/flutter" },
      ],
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("remove-over");
    } else {
      document.body.classList.remove("remove-over");
    }
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggle]);

  return (
    <>
      <nav className={`navbar-1 ${isScrolled ? "scrolled" : ""}`}>
        <div className="brand">
          <Link to="/">
            <img
              className="brand-img"
              src="https://www.datatiks.com/uploads/e8d1a40cfe85879a6006a0ac852007c0.png"
              alt="brand-logo"
            />
          </Link>
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
                          <Link to={subService.link}>
                            {"" + subService.name}
                          </Link>
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
    </>
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
