import React, {ReactChild} from 'react';
import styled from 'styled-components';

import Background from '@images/background2.png';

type IProps = {
    children?: ReactChild[] | ReactChild;
}

const Under = styled.div`
  background-image: url(${Background});
  height: 100%;
  margin:auto;
  background-size:cover;
  background-repeat : no-repeat;
  background-position: center;
`;

function BackGround({ children }: IProps) {
    return (
        <Under>
            { children }
        </Under>
    )
}

export default BackGround;