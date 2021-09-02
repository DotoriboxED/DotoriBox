import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Popup from "@components/InvalidPopup";
import { ButtonGroup, Button, Slider } from "@material-ui/core";
import { useLocation } from "react-router";
import {API_URL, CustomerAPI, SampleAPI} from "@api";
import {SampleDto} from "../../../dto/sampleDto";
import BottomButton from "@components/BottomButton";

const Black = styled.div`
  background-color: black;
  height: 3.25rem;
  justify-content: center;
  margin:auto;
  vertical-align:middle;
`;
const Under= styled.div`
  width:100%;
  background-color: white;
  text-align : center;
  
`
const Name=styled.div`
  color:white;
  font-size:1rem;
  margin: 0 0 0 0;
  text-align:center;
  background-color: black;
`;

const Tag=styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 0.7rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.05px;
  color: #131010;
  margin:auto;
  margin-bottom: 0.5rem;
  padding-top:0.5rem;
  padding-bottom:2.1rem;
`

const Title=styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 1.3rem;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 0.53px;
  color: black;
  margin:auto;
  padding-top:3.3rem;
  padding-bottom: 4rem;
`
const Image=styled.img`
  width: 60%;
  margin-bottom: 2rem;
`
const Price= styled.div`
  font-family: SpoqaHanSansNeo;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.05px;
  color: #0035ff;
  margin: auto;
  margin-bottom: 3rem;
`
const Body=styled.div`
  text-align: center;
  margin: auto;
`
const Section=styled.div`
  height:4rem;
  margin: auto;
  width:80%;
  text-align: center;
  vertical-align:middle;
`
const Column=styled.div`
  width:3rem;
  height:3rem;
  text-align: left;
  font-size: 0.9rem;
  margin: auto;
  float:left;
  color:#707070;
  border-right:1px solid #d3d3d3;
`

const Warning=styled.div`
    &:before, &:after {
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: bold;
    margin: 1em 0em;
    margin-bottom: 2rem;
`

const Border = styled.div`
    height: 4rem;
`

interface ISubmit {
    isMale: boolean | undefined,
    age: number | undefined
}

interface IData {
    product: SampleDto | undefined,
    man: string,
    woman: string,
    isOpen: boolean,
    isValid: boolean
}

function App() {
    const history = useHistory();
    const [submitData, setSubmitData] = useState<ISubmit>({
        isMale: undefined,
        age: undefined,
    });
    const [viewData, setViewData] = useState<IData>({
        product: undefined,
        man: 'white',
        woman: 'white',
        isValid: true,
        isOpen: false,
    })
    const location = useLocation();
    const { Code, Sample } = location.state as Record<string, number>;

    const open = () => { setViewData({ ...viewData, isOpen: true }); }
    const close = () => { setViewData({ ...viewData, isOpen: false }); }
    const setFormValid = () => { setViewData({ ...viewData, isValid: true }); }

    const checkIsValid = () => {
        if (submitData.isMale === undefined || submitData.age === undefined)
            setViewData({
                ...viewData,
                isValid: false
            });
        else {
            setViewData({
                ...viewData,
                isOpen: true
            });
        }
    };

    const changeSubmitData = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubmitData({
            ...submitData,
            [e.target.name]: e.target.value
        });
    };

    function getProduct(sample: number){
       SampleAPI.getSample(sample).then((res) => {
            setViewData({...viewData, product: res.data})
        }).catch((err) => {
            console.log(err);
        });
    }

    function action() {
        CustomerAPI.create({
            sampleId: Sample,
            taxiId: Code,
            isMale: submitData.isMale,
            age: submitData.age
        }, {
            sampleId: Sample,
            taxiId: Code
        }).then(res => {
            const id = res.data;
            history.push({ pathname: '/review', state: { userCode: id }});
        });
    }

    useEffect(()=>{
        getProduct(Sample)
    },[])

    useEffect(() => {
        if (submitData.isMale === undefined) {
            setViewData({ ...viewData, man: 'white', woman: 'white' });
        } else if (submitData.isMale){
            setViewData({ ...viewData, man: '#e7713f', woman: 'white' });
        } else {
            setViewData({ ...viewData, man: 'white', woman: '#e7713f' })
        }
    }, [submitData.isMale])

    function valueLabelFormat(value: number) {
        return `${value}대`;
    }

    const handleChange = (event: any, newValue: any) => {
        setSubmitData({...submitData, age: newValue});
    };

    return (
        <Body>
            <Black>
            </Black>
            <Name>SAMPLE CART</Name>
            <Black>
            </Black>
            <Under>
                {
                    viewData.product && <div>
                        <Title><b>{viewData.product.sampleName}</b></Title>
                        <Image src={ API_URL + '/sample/' + Sample + '/image'}/>
                        <Tag>{viewData.product.explain}</Tag>
                        <Price><b>{viewData.product.price}원</b></Price>
                    </div>
                }

                <Warning>
                    샘플 수령을 위해 선택해 주세요.
                </Warning>

                <Section>
                    <Column>
                        <p>성별</p>
                    </Column>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group" style={{width:"10rem",verticalAlign:"middle",textAlign:"center"}}>
                        <Button onClick={()=>setSubmitData({ ...submitData, isMale: true })} style={{background:`${viewData.man}`,color:"#d3d3d3",width:"7rem"}}>남성</Button>
                        <Button onClick={()=>setSubmitData({ ...submitData, isMale: false })} style={{background:`${viewData.woman}`,color:"#d3d3d3",width:"7rem"}}>여성</Button>

                    </ButtonGroup>
                </Section>
                <Section>
                    <Column>
                        <p>연령대</p>
                    </Column>
                    <Slider style={{width:"10rem",margin:"auto",color:"#e7713f"}}
                            value={submitData.age}
                            min={0}
                            step={10}
                            max={100}
                            scale={(x) => x }
                            getAriaValueText={valueLabelFormat}
                            valueLabelFormat={valueLabelFormat}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="nonisOpen-linear-slider"
                    />
                </Section>
                <Border />


            </Under>
            <BottomButton onClick={() => {checkIsValid()}}>샘플 가져가기</BottomButton>
            {/*<Popup isOpen={viewData.isOpen} close={close} code={Code} sample={Sample} gender={submitData.isMale} age={submitData.age}/>*/}
            <Popup isValid={viewData.isValid} setValid={setFormValid} message={<div>지정된 양식을<br/>모두 채워 주세요.</div>}/>
            <Popup
                isValid={!viewData.isOpen}
                setValid={close}
                message={<div>샘플 수령하기 전에<br/>상자에 샘플이 있는지<br/>반드시 확인해주세요</div>}
                action={action}
                buttonMsg='확인했습니다'
            />
        </Body>
    );
}
export default App;
