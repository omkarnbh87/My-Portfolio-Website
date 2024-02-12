import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex justify-between px-72">
        <div>
          <p>
            @2024 nbhsoftech <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <Link to="/My-Portfolio-Website/about" className="hover:underline">
            About
          </Link>
          <Link to="/My-Portfolio-Website/about" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/My-Portfolio-Website/about" className="hover:underline">
            Licensing{" "}
          </Link>
          <Link to="/My-Portfolio-Website/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
