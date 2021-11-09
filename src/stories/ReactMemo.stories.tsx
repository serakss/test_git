import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { user: Array<string> }) => {
    console.log("USER")
    return <div>{props.user.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const User = React.memo(UsersSecret);
export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <User user={users}/>
    </>
}