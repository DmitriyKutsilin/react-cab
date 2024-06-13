import { action } from '@storybook/addon-actions';
import { Rating } from './Rating';
import React, {useState} from "react";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating,
}

const callback = action('increase or decrease rating')

export const EmptyRating = () => <Rating value={0} setRatingValue={() => {}}/>
export const Rating1 = () => <Rating value={1} setRatingValue={() => {}}/>
export const Rating2 = () => <Rating value={2} setRatingValue={() => {}}/>
export const Rating3 = () => <Rating value={3} setRatingValue={() => {}}/>
export const Rating4 = () => <Rating value={4} setRatingValue={() => {}}/>
export const Rating5 = () => <Rating value={5} setRatingValue={() => {}}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return (
        <Rating value={rating} setRatingValue={setRating}/>
    )
}