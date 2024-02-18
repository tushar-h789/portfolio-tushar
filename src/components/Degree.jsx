import React, { useEffect } from "react";
import Container from "./layout/Container";
import Heading from "./layout/Heading";
import Subheading from "./layout/Subheading";
import AOS from "aos";
import "aos/dist/aos.css";

const Degree = ({ degreeref }) => {
    useEffect(() => {
        AOS.init({
            duration: "1000",
        });
    }, []);
    return (
        <section ref={degreeref} className="lg:pt-32 pt-20">
            <Container>
                <Heading title="Education" />
                <div className="sm:flex items-center mt-12 lg:mt-20 sdv:max-sm:text-center">
                    <div
                        data-aos="fade-right"
                        className="sm:w-1/2 sdv:max-sm:mt-16 sm:flex sm:items-center sm:justify-center"
                    >
                        <div>
                            <Subheading
                                className="uppercase"
                                title="IT Qualification"
                            />
                            <p className="font-po lg:text-lg xl:text-xl text-white md:w-[350px] lg:w-[450px] mt-2">
                                MERN Full Stack Development - (DIPLOMA) Creative
                                It Institute
                            </p>

                            <p className="font-po pt-20 lg:text-lg xl:text-xl text-white md:w-[350px] lg:w-[450px] mt-2">
                            Complete Web Development -  Programming Hero</p>
                        </div>
                    </div>
                    <div className="sm:w-1/2 sm:flex flex-col justify-center items-center sm:border-secondary sm:max-xl:border-l-[5px] xl:border-l-[10px]">
                        <div>
                            <div
                                className="xl:mt-32 mt-16"
                                data-aos="fade-down"
                            >
                                <Subheading
                                    className="uppercase"
                                    title="BSc Honours"
                                />
                                <p className="font-po lg:text-lg xl:text-xl text-white my-2">
                                    Department of Mathematics
                                    (2019 - Running)
                                </p>
                                <p className="font-po lg:text-lg xl:text-xl text-white">
                                    National University
                                </p>
                            </div>
                            <div
                                className="xl:my-32 sm:my-16 sdv:max-sm:mt-16"
                                data-aos="fade-up"
                            >
                                <Subheading className="uppercase" title="HSC" />
                                <p className="font-po lg:text-lg xl:text-xl text-white my-2">
                                    (Passing Year-2018)
                                </p>
                                <p className="font-po lg:text-lg xl:text-xl sm:max-md:w-[250px] text-white">
                                Bogura Government College, Bogura
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Degree;
