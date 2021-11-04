import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import style from '../components/PageResource';

const { Footer,InputData, Button } = style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  color : #ffffff;
  `;
=======
  background: url("../../src/img/mainimg.png"); 
`;
>>>>>>> 0fe7638e16b2ae70b5397d8cf873401e00866cad

const Header = styled.div`
    font-size : 1.563rem;
    font-weight : bolder;
    padding : calc(35px + 8%) 0 1.8% 0; 
    letter-spacing: -0.25px;
`;

const Info1 = styled.div`
    text-align : left;
    
`;

const Text1 = styled.p`
    font-size:0.813rem; 
    letter-spacing: -0.13px; 
`;

const Info2 =styled(Info1)`
    margin : 90% 0 0 0;
    margin-top : auto;
`;


const Text2_1 = styled.div`
    font-size: 0.938rem;
    letter-spacing: -0.15px;
`;
const Text2_2 = styled.div`
    font-size: 0.813rem;
    letter-spacing: -0.13px;
    margin : 5% 0 5% 0;
`;
const ButtonStart = styled(Button)`
    margin : 15% 0 0 0;
`;
 
function MainPage(){
    return(
        <Main>
            <Header>
                새로운 택시경험
                <br/>   
                도토리박스와 함께
            </Header>
            <Info1>
                <Text1>
                    새로운 상품을 무료로 체험해보세요<br/>
                    숙취해소제, 초콜릿, 등 다양한 무료샘플
                </Text1>
            </Info1>
            <Footer>
            <Info2>
                <Text2_1><b>고유번호를 입력해주세요</b></Text2_1>
                <Text2_2>운전석과 조수석 사이 설치된 도토리박스에 적혀있어요</Text2_2>
            </Info2>
            <InputData />
            <Link to='selectInfo'><ButtonStart>시작하기</ButtonStart></Link>
            </Footer>
            
        </Main>
    )
}
export default MainPage;
