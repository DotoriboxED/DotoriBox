import React, {useState, useEffect} from 'react';
import Card from '@pages/customer/SelectPage/elements/Card';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import { TaxiAPI } from "@api"
import {useLocation} from 'react-router';
import WarningPopup from '@components/InvalidPopup';
import {SampleDto} from "../../../../dto/sampleDto";
import {StockDto} from "../../../../dto/stockDto";
import BottomButton from "@components/BottomButton";

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

const List = styled.div`
  padding: 1em 1rem 3.5rem 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function App() {
    const [Products, setProducts] = useState<StockDto[]>([]);
    const [Images, setImages] = useState([]);
    const [Select, setSelect] = useState();
    const [isValid, setIsValid] = useState(true);
    const history = useHistory();
    const location: any = useLocation();

    const Code = location.state.Code;

    const checkValid = () => {
        if (Select === undefined)
            setIsValid(false);
        else
            history.push({pathname: './userinfo', state: {Code: Code, Sample: Select}});
    }

    useEffect(() => {
        getProduct()
    }, []);

    function getProduct() {
        TaxiAPI.findStock(Code, { isDeleted: false }).then((res) => {
            const data = res.data;
            const result: StockDto[] = [];

            data.map((elem: StockDto) => {
                return result.push(elem)
            });

            console.log(result);

            if (res.data[0] !== undefined)
                setProducts(result);
        });

    }

    const renderLists = (Products.map((product, index) => {
        return <Card image={Images[index]}
                     sample={product.sample}
                     amount={product.stock}
                     select={Select}
                     setSelect={setSelect}
                     id={product.id}
                     sampleInfo={product.sample!.sampleInfo}
        />
    }));

    return (
        <Main>

            <List>
                {renderLists}
            </List>
                <BottomButton onClick={() => {
                    checkValid()
                }}><b>카트로 이동하기</b></BottomButton>
            <WarningPopup isValid={isValid} setValid={setIsValid} message={<div>상품을 하나<br/>골라 주세요.</div>}/>
        </Main>
    );
}

export default App;