
const ListItem = ({ itemName, className, href, onClick }) => {
    return (
        <li className={className}>
            <a className="cursor-pointer" to={href} onClick={onClick}>
                {itemName}
            </a>
        </li>
    );
};

export default ListItem;
