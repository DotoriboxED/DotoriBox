import React from "react";

function ThanksPage(){
    return (
      <div className="ThanksPage">
          <div className="textbox1">감사합니다</div>
          <div className="textbox2">
              목적지 도착 후 안전한 하차 상황에서<br/>
              기사님께 말씀드리면, 샘플을 건네주실 거에요
          </div>
          <div className="given-item"></div>
          <div className="textbox3">체험한 샘플을 최대 80% 저렴하게 구매하는 방법</div>
          <div className="textbox4">온라인 할인쿠폰을 보내드립니다</div>

          <input className="inputNumber" type="text"/>
          <div className="horizon"><hr/></div>

          <button className="couponButton">할인쿠폰 받기</button>
      </div>
    )
}

export default ThanksPage;