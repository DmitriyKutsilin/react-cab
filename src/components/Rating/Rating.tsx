import React from "react";
import {RatingValueType} from "../../App";

type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type StarProps = {
    selected: boolean
    onClick: () => void
}

export const Rating = ({value, onClick}: RatingProps) => {
    return (
        <div>
            <Star selected={value > 0} onClick={() => onClick(1)}/>
            <Star selected={value > 1} onClick={() => onClick(2)}/>
            <Star selected={value > 2} onClick={() => onClick(3)}/>
            <Star selected={value > 3} onClick={() => onClick(4)}/>
            <Star selected={value > 4} onClick={() => onClick(5)}/>
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