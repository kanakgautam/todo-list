import React, { useState } from 'react'


export default function Todo(props) {

    return (
        <div>
            <li>{props.value}
            <button onClick={() => {
                props.deleteItem(props.pos);
            }} className="button-list">X</button>
            </li>
        </div>

    )
}
