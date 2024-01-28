import { useState } from "react";
import bannerImage from "../assets/om.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & React Developer",

    desc1: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
    aspernatur minima totam natus quisquam magni eaque porro
    laudantium reprehenderit voluptate!`,
    desc2: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum magni illum praesentium cumque eos modi possimus
                corporis, rem eius architecto odit culpa cum non repellat dolor
                magnam harum autem reprehenderit?`,
  });
  return (
    <>
      <div className="main container border bg-gray-100 py-16">
        <h1 className="text-center pb-16 text-4xl underline font-bold">
          About Me
        </h1>
        <div className="flex items-center">
          <div className=" w-full flex justify-center">
            <img
              className="rounded-full shadow-lg w-fit mt-8"
              src={data.image}
              alt="image not found"
            />
          </div>
          <div className="w-full  flex justify-center ">
            <div className="space-y-5 w-2/3">
              <h1 className="text-4xl font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg ">
                Read More..
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
