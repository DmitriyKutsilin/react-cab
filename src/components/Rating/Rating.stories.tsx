import { action } from '@storybook/addon-actions';
import { Rating } from './Rating';
import React, {useState} from "react";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyStars = () => <Rating value={0} setRatingValue={() => {}}/>
export const Rating1Stars = () => <Rating value={1} setRatingValue={() => {}}/>
export const Rating2Stars = () => <Rating value={2} setRatingValue={() => {}}/>
export const Rating3Stars = () => <Rating value={3} setRatingValue={() => {}}/>
export const Rating4Stars = () => <Rating value={4} setRatingValue={() => {}}/>
export const Rating5Stars = () => <Rating value={5} setRatingValue={() => {}}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return (
        <Rating value={rating} setRatingValue={setRating}/>
    )
}