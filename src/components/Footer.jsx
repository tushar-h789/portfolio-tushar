import React from "react";
import Container from "./layout/Container";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import Subheading from "./layout/Subheading";
import {
    SiLinkedin,
    SiFacebook,
    SiDiscord,
    SiGithub,
    SiWhatsapp,
} from "react-icons/si";

const Footer = () => {
    return (
        <footer className="border-t border-secondary pt-12 mt-32">
            <Container>
                <div className="sm:flex">
                    <div className="sm:w-1/2">
                        <div>
                            <h4 className="font-po text-secondary text-2xl uppercase">
                                Md Tushar Hossen
                            </h4>
                            <p className="flex items-center gap-x-3 font-po text-white mt-7 mb-3">
                                <MdEmail className="text-2xl" />
                                tushar.mern2201@gmail.com
                            </p>
                            <p className="flex items-center gap-x-3 font-po text-white mb-3">
                                <MdCall className="text-2xl" />
                                +8801318184499
                            </p>
                            <p className="flex items-center gap-x-3 font-po text-white">
                                <MdLocationOn className="text-2xl" />
                                Mirpur, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-1/2 text-center sdv:max-sm:mt-7">
                        <Subheading title="Follow me" />
                        <div className="flex xl:text-5xl sm:text-3xl text-2xl md:gap-x-7 gap-x-5 mt-5 sdv:max-sm:justify-center">
                            <a
                                href="https://www.linkedin.com/in/tushar-h789/"
                                target="_blank"
                            >
                                <SiLinkedin className="text-[#0077b7]" />
                            </a>
                            <a
                                href="https://www.facebook.com/tusharH789"
                                target="_blank"
                            >
                                <SiFacebook className="text-[#316FF6]" />
                            </a>
                            <a
                                href="https://github.com/tushar-h789"
                                target="_blank"
                            >
                                <SiGithub  className="text-white" />
                            </a>
                            <a
                                href="https://wa.me/+8801318184499"
                                target="_blank"
                            >
                                <SiWhatsapp className="text-[#25D366]" />
                            </a>
                            <a
                                href="http://discordapp.com/users/1030911367684816987"
                                target="_blank"
                            >
                                <SiDiscord className="text-[#7289DA]" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center xl:text-lg sdv:max-md:text-sm font-extralight text-white font-po mt-24 mb-5">
                    <p>
                        Copyright 2023. All rights reserved by Tushar Hossen
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
