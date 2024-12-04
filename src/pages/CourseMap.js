import React, { useEffect } from "react";

import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Frontend Development",
    link: "/category/frontend_development",
    subcategories: [
      { name: "React", link: "/services/react" },
      { name: "MERN Stack", link: "/services/mern_stack" },
      { name: "MEAN Stack", link: "/services/mean_stack" },
      { name: "React Native", link: "/services/react_native" },
    ],
  },
  {
    name: "Backend Development",
    link: "/category/backend_development",
    subcategories: [
      { name: "Java Full Stack", link: "/services/java_full_stack" },
      { name: "Python Full Stack", link: "/services/python_full_stack" },
      { name: "Azure", link: "/services/azure" },
      { name: "Snowflake", link: "/services/snowflake" },
    ],
  },
  {
    name: "Cloud Computing & Platforms",
    link: "/category/cloud_computing_and_platforms",
    subcategories: [
      { name: "AWS Devops", link: "/services/aws_devops" },
      { name: "Azure Devops", link: "/services/azure_devops" },
      { name: "GCP", link: "/services/gcp" },
      { name: "Blockchain", link: "/services/blockchain" },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    link: "/category/devops_and_infrastructure",
    subcategories: [
      { name: "ServiceNow", link: "/services/servicenow" },
      { name: "Cyber Security", link: "/services/cyber_security" },
      { name: "Testing", link: "/services/testing" },
    ],
  },
  {
    name: "Salesforce Development & Administration",
    link: "/category/salesforce_development_and_administration",
    subcategories: [
      { name: "Salesforce", link: "/services/salesforce" },
      { name: "Generative AI", link: "/services/generative_ai" },
      { name: "AI/ML", link: "/services/ai_ml" },
    ],
  },
  {
    name: "Data Science & Analytics",
    link: "/category/data_science_and_analytics",
    subcategories: [
      { name: "Tableau", link: "/services/tableau" },
      { name: "Powerbi", link: "/services/powerbi" },
    ],
  },
  {
    name: "Cybersecurity & Ethical Hacking",
    link: "/category/cybersecurity_and_ethical_hacking",
    subcategories: [
      { name: "Sap Fi/Co", link: "/services/sap_fico" },
      { name: "Sap Hana", link: "/services/sap_hana" },
    ],
  },
  {
    name: "Digital Transformation & Management",
    link: "/category/digital_transformation_and_management",
    subcategories: [
      { name: "Digital Marketing", link: "/services/digital_marketing" },
      { name: "Medical Coding", link: "/services/medical_coding" },
      { name: "Flutter", link: "/services/flutter" },
    ],
  },
];

export default function CourseMap() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Navbar />
      <h3 className="course-map-header">Services</h3>
      <div className="coursemap-container">
        {services.map((category, ind) => {
          return (
            <div className="category-container">
              <Link to={category.link} className="course-map-item">
                <h5 className="coursemap-cat-title">{category.name}</h5>
              </Link>

              <div className="courses-container">
                {category.subcategories.map((course, ind) => {
                  return (
                    <div style={{ display: "flex", gap: "7px" }}>
                      <span className="col-red"> ⨠ {"     "}</span>
                      <Link to={course.link} className="course-map-item">
                        {course.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <br />
      </div>
      <Footer />
    </>
  );
}
