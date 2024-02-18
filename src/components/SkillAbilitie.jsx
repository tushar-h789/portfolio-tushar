import Container from "./layout/Container";
import Heading from "./layout/Heading";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiNextdotjs,
    SiRedux,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiSass,
    SiTailwindcss,
    SiMui,
    SiBootstrap,
    SiAntdesign,
    SiNpm,
    SiGithub,
    SiGit,
    SiFigma,
    SiTrello,
    SiNetlify,
    SiVercel,
    SiVite,
    SiGatsby,
} from "react-icons/si";

const SkillAbilitie = ({ abiliteSref }) => {
    return (
        <section ref={abiliteSref} className="lg:pt-32 pt-20">
            <Container>
                <Heading title="Skills and Abilities" />
                <div className="mt-12 lg:mt-20 flex flex-wrap xl:gap-8 lg:gap-5 md:gap-4 sm:gap-3 gap-2 sm:justify-center ">
                    <div className="bg-yellow-400 flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiJavascript className="text-black bg-balck xl:text-3xl lg:text-2xl md:xl sm:lg" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg font-medium">
                            JAVASCRIPT
                        </span>
                    </div>
                    <div className="bg-[#61DAFB] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <FaReact className="text-black xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg font-medium">
                            REACT JS
                        </span>
                    </div>
                    <div className="bg-white flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiNextdotjs className="text-black xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg font-medium">
                            Next JS
                        </span>
                    </div>
                    <div className="bg-[#764ABC] flex items-center justify-center py-2 gap-x-3 px-6 shadow-2xl">
                        <SiRedux className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium">
                            REDUX
                        </span>
                    </div>
                    <div className="bg-[#339933] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <FaNodeJs className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium">
                            NODE JS
                        </span>
                    </div>
                    <div className="bg-[#000000] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiExpress className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium">
                            EXPRESS
                        </span>
                    </div>
                    <div className="bg-[#47A248] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiMongodb className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium">
                            MONGODB
                        </span>
                    </div>
                    <div className="bg-[#FFCA28] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiFirebase className="text-black xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck" />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-black font-medium">
                            FIREBASE
                        </span>
                    </div>
                    <div className="bg-[#CC6699] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiSass
                            ase
                            className="text-black xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-black font-medium">
                            SASS
                        </span>
                    </div>
                    <div className="bg-[#06B6D4] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiTailwindcss
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            TAILWIND css
                        </span>
                    </div>
                    <div className="bg-[#007FFF] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiMui
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Material UI
                        </span>
                    </div>
                    <div className="bg-[#7952B3] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiBootstrap
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Bootstrap
                        </span>
                    </div>
                    <div className="bg-[#F75860] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiAntdesign
                            ase
                            className="text-black xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Ant design
                        </span>
                    </div>
                    <div className="bg-[#CB3837] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiNpm
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            npm
                        </span>
                    </div>
                    <div className="bg-[#181717] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiGithub
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            github
                        </span>
                    </div>
                    <div className="bg-[#F05032] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiGit
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            git
                        </span>
                    </div>
                    <div className="bg-[#F24E1E] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiFigma
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Figma
                        </span>
                    </div>
                    <div className="bg-[#0052CC] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiTrello
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Trello
                        </span>
                    </div>
                    <div className="bg-[#00C7B7] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiNetlify
                            ase
                            className="text-black xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Netlify
                        </span>
                    </div>
                    <div className="bg-black flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiVercel
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Vercel
                        </span>
                    </div>
                    <div className="bg-[#542C85] flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiGatsby
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            Gatsby
                        </span>
                    </div>
                    <div className="bg-black flex items-center justify-center xl:py-2 py-2 lg:px-5 md:px-4 sm:px-3 px-2 gap-x-3 xl:px-6 shadow-2xl">
                        <SiVite
                            ase
                            className="text-white xl:text-3xl lg:text-2xl md:xl sm:lg bg-balck"
                        />{" "}
                        <span className="font-po xl:text-2xl lg:text-xl md:text-lg text-white font-medium uppercase">
                            vite
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SkillAbilitie;
