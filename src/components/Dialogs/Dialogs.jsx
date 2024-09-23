import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    return (
        <NavLink to={"dialogs/" + props.path} element={Dialogs}>
<div className={s.dialog + ' ' + s.active}> {props.name}</div>
            </NavLink>
    )

}

const MessageItem = (props) => {
return (
    <div className={s.massage}>{props.mes}</div>
)
}
export default function Dialogs(props) {

let dialogsData = [
    {id:1, name:"Dima"},
    {id:2, name:"Andrew"},
    {id:3, name:"Sveta"},
    {id:4, name:"Sasha"},
    {id:5, name:"Masha"},
    {id:6, name:"Kirill"}
]

let mesData = [
    {id:1, mes:"hi"},
    {id:2, mes:"how are you?"},
    {id:3, mes:"ok"}
]

let dialogsElem = dialogsData.map((d) => <DialogItem path={d.id} name={d.name}/>)
let mesElem = mesData.map(m => <MessageItem mes={m.mes}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
        {dialogsElem}
            </div>

            <div className={s.dialog_massages}>
                {mesElem}
               

            </div>
        </div>
    )
}