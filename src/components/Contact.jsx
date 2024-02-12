import { Link } from "react-router-dom";
import bannerBackground from "../assets/banner_wallpaper.svg";
const Contact = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl font-bold underline  text-center">
          My Contact Details
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16 px-16"
        >
          <div className=" text-white ">
            {/* text container */}
            <div className="w-2/3  space-y-5">
              <h1 className="text-4xl font-bold">Email:</h1>
              <Link className="text-3xl font-bold">
                contact.omkar87@gmail.com{" "}
              </Link>

              <h1 className="text-4xl font-bold">Mob: 9627408969</h1>

              <div className="icons-container space-x-5 flex">
                <a className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 ">
                  <i className="fa-brands text-4xl fa-facebook"></i>
                </a>
                <a className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 ">
                  <i className="fa-brands text-4xl fa-instagram "></i>
                </a>

                <a className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 ">
                  <i className="fa-brands text-4xl fa-linkedin"></i>
                </a>
                <a className="hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800 ">
                  <i className="fa-brands text-4xl fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
