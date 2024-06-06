import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitleProps = {
    title: string
}

function App() {
    return (
        <div>
            <PageTitle title={"App Page"}/>
            <Rating value={2}/>
            <Accordion title={"First"}/>
            <Rating value={4}/>
            <Accordion title={"Second"}/>
        </div>
    );
}

const PageTitle = ({title}: PageTitleProps) => {
    return (
        <h1>{title}</h1>
    )
}



export default App;
