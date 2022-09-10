import React from "react"

export default (props) => {
    const { min, max} = props
    const rand = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Numero Aleatorio:</h2>
            <p>
                <strong>{rand}</strong>
            </p>
        </div>
    )
}