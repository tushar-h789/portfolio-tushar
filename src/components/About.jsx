import Container from "./layout/Container";
import Heading from "./layout/Heading";
import Image from "./layout/Image";
import aboutImg from "../assets/about.jpeg";
import Subheading from "./layout/Subheading";
import {
    SiLinkedin,
    SiFacebook,
    SiDiscord,
    SiGithub ,
    SiWhatsapp,
} from "react-icons/si";

const About = ({ aboutref }) => {
    return (
        <section ref={aboutref} className="lg:pt-32 pt-20">
            <Container>
                <Heading title="ABOUT" />
                <div className="sm:flex mt-12 lg:mt-20 gap-5">
                    <div className="sm:w-1/2 sdv:max-xl:flex justify-center items-center">
                        <Image
                            className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-[28px] object-cover"
                            src={aboutImg}
                        />
                    </div>
                    <div className="sm:w-1/2 sdv:max-sm:mt-5 sdv:max-sm:text-center">
                        <Subheading title="About me" />
                        <p className="font-po xl:text-2xl lg:text-xl text-white text-justify mt-5">
                        I love discovering new things. I want a job where my passion and skills can help the company. I stand out because I see things differently and pay close attention to details. I enjoy solving problems in creative ways. I aim to make a positive impact wherever I go.
                        </p>
                        <Subheading className="xl:mt-12 mt-10" title="Follow Me" />
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
                        {/* discordapp.com/users/967659054275100702 */}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
