import React from "react";

export default function SECONDNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",

      subcategories: [
        {
          name: "Frontend Development",
          subcategories: [
            { name: "Angular", link: "/services/frontend-development/angular" },
            { name: "React", link: "/services/frontend-development/react" },
            { name: "Vue.js", link: "/services/frontend-development/vue" },
            {
              name: "Digital Marketing",
              link: "/services/frontend-development/digital-marketing",
            },
          ],
        },
        {
          name: "Backend Development",
          subcategories: [
            { name: "Node.js", link: "/services/backend-development/nodejs" },
            {
              name: "Express.js",
              link: "/services/backend-development/express",
            },
            { name: "Django", link: "/services/backend-development/django" },
            {
              name: "Python Libraries",
              link: "/services/backend-development/python-libraries",
            },
          ],
        },
        {
          name: "Cloud Computing & Platforms",
          subcategories: [
            { name: "AWS", link: "/services/cloud-computing/aws" },
            { name: "Azure", link: "/services/cloud-computing/azure" },
            { name: "GCP", link: "/services/cloud-computing/gcp" },
            {
              name: "Cloud Environments",
              link: "/services/cloud-computing/cloud-environments",
            },
            {
              name: "Cloud and Platform Management",
              link: "/services/cloud-computing/platform-management",
            },
          ],
        },
        {
          name: "DevOps & Infrastructure",
          subcategories: [
            { name: "DevOps", link: "/services/devops-infrastructure/devops" },
          ],
        },
        {
          name: "Salesforce Development & Administration",
          subcategories: [
            {
              name: "Salesforce Development",
              link: "/services/salesforce/development",
            },
            {
              name: "Salesforce Administration",
              link: "/services/salesforce/administration",
            },
            {
              name: "Salesforce Lightning",
              link: "/services/salesforce/lightning",
            },
            { name: "Salesforce CPQ", link: "/services/salesforce/cpq" },
          ],
        },
        {
          name: "Data Science & Analytics",
          subcategories: [
            {
              name: "Data Science",
              link: "/services/data-science/data-science",
            },
            { name: "Analytics", link: "/services/data-science/analytics" },
          ],
        },
        {
          name: "Cybersecurity & Ethical Hacking",
          subcategories: [
            { name: "CHFI", link: "/services/cybersecurity/chfi" },
            { name: "CND", link: "/services/cybersecurity/cnd" },
            { name: "CEH", link: "/services/cybersecurity/ceh" },
          ],
        },
        {
          name: "Digital Transformation & Management",
          subcategories: [
            { name: "EDM", link: "/services/digital-transformation/edm" },
            {
              name: "Digital Transformation",
              link: "/services/digital-transformation",
            },
            {
              name: "Coding & App Development",
              link: "/services/digital-transformation/coding-app-development",
            },
          ],
        },
      ],
    },
    {
      name: "Faculty",
      link: "/faculty",
    },
    {
      name: "Corporate Partner",
      link: "/corporate/partner",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return <div></div>;
}
