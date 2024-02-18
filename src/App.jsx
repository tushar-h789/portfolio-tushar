import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import Image from "./components/layout/Image";
import logo from "./assets/logo.png";
import resume from "./assets/MERN-stack-resume.pdf";
import Container from "./components/layout/Container";
import ListItem from "./components/layout/ListItem";
import { FaDownload, FaBars } from "react-icons/fa";
import Banner from "./components/Banner";
import Project from "./components/Project";
import SkillAbilitie from "./components/SkillAbilitie";
import Degree from "./components/Degree";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    let navref = useRef();
    let projectref = useRef();
    let abiliteSref = useRef();
    let degreeref = useRef();
    let aboutref = useRef();
    let contactref = useRef();
    let [show, setShow] = useState(true);

    useEffect(() => {
        function scrollWidth() {
            if (window.innerWidth < 1024) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        scrollWidth();
        window.addEventListener("resize", scrollWidth);
    }, []);

    const handleClick = (elref) => {
        window.scrollTo({ top: elref.current.offsetTop, behavior: "smooth" });
        function scrollWidth() {
            if (window.innerWidth < 1024) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        scrollWidth();
    };

    return (
        <>
            <nav
                ref={navref}
                className="md:py-4 p-2.5 fixed bg-primary w-full drop-shadow-xl z-50"
            >
                <Container>
                    <div className="flex items-center justify-between">
                        <Image
                            className="xl:w-[110px] w-20 h-[80] self-center"
                            src={logo}
                        />
                        <FaBars
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-3 ml-auto block cursor-pointer lg:hidden text-secondary text-2xl"
                        />
                        {show && (
                            <div className="flex lg:items-center sdv:max-lg:flex-col xl:gap-x-[42px] gap-x-5  sdv:max-lg:gap-y-5 sdv:max-lg:mt-10">
                                <ul className="uppercase flex sdv:max-lg:items-end lg:items-center sdv:max-lg:flex-col xl:gap-x-[42px] gap-x-5 sdv:max-lg:gap-y-3">
                                    <ListItem
                                        className="text-secondary font-po font-medium xl:text-lg relative listitem"
                                        itemName="HOME"
                                        onClick={() => handleClick(navref)}
                                    />
                                    <ListItem
                                        className="text-secondary font-po font-medium xl:text-lg relative listitem"
                                        itemName="PROJECTS"
                                        onClick={() => handleClick(projectref)}
                                    />
                                    <ListItem
                                        className="text-secondary font-po font-medium xl:text-lg relative listitem"
                                        itemName="Abilities"
                                        onClick={() => handleClick(abiliteSref)}
                                    />
                                    <ListItem
                                        className="text-secondary font-po font-medium xl:text-lg relative listitem"
                                        itemName="Education"
                                        onClick={() => handleClick(degreeref)}
                                    />
                                    <ListItem
                                        className="text-secondary font-po font-medium xl:text-lg relative listitem"
                                        itemName="ABOUT"
                                        onClick={() => handleClick(aboutref)}
                                    />
                                    <ListItem
                                        className="text-secondary font-po font-medium xl:text-lg relative listitem"
                                        itemName="CONTACTS"
                                        onClick={() => handleClick(contactref)}
                                    />
                                </ul>

                                <a
                                    href={resume}
                                    download
                                    className="flex items-center justify-between text-primary bg-secondary py-3 px-5 xl:py-6 xl:px-[52px] gap-x-2 rounded-full font-po font-medium xl:font-bold xl:text-xl xl:gap-x-3 hover:bg-[#BFA24F] transition ease-in delay-150 sdv:max-lg:hidden"
                                >
                                    <FaDownload className="xl:text-2xl" />{" "}
                                    RESUME
                                </a>
                            </div>
                        )}
                    </div>
                </Container>
            </nav>

            <Banner />
            <Project projectref={projectref} />
            <SkillAbilitie abiliteSref={abiliteSref} />
            <Degree degreeref={degreeref} />
            <About aboutref={aboutref} />
            <Contact contactref={contactref} />
            <Footer />
        </>
    );
}

export default App;
