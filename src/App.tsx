import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";
import {SelfControlledOnOff} from "./components/SelfControlledOnOff/SelfControlledOnOff";

type PageTitleProps = {
    title: string
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [onOffStatus, setOnOffStatus] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={"App Page"}/>
            {/*<SelfControlledOnOff/>*/}
            <OnOff status={onOffStatus} setOnOffStatus={setOnOffStatus}/>
            {/*<SelfControlledAccordion title={'Self-Controlled Accordion'}/>*/}
            {/*<SelfControlledRating onChange={() => {}}/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion title={"First Accordion"} collapsed={collapsed} onChange={setCollapsed}/>
        </div>
    );
}

const PageTitle = ({title}: PageTitleProps) => {
    return (
        <h1>{title}</h1>
    )
}



export default App;
