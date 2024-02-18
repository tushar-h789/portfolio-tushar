import { useState } from "react";
import Heading from "./layout/Heading";
import Container from "./layout/Container";
import Image from "./layout/Image";
import socialMedia from "../assets/socialMedia.png";
import eCommerce from "../assets/e-commerce.png";
import restaurent from "../assets/restaurent.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "./layout/SampleNextArrow";
import SamplePrevArrow from "./layout/SamplePrevArrow";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ projectref }) => {
  const settings = {
    dots: false,
    fade: false,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section ref={projectref} className="lg:pt-32 pt-20 sdv:max-xl:mb-14">
      <Container>
        <div>
          <Heading title="PROJECT" />
        </div>
        <Slider {...settings}>
          <div className="mt-12 lg:mt-20 sm:!flex gap-5 sdv:max-sm:px-2">
            <div className="sm:w-1/2 flex justify-center flex-col">
              <h2 className="font-po font-bold text-2xl lg:text-4xl text-secondary uppercase sdv:max-sm:text-center">
                TSR Restaurant
              </h2>
              <p className="font-po text-white xl:w-[650px] text-justify mt-6 sdv:max-md:font-light">
                Savor the anticipation! Our restaurant website, built with
                React.js, Tailwind CSS, and Daisy UI, promises a visually
                pleasing and interactive experience. While the frontend is ready
                to tantalize your senses, we are busy crafting a robust backend
                with Node.js, Express.js, and MongoDB. Stay tuned for a seamless
                blend of culinary delight and technology!
              </p>

              <div
                className="flex sdv:max-sm:justify-center"
                title="https://tsr-restaurent.web.app/"
              >
                <a
                  href="https://tsr-restaurent.web.app/"
                  target="_blank"
                  className="mt-5 flex items-center justify-center text-primary bg-secondary py-4 px-12 xl:py-6 lg:px-[82px] rounded-full font-po font-medium md:font-semibold xl:font-bold text-xl hover:bg-[#BFA24F] transition ease-in delay-150 uppercase gap-x-3"
                >
                  <FaExternalLinkAlt className="xl:text-2xl" />
                  visit
                </a>
              </div>
            </div>
            <div
              className="sm:w-1/2 flex items-center justify-center"
              title="https://tsr-restaurent.web.app/"
            >
              <Image
                className="xl:w-[600px] xl:h-[560px] lg:w-[440px] lg:h-[400px] md:w-[360px] md:h-[340px] sm:w-[340px] sm:h-[320px] sdv:max-sm:mt-5 rounded-3xl "
                src={restaurent}
              />
            </div>
          </div>
          <div className="mt-12 sm:!flex gap-5 sdv:max-sm:px-2">
            <div className="sm:w-1/2 flex justify-center flex-col">
              <h2 className="font-po font-bold text-2xl lg:text-4xl text-secondary uppercase sdv:max-sm:text-center">
                Social Media application
              </h2>
              <p className="font-po text-white xl:w-[650px] text-justify mt-6 sdv:max-md:font-light">
                This is a social media application. You can connect with
                friends, post any post like Facebook, chat with them, and open a
                group where all friends can talk. You can share photos, voice
                etc with them.
                <br /> Frontend: Vite React JS, Redux, Context API. <br />{" "}
                Design: Material UI.
                <br /> Backend: Firebase.
              </p>
              <div
                className="flex sdv:max-sm:justify-center"
                title="https://trustbookk.netlify.app/"
              >
                <a
                  href="https://trustbookk.netlify.app/"
                  target="_blank"
                  className="mt-5 flex items-center justify-center text-primary bg-secondary py-4 px-12 xl:py-6 lg:px-[82px] rounded-full font-po font-medium md:font-semibold xl:font-bold text-xl hover:bg-[#BFA24F] transition ease-in delay-150 uppercase gap-x-3"
                >
                  <FaExternalLinkAlt className="xl:text-2xl" />
                  visit
                </a>
              </div>
            </div>
            <div
              className="sm:w-1/2 flex items-center justify-center"
              title="https://trustbookk.netlify.app/"
            >
              <Image
                className="xl:w-[600px] xl:h-[560px] lg:w-[440px] lg:h-[400px] md:w-[360px] md:h-[340px] sm:w-[340px] sm:h-[320px] sdv:max-sm:mt-5 rounded-3xl "
                src={socialMedia}
              />
            </div>
          </div>
          <div className="mt-12 sm:!flex gap-5 sdv:max-sm:px-2">
            <div className="sm:w-1/2 flex justify-center flex-col">
              <h2 className="font-po font-bold text-2xl lg:text-4xl text-secondary uppercase sdv:max-sm:text-center">
                E-commerce
              </h2>
              <p className="font-po text-white xl:w-[650px] text-justify mt-6 sdv:max-md:font-light">
                Welcome to our e-commerce hub, where shopping meets simplicity.
                Immerse yourself in a seamless browsing experience with our
                React.js and Tailwind CSS frontend, combining dynamic
                functionality with elegant design. The user interface, adorned
                with Daisy UI, promises a modern and intuitive shopping journey.
                <br />
                Powering the backend is a robust stack of Node.js, Express.js,
                and MongoDB, ensuring secure and efficient handling of your
                e-commerce operations. Join us on this digital retail adventure!
              </p>

              <div
                className="flex sdv:max-sm:justify-center"
                title="https://fatema-agro-client.web.app/"
              >
                <a
                  href="https://fatema-agro-client.web.app/"
                  target="_blank"
                  className="mt-5 flex items-center justify-center text-primary bg-secondary py-4 px-12 xl:py-6 lg:px-[82px] rounded-full font-po font-medium md:font-semibold xl:font-bold text-xl hover:bg-[#BFA24F] transition ease-in delay-150 uppercase gap-x-3"
                >
                  <FaExternalLinkAlt className="xl:text-2xl" />
                  visit
                </a>
              </div>
            </div>
            <div
              className="sm:w-1/2 flex items-center justify-center"
              title="https://fatema-agro-client.web.app/"
            >
              <Image
                className="xl:w-[600px] xl:h-[560px] lg:w-[440px] lg:h-[400px] md:w-[360px] md:h-[340px] sm:w-[340px] sm:h-[320px] sdv:max-sm:mt-5  rounded-3xl "
                src={eCommerce}
              />
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Project;
