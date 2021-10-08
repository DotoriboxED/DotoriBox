import React, {useMemo} from 'react';
import StarIcon from './StarComponent';


const App = (props: any) => {
    const { index, rating, onSaveRating } = props;

    const fillColor = useMemo(() => {
        return rating >= index;
    }, [rating, index])

    return (
        <div
            onClick={() => onSaveRating(index)}
        >
            <div>
                <StarIcon isStar={fillColor} />
            </div>
        </div>
    )
}

export default App;