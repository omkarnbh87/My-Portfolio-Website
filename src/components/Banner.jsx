import bannerImage from "../assets/om.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Banner = () => {
  const ele = useRef(null);
  useEffect(() => {
    const typed = new Typed(ele.current, {
      strings: ["Backend Developer", "React Developer", "Java Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      <div className=" w-full flex items-center justify-center text-white">
        <div className="w-2/3 space-y-2 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="mt-3 text-4xl font-bold">Om Kar</h1>
          <h2 className="mt-3 text-3xl">
            I am <span className="font-bold underline" ref={ele}></span>
          </h2>
          <p className="mt-3">
            I have the knowledge about java backend development.I have created
            the many rest api and microservices for my own prjects.I have more
            knowledge about core java like Oops, inheritence, polymorphism,
            abstraction, encapsulation and exception handling and
            multithreading.
          </p>
          <div className="icons-container space-x-5 flex">
            <a
              href="https://www.facebook.com/omkarrajput87"
              className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 "
            >
              <i className="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/omkarnbh87/?hl=en"
              className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 "
            >
              <i className="fa-brands text-4xl fa-instagram "></i>
            </a>

            <a
              href="https://linkedin.com/in/om-kar-4340891a0"
              className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 "
            >
              <i className="fa-brands text-4xl fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/Omkarnbh87"
              className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 "
            >
              <i className="fa-brands text-4xl fa-twitter"></i>
            </a>
          </div>

          <br />
          <a
            className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg "
            href="/My-Portfolio-Website/contact"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img
          className="rounded-full shadow-lg w-fit mt-8 my-2"
          src={bannerImage}
          alt="image not found"
        />
      </div>
    </div>
  );
};
export default Banner;
