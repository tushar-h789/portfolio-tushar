
import { FaChevronRight } from "react-icons/fa6";
const SampleNextArrow = ({ style, onClick }) => {
    return (
        <span
            className=" absolute sdv:max-xl:-bottom-14 sm:left-28 sdv:max-sm:right-5  xl:bottom-8 !flex h-10 w-10 items-center justify-center  rounded-full hover:bg-secondary sm:h-10 sm:w-10 lg:h-16  lg:w-16 group transition ease-in delay-150 cursor-pointer"
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <FaChevronRight className="text-3xl text-secondary group-hover:text-primary transition ease-in delay-150" />
        </span>
    );
};

export default SampleNextArrow;
