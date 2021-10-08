import React from 'react';

import StarSVG from '@images/star.svg';
import NonStarSVG from '@images/nonstar.svg';


const App = (props: any) => {
    const { isStar } = props;

    return (
        <div>
            {
                isStar ? <div><img src={StarSVG}/></div>
                    : <div><img src={NonStarSVG}/></div>
            }
        </div>
    )
}

export default App;