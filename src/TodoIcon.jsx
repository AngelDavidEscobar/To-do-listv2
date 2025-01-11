import { FaCheck as CheckSVG } from "react-icons/fa";
import { CgClose as DeleteSVG } from "react-icons/cg";
import './TodoIcon.css';

const iconTypes={
    "check": (color) =>
    <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) =>
    <DeleteSVG className="Icon-svg" fill={color}/>
};

function TodoIcon({ type, color, onClick }){
    return(      
        <span 
          className={`Icon-container Icon-container-${type}`}
          onClick={onClick}
        >
            
            {iconTypes[type](color)}  

        </span>
    )
    
}

export {TodoIcon};