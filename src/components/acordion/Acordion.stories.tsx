import {action} from "@storybook/addon-actions";
import {Accordion} from "./Acordion";
import {useState} from "react";


export default {
    title:"Accordion",
    component: Accordion
}
const callback = action("on or off clicked");
const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = ()=><Accordion collapsed={true} onChange={callback} titleValue={"Menu"} items={[]} onClick={onClickCallback}/>
export const UserUncollapsedMode = ()=><Accordion titleValue={"User"} collapsed={false} onChange={callback} items={[{title:"Dimych", value:1},{title:"Valera" ,value:2},{title:"Artem" ,value:3},{title:"Viktor", value:4}]} onClick={onClickCallback}/>

export const ModeChanging = ()=>{
    const [value,setValue]= useState<boolean>(true);
    return <Accordion titleValue={"User"} collapsed={value} onChange={()=>{setValue(!value)}} items={[{title:"Dimych", value:1},{title:"Valera" ,value:2},{title:"Artem" ,value:3},{title:"Viktor", value:4}]} onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}/>}