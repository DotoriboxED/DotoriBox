import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import BackGround from "./elements/BackGround";
import InputComponent from "@pages/customer/StartPage/elements/Input";

function StartPage() {
    const [Code, setCode] = useState();
    const [isExist, setIsExist] = useState(true);
    const history = useHistory();

    return (
        <BackGround>
            <InputComponent />
        </BackGround>
    )
}

export default StartPage;