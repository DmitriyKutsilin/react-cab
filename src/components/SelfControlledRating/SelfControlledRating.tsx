import React, {useState} from "react";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarProps = {
    setValue: () => void
    selected: boolean
}

export const SelfControlledRating = ({}: RatingProps) => {
    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
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