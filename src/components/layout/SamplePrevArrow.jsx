
import { FaChevronLeft } from "react-icons/fa6";
const SamplePrevArrow = ({ style, onClick }) => {
    return (
        <span
            className=" absolute sdv:max-xl:-bottom-14 bottom-0 sdv:max-sm:left-5 xl:bottom-8 left-0 xl:z-10 !flex lg:h-16 lg:w-16 sm:max-md:h-10 sm:max-md:w-10 h-10 w-10 items-center justify-center rounded-full hover:bg-secondary group transition ease-in delay-150  cursor-pointer"
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <FaChevronLeft className="text-3xl text-secondary group-hover:text-primary transition ease-in delay-150" />
        </span>
    );
};

export default SamplePrevArrow;
