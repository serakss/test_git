import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/acordion/Acordion";
import {UncontrolledAccordion} from "./components/UncontrolledAcordion/UncontrolledAcordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Ratind/Rating";

import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OncontrolledOnOff";


function App(props: any) {

    let[ratingValue,setRatingValue] = useState<RatingValueType>(4);
    let[accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false);
    let[switchOn,setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>

            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
