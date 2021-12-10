import {useMemo, useState} from "react";


export default {
    title: "UseCallback demo"
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLocaleLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])
    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()];
        setUsers(newUsers);
    }
    return <>
        <button onClick={()=>setCounter(counter +1)}>+</button>
        <button onClick={()=>addUser()}>add user</button>
        {counter}
    </>
}
