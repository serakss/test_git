import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAcordion";
import {useState} from "react";


export default {
    title:"UncontrolledAccordion",
    component: UncontrolledAccordion
}


export const ModeChanging = ()=>{
    const [value,setValue]= useState<boolean>(true);
    return <UncontrolledAccordion titleValue={"Menu"}/>}
