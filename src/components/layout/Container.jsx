

const Container = ({ children, className }) => {
    return (
        <div className={`max-w-[1594px] px-2 md:px-2.5 mx-auto ${className}`}>{children}</div>
    );
};

export default Container;
