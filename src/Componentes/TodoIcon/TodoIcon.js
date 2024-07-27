import { ReactComponent as CheckSVG } from '../Imagenes/check.svg';
import { ReactComponent as DeleteSVG } from '../Imagenes/delete.svg';
import '../TodoIcon/TodoIcon.css';

const iconTypes = {
    "check": (color) =>
        <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) =>
        <DeleteSVG className="Icon-svg" fill={color} />,
};
function TodoIcon({ type, color, onClick }) {
    return (
        <span
        className={`Icon-container 
        Icon-container-${type}`}
        onClick={onClick}
        >
        {iconTypes[type](color)}
        </span>)
}

export default TodoIcon;