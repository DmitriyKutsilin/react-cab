import React, {useState} from "react";
import {RatingValueType} from "../../App";

type RatingProps = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

type StarProps = {
    setValue: () => void
    selected: boolean
}

export const SelfControlledRating = ({defaultValue, onChange}: RatingProps) => {
    const [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); onChange(5)}}/>
        </div>
    )
}

const Star = ({selected, setValue}: StarProps) => {
    return (
        <span onClick={setValue} style={{cursor: 'pointer', margin: '10px'}}>
            { selected ? <b>star </b> : 'star ' }
        </span>
    )
}