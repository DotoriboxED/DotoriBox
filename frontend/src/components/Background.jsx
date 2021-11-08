import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import image from "../img/mainimg.png";

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`;

const IMain = styled(Main)`
  background-image : url(${image});
  background-size : cover;
  background-repeat : no-repeat;
  background-position : center;
`;

function Background ({ children }) {
  const location = useLocation();

  if (location.pathname === "/")
    return (
      <IMain>
        { children }
      </IMain>
    )
  else
    return(
      <Main>
        {children}
      </Main>
    )

}

export default Background;