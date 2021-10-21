import React from "react";
import Menu from "../img/menu.png" 
import Dotorilogo_color from "../img/dotorilogo_color.png"


function RecommendPage (){
    return(
        <div className="recommendPage">
        
            <div className="textbox1">추천샘플</div>
            <div className="textbox2">
                승객분의 성별,연령대,시간에 맞는 샘플부터 보여드려요<br/>
                원하시는 샘플을 클릭해주세요
            </div>
            <div className="recommend-box"> </div>
            <div className="textbox3">모든 샘플</div>
            <div className="textbox4">택시에 있는 모든 종류의 샘플을 보여드려요</div>
            <div className="allsample-box"> </div>
        </div>
    )
}

export default RecommendPage;