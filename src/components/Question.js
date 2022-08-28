import React, {useEffect, useState} from 'react';
import Button from "./Button";
import "../css/Question.css"
import He from "he"

export default function Question({question, choice, check, setScore}) {

    const [selectedOption, setSelectedOption] = useState({
        id: "",
        isCorrect: undefined
    })

    useEffect(() => {
        if (check && selectedOption.isCorrect) {
            setScore(prev => prev + 1)
        } else if (check && selectedOption.isCorrect === false) {
            setScore(prev => prev + 0)
        }
    }, [check, selectedOption])

    const getSelectedOption = ({id, isCorrect}) => {
        setSelectedOption(() => (
            {
                id,
                isCorrect
            }
        ))
    }

    const optionButtons = choice.map((option) => {
        return (
            <Button
                check={check}
                selectedOption={selectedOption}
                key={option.id}
                id={option.id}
                isCorrect={option.isCorrect}
                option={option.option}
                handleGetSelectedOption={getSelectedOption}
            />
        )
    })

    return (
        <article className="question mb-5">
            <h1 className="text-2xl max-w-3xl font-bold">{He.decode(question)}</h1>
            <div className="btn-container flex flex-row justify-evenly mt-5">
                {optionButtons}
            </div>
            <hr className="mt-5"/>
        </article>
    )
}