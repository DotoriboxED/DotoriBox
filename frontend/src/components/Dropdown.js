import React ,{useState} from 'react';
import './Dropdown.css';

function Dropdown({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ['10대','20대', '30대','40대','50대','60대 이상'];

    return(
    <div className="dropdown">
        <div className="dropdown-btn" onClick={(e)=>
        setIsActive(!isActive)}>
            {selected}
        </div>
        {isActive && (
        <div className="dropdown-content">
            {options.map(option=>(
                <div onClick={(e)=>{
                    setSelected(option);
                    setIsActive(false);
                }}
                className="dropdown-item">
                    {option}
                </div>
            ))}
        </div>
        )}
    </div>
    );
 
}

export default Dropdown;