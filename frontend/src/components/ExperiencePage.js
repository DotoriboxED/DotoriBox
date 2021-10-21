import React from "react";

function ExperiencePage(){
    return(
        <div className="experiencePage">
            <div className="textbox1">체험하기</div>
            <div className="horizon"><hr/></div>
            <span className="prod-name">제품명</span><br/>
            <span className="prod-type">식품의 유형</span><br/>
            <span className="prod-way">섭취방법</span><br/>
            <span className="prod-ingredient">주성분 및 함량</span><br/>
            <div className="notice">
                마지막으로,<br/>
                탑승하신 택시에 해당 샘플이 있는지 확인해주세요
            </div>

            <button className="take-button">확인 후 가져가기</button>
        </div>
    )
}

export default ExperiencePage;