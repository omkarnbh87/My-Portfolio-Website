import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [brandName, setBrandName] = useState("Om Kar");
  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "https://raw.githubusercontent.com/omkarnbh87/My-Portfolio-Website/main/src/assets/resume.pdf",
  });
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/My-Portfolio-Website/home",
      id: 1,
    },
    {
      title: "About",
      link: "/My-Portfolio-Website/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/My-Portfolio-Website/skills",
      id: 3,
    },
    {
      title: "Projects",
      link: "/My-Portfolio-Website/projects",
      id: 4,
    },
    {
      title: "Contact",
      link: "/My-Portfolio-Website/contact",
      id: 5,
    },
  ]);
  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          <h1 className="text-3xl font-bold">Om Kar</h1>
        </div>
        <div className="space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="hover:text-orange-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <a
            href={actionButton.link}
            download="resume.pdf"
            className="px-4 py-2 bg-orange-500 rounded-full shadow text-1xl"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
