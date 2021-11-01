import React, {useReducer, useState} from "react";
import {TOGGLE_COLLAPSED} from "./reducer";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

   // let [collapsed, setCollapsed] = useState(false);
    let[collapsed,dispatch]=useReducer(reducer,false)

    return (
        <div>
           {/* <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type:TOGGLE_COLLAPSED})}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    onClick: ()=> void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>-- {props.title} --</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

