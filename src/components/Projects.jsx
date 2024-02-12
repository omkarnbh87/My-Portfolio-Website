import bannerBackground from "../assets/banner_wallpaper.svg";
const Projects = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-4xl font-bold underline  text-center">
          My Projects
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-balance text-white ">
            {/* text container */}
            <div className="w-2/3  space-y-4 space-x-10">
              <h1 className="text-4xl font-bold ml-10">1.City Guide in Java</h1>
              <h1 className="text-2xl font-bold">
                Environment/ Tools & Technology:
              </h1>
              <p>
                JSP, Servlet, JDK-8, MySQL, JDBC, HTML+CSS, JavaScript,
                Bootstrap, Eclipse IDE
              </p>
              <h1 className="text-2xl font-bold">Project Description:</h1>
              <p>
                This is a Web application which is used to provide information
                about the city. By selecting any city puser will get all the
                information related colleges, hotels, hospitals, tourist Places
                etc.
              </p>
              <h1 className="text-4xl font-bold">2.Movie Review Analyssis</h1>
              <h1 className="text-2xl font-bold">
                Environment/ Tools & Technology:
              </h1>
              <p>
                JSP, Servlet, JDK-8, MySQL, JDBC, HTML+CSS, JavaScript,
                Bootstrap, Eclipse IDE
              </p>
              <h1 className="text-2xl font-bold">Project Description:</h1>
              <p>
                This project helps to new users who wants to watch new and
                latest movies which are currently running and updated by admin.
                This project helps them to see reviews of new movies, given by
                registered users
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
