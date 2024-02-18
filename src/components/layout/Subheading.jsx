
const Subheading = ({ className, title }) => {
    return (
        <h3
            className={`font-po font-semibold text-xl md:text-[32px] text-secondary ${className}`}
        >
            {title}
        </h3>
    );
};

export default Subheading;
