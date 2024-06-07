import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";

type PageTitleProps = {
    title: string
}

function App() {
    return (
        <div>
            <PageTitle title={"App Page"}/>
            <OnOff/>
            <OnOff/>
            <SelfControlledAccordion title={'Self-Controlled Accordion'}/>
            <SelfControlledRating/>
            {/*<Rating value={2}/>*/}
            {/*<Accordion title={"First Accordion"} collapsed={true}/>*/}
            {/*<Accordion title={"Second Accordion"} collapsed={false}/>*/}
        </div>
    );
}

const PageTitle = ({title}: PageTitleProps) => {
    return (
        <h1>{title}</h1>
    )
}



export default App;
