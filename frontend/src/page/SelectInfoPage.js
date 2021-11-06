import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";  
import Progressbar from "../components/Progressbar";
import "../components/SelectInfoPage.css";
import Dropdown from '../components/Dropdown.js';
import style from '../components/PageResource';
import styled from "styled-components";

const {Button,Footer} = style

const Main = styled.div`
  height: 100%;
  `;

const Info1 = styled.div`
    text-align : left;
    padding : calc(35px + 8%) 0 1.8% 0;
`;

const Info2 = styled.div`
    text-align : left;
    padding : 1.8% 0 0 0;
`;

const Info3 = styled.div`
    text-align : left;
    padding : calc(35px + 8%) 0 1.8% 0;
`;
const Text = styled.div`
    font-size: 1.563rem;
    letter-spacing: -0.25px;
`;
const TextSmall = styled.div`
    color: #6a707e;
    letter-spacing: -0.13px;
    font-size: 0.813rem;
`;
const TextGender = styled.div`
    font-size: 0.813rem;
    font-weight: bold;
    letter-spacing: -0.13px;
`;

const FooterSubmit = styled(Footer)`
    margin-top : auto;
`;

function SelectInfoPage(){
    const [gender, setGender] = useState(undefined);

    useEffect(() => {
    }, [gender])

    const [selected,setSelected] = useState("연령대");

    return(
        <Main>
            <Info1>
                <Text>
                    꼭 맞는 샘플을<br/>
                    추천해드릴게요
                </Text>
            </Info1>
            
            <Info2>    
                <TextSmall>
                    택시 안 다양한 샘플 중<br/>
                    제일 적합한 제품을 알려드려요
                </TextSmall>
            </Info2>

            <Info3>
                <TextGender>
                    성별
                </TextGender>
            </Info3>
                <button className="genderM" onClick={() => setGender(true)} style={gender===true?{backgroundColor:'#c4442a',color:'#fff'}:{backgroundColor:'#fff'}}>남성</button>
                <button className="genderW" onClick={() => setGender(false)} style={gender===false?{backgroundColor:'#c4442a',color:'#fff'}:{backgroundColor:'#fff'}}>여성</button>            
          
                <Dropdown selected={selected} setSelected={setSelected}/>
            <Footer>
                <Link to='recommend'><Button>확인</Button></Link>
            </Footer>
        </Main>
    )
}



export default SelectInfoPage;