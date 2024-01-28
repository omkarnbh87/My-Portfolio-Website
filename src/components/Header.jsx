import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Om Kar");
  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/dowbload-cv",
  });
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/contacts",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
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
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
        <div>
          <a
            href={actionButton.link}
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
