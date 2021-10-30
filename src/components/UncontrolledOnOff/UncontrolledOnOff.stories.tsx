import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./OncontrolledOnOff";


export default {
    title: "UncontrolledOnOff stories",
    component: UncontrolledOnOff
}
const callback = action("on or off clicked")


export const OnMode=()=><UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode=()=><UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BuyMode=()=><div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue=()=> <input defaultValue={"yo"}/>