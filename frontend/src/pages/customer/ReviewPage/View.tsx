import React, { useState } from 'react';
import {RouteComponentProps, useHistory, useLocation} from "react-router-dom";
import styled from 'styled-components';
import Stars from './elements/Star';
import { CustomerAPI } from "@api";
import BackGround from "@pages/customer/ReviewPage/elements/BackGrond";

const Upper = styled.div`
  width:90%;
  height:30%;
  justify-content: center;
  margin:auto;
  text-align: left;
  `
const Under = styled.div`
  width:100%;
  height:70%;
  margin:auto;
  background-size:cover;
  background-repeat : no-repeat;
  background-position: center;
`;
const Title1 = styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 2.1rem;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 0.53px;
  text-align: left;
  color: #ffffff;
  padding-top:4rem;
  margin-bottom: 1rem;
`
const Title2 = styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 0.8rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.07px;
  text-align: left;
  color: #ffffff;
  margin:auto;
  padding-top:0.5rem;
`;

const StarBox = styled.div`
  width: 100%;
  display: flex;
`

const InputBox = styled.div`
  border: solid 0.5px #a3a0a0;
  height: 14rem;
  margin-top: 1rem;
`

const Input = styled.textarea`
  margin:auto;
  text-align: left;
  width: 95%;
  height: 13rem;
  padding: 0.5rem 0.5rem 0.313rem 0.5rem;
  background-color:transparent;
  color:#e7713f;
  border: none;
`
const Button = styled.button`
  width: 5rem;
  height: 2rem;
  margin: 0.625rem 7.938rem 0.281rem 0;
  background-color: #ffffff;
  font-family: SpoqaHanSansNeo;
  font-size: 0.313rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.05px;
`

const Hr = styled.hr`
  width: 100%;
  color: #e7713f;
  margin-top:0.9rem;
`

interface ILocation {
    userCode: string;
}

function ReviewPage() {
    const [Review, setReview] = useState("");
    const [Rating, setRating] = useState(5);
    const history = useHistory();
    const location = useLocation();

    const { userCode } = location.state as ILocation;

    return (
        <BackGround>
            <Upper>
                <Title1>Thank you</Title1>
                <Title2>기사님은 목적지 도착 후 하차할 때 샘플을 전달해주실 거에요.</Title2>
                <Title2>샘플과 함께 오늘도 좋은하루 되세요</Title2>
                <Hr/>
                <StarBox>
                    {[1, 2, 3, 4, 5].map((idx) => {
                        return (
                            <Stars
                                index={idx}
                                rating={Rating}
                                onSaveRating={setRating}
                            />
                        )
                    })}
                </StarBox>
                <Title2>도토리박스와 함께한 이동은 어떠셨나요?</Title2>
                <Title2>잠시 시간을 내어 알려주세요(선택)</Title2>
                <InputBox>
                    <Input
                        placeholder="의견을 자유롭게 적어주세요"
                        value={Review}
                        onChange={({ target: { value } }) => setReview(value)}
                    />
                </InputBox>
                <br />
                <Button onClick={() => {
                    history.push('/');
                    CustomerAPI.createEvaluate(parseInt(userCode), { review: Review, score: Rating })
                        .then(res => history.push('/'));
                }}>Enter</Button>
            </Upper>
            <Under >
            </Under>
        </BackGround>
    );
}

export default ReviewPage;