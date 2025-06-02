import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import img from "../assets/blog2.png"
const Hero = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-[600px my-10] md:my-0">


        {/* text-section  */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore The Latest Tech & Web Trends
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae
            dignissimos quia nam tempore fugiat veniam?
          </p>
          <div className="flex space-x-4">
            <Link to={""}>
              <Button className="text-lg">Get Started</Button>
            </Link>
            <Link>
              <Button variant="outline" className="border-white px-6 py-3 text-lg">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* image section  */}
        <div className="flex items-center justify-center">
                <img src={img} alt="" className="md:h-[550px] md:w-[550px]"/>
        </div>


      </div>
    </div>
  );
};

export default Hero;
