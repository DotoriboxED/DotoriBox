import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'


const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("src/img/mainimg.png"); 
`;

const Textbox_1 = styled.div`
    text-align: left;
    height: 70px;
    width: 250px;
    padding : 18px 12px 12px;
    font-size: 25px;
`;

const Textbox_2 = styled.div`
    text-align: left;
    font-size: 13px ;
    padding :5px 12px 12px;
`; 

const Textbox2_2 = styled.div`
    padding-top: 6px; 
`;

const Textbox_3 = styled.div`
    text-align: left;
    font-size: 20px;
    padding :300px 12px 0px 12px;
`;

const Textbox_4 = styled.div`
    text-align: left;
    font-size: 13px;
    padding :6px 12px 12px;
`;


 
function MainPage(){
    return(
        <Main>
            <div className="textbox1">
                새로운 택시경험
                <br/>   
                도토리박스와 함께
            </div>
            <div className="textbox2">
                <div className="textbox2_1">새로운 상품을 무료로 체험해보세요</div>
                <div className="textbox2_2">숙취해소제, 초콜릿, 등 다양한 무료샘플</div>
            </div>
            <div className="textbox3">
                고유번호를 입력해주세요
            </div>
            <div className="textbox4">
                운전석과 조수석 사이 설치된 도토리박스에 적혀있어요
            </div>
            
            <Link to='selectInfo'><button className="startButton">시작하기</button></Link>
        </Main>
    )
}
export default MainPage;
