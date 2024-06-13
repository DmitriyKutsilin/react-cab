import React from "react";
import {RatingValueType} from "../../App";

type RatingProps = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

type StarProps = {
    selected: boolean
    onClick: () => void
}

export const Rating = ({value, setRatingValue}: RatingProps) => {
    return (
        <div>
            <Star selected={value > 0} onClick={() => setRatingValue(1)}/>
            <Star selected={value > 1} onClick={() => setRatingValue(2)}/>
            <Star selected={value > 2} onClick={() => setRatingValue(3)}/>
            <Star selected={value > 3} onClick={() => setRatingValue(4)}/>
            <Star selected={value > 4} onClick={() => setRatingValue(5)}/>
        </div>
    )
}

const Star = ({selected, onClick}: StarProps) => {
    return (
        <span onClick={onClick} style={{cursor: 'pointer', margin: '10px'}}>
            { selected ? <b>star </b> : 'star ' }
        </span>
    )
}