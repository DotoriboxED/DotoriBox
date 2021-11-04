import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import styled from "styled-components";
import {ReactComponent as LogoImg} from "../img/logo_orange.svg";

const Logo = styled(LogoImg)`
  height: 17px;
  margin: auto auto auto 25px;
`;

const NavBar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  vertical-align: center;
`;

const MenuIcon = styled(FaIcons.FaBars)`
  margin: auto 25px auto auto;
  color: #afabab;
`;

const CloseIcon = styled(FaIcons.FaTimes)`
  margin: auto 25px auto auto;
  color: #afabab;
`;

const NavMenu = styled.nav`
  position: fixed;
  top: 80px;
  width: 100%;
  background: white;
  border-bottom: 1.8px solid #afabab;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0 0 0 -15px;
`;

const ListContent = styled.li`
  padding: 0 0 1.6rem 0;
`;

const ListContentText = styled.a`
  text-decoration: none;
  color: #6a707e;
  font-size: 0.938rem;
  line-height: 1.3rem;
  font-weight: 500;
`

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavBar>
        <Logo fill="#c4442a"/>
        {
          sidebar ? <CloseIcon onClick={showSidebar}/> : <MenuIcon onClick={showSidebar} />
        }
      </NavBar>
      {
        sidebar && 
          <NavMenu>
            <List>
              {SidebarData.map((item, index) => {
                return (
                  <ListContent key={index}>
                    {/* 이부분 확인 */}
                      <ListContentText href="https://www.notion.so/dotoribox/b74bc4b7643e4fc08ff5d0b4100451b4">
                        {item.title}
                      </ListContentText>
                  </ListContent>
                );
              })}
            </List>
          </NavMenu>
      }
    </>
  );
}

export default Navbar;