import React from "react"
import "../css/Button.css"
import He from "he"

export default function Button({id, option, isCorrect, selectedOption, handleGetSelectedOption, check}) {

    const correctStyles = {
        backgroundColor: "#94D7A2",
        color: "#293264",
        border: "none"
    }

    const inCorrectStyles = {
        backgroundColor: "#F8BCBC",
        border: "none",
        color: "#293264",
        opacity: ".7"

    }

    const selectedStyles = {
        backgroundColor: "#D6DBF5",
        border: "none",
        color: "#293264"
    }

    const nothingSelectedStyles = {
        backgroundColor: "transparent",
        border: "1px solid #293264",
        color: "#293264"
    }

    let stylesToApply = {}

    if (check) {
        if (selectedOption.id === id && selectedOption.isCorrect === true) {
            stylesToApply = correctStyles
        } else if (selectedOption.id === id && selectedOption.isCorrect === false) {
            stylesToApply = inCorrectStyles
        }
        if (isCorrect) {
            stylesToApply = correctStyles
        }
    } else {
        if (selectedOption.id === id) {
            stylesToApply = selectedStyles
        } else {
            stylesToApply = nothingSelectedStyles
        }
    }

    return (
        <button
            disabled={check}
            onClick={() => handleGetSelectedOption({id: id, isCorrect: isCorrect})}
            style={stylesToApply}
            name={id}
            value={option}
            className="btn-answer sm:px-3 px-1 py-1 rounded-2xl shadow-2xl transition-all text-sm sm:text-lg font-bold max-w-prose mx-1 my-1">
            {He.decode(option)}
        </button>
    )
}