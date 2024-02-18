
import Container from "./layout/Container";
import Image from "./layout/Image";
import bannerImg from "../assets/banner.png";
import resume from "../assets/MERN-stack-resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="xl:pt-40 lg:pt-32 md:pt-24 pt-20">
            <Container>
                <div className="flex justify-between sdv:max-sm:flex-col-reverse sdv:max-md:flex-wrap">
                    <div className="flex flex-col justify-center sm:w-[60%]">
                        <h1 className="font-po font-bold lg:text-[60px] md:text-[40px]  xl:text-[80px] text-white sdv:max-md:text-[38px] sdv:max-sm:mx-auto sdv:max-sm:mt-5">
                            Hi I'm{" "}
                            <TypeAnimation
                                sequence={["MERN", 1000, " FULL", 1000]}
                                wrapper="span"
                                speed={1}
                                style={{ color: "#C8B16F" }}
                                repeat={Infinity}
                                cursor={false}
                            />{" "}
                            <br />
                            stack developer
                        </h1>

                        <div className="flex sdv:max-lg:gap-x-3 sdv:max-sm:mx-auto lg:mt-14 sm:mt-8 mt-4">
                            <a
                                href={resume}
                                download
                                className="flex items-center justify-between text-primary bg-secondary py-4 px-12 xl:py-6 lg:px-[82px] rounded-full font-po font-medium md:font-semibold xl:font-bold text-xl hover:bg-[#BFA24F] transition ease-in delay-150  gap-x-3"
                            >
                                <FaDownload className="text-2xl" /> CV
                            </a>
                            <a
                                href={resume}
                                download
                                className="sdv:max-lg:flex items-center justify-between text-primary bg-secondary py-4 px-6 xl:py-6 xl:px-[52px] rounded-full font-po font-medium md:font-semibold xl:font-bold text-xl hover:bg-[#BFA24F] transition ease-in delay-150 gap-x-3 hidden"
                            >
                                <FaDownload className="text-2xl" /> RESUME
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto w-full sm:w-[40%]">
                        <Image className="md:w-[550px] rounded-full" src={bannerImg} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
