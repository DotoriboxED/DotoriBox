import React from "react";
import "../components/MainPage.css";
import {Link} from "react-router-dom";

function MainPage(){
    return(
        <div className="main">
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
            
            <input className="inputNumber" type="text"/>
            <div className="horizon"><hr/></div>
            
            <Link to='selectInfo'><button className="startButton">시작하기</button></Link>
        </div>
    )
}


export default MainPage;
