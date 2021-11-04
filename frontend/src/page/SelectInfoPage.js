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


    const [selected,setSelected] = useState("연령대");

    const handleSubmit = (e) => {
        e.preventDefault();
       this.props.onCreate(this.state);
      }

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
            <form onSubmit={this.handleSubmit}>
                <button className="genderM" onClick={handleChangeButtonCololr} style={gender===true?{backgroundColor:'#c4442a'}:{backgroundColor:'#fff'}}>남성</button>
                <button className="genderW" onClick={handleChangeButtonCololr} style={gender===false?{backgroundColor:'#c4442a'}:{backgroundColor:'#fff'}}>여성</button>            
                <Dropdown selected={selected} setSelected={setSelected}/>
                <Link to='recommend'><button type ="submit" className="okayButton">확인</button></Link>
            </form>
            
                


            
        </div>
    )
}



export default SelectInfoPage;