import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';  

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <div className="navbar">
                <div className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </div>
            </div>
            {
                sidebar ?
                <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <div onClick={showSidebar} className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </div>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                {/* 이부분 확인 */}
                                <div><span><a href="https://www.notion.so/dotoribox/b74bc4b7643e4fc08ff5d0b4100451b4">{item.title}</a></span></div>
                            </li>
                        )
                    })}
                </ul>
                </nav> :<div></div> 
            }
        </>
    )
    
}

export default Navbar;