
const Image = ({ src, className, onClick, width, height }) => {
    return (
        <img
            onClick={onClick}
            height={height}
            width={width}
            className={className}
            src={src}
        />
    );
};

export default Image;
