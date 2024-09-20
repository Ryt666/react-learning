import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

export default function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
            <NavLink path='/dialogs/1' element={Dialogs}>
<div className={s.dialog}> Dima</div>
    </NavLink>
    <NavLink path='/dialogs/2' element={Dialogs}>
<div className={s.dialog}> Sasha</div>
    </NavLink>
    <NavLink path='/dialogs/3' element={Dialogs}>
<div className={s.dialog}> Masha</div>
    </NavLink  >
    <NavLink path='/dialogs/4' element={Dialogs}>
<div className={s.dialog}> Kolya</div>
    </NavLink>
    <NavLink path='/dialogs/5' element={Dialogs}>
<div className={s.dialog}> Kirill</div>
    </NavLink>
            </div>

            <div className={s.dialog_massages}>
                <div className={s.massage}>hi</div>
                <div className={s.massage}>how are you?</div>
                <div className={s.massage}>okay</div>
            </div>
        </div>
    )
}