import React, {useState} from "react";
import {Link} from "react-router-dom";
import Progressbar from "../components/Progressbar";
import "../components/SelectInfoPage.css";
import Dropdown from '../components/Dropdown.js';

function SelectInfoPage(){
    const [gender, setGender] = useState(undefined);

    const handleChangeButtonCololr = () => {
        setGender(!gender);
        console.log(gender);
    }


    // const [selectAge,setSelectAge] = useState();

    return(
        <div className="SelectInfo">
            <Progressbar/>
            <div className="textbox1">
                꼭 맞는 샘플을<br/>
                추천해드릴게요
            </div>
            <div className="textbox2">
                택시 안 다양한 샘플 중<br/>
                제일 적합한 제품을 알려드려요
            </div>
            <div className="textbox3">
                성별
            </div>
            <button className="genderM" onClick={handleChangeButtonCololr} style={gender===true?{backgroundColor:'#c4442a'}:{backgroundColor:'#fff'}}>남성</button>
            <button className="genderW" onClick={handleChangeButtonCololr} style={gender===false?{backgroundColor:'#c4442a'}:{backgroundColor:'#fff'}}>여성</button>            
            <div className="textbox4">
                연령대
            </div>
            
            <div className="age-dropdown">
                {/* <Dropdown/> */}
            </div>

            <Link to='recommend'><button className="okayButton">확인</button></Link>
        </div>
    )
}



export default SelectInfoPage;