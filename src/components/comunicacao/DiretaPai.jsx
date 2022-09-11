import React from "react"
import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho texto="João" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho texto="Pedro" idade={15} nerd={false}></DiretaFilho>
        </div>
    )
}