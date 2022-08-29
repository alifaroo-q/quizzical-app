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
            <h1 className="sm:text-2xl text-xl sm:p-2 p-3 max-w-3xl font-bold flex-wrap">{He.decode(question)}</h1>
            <div className="btn-container sm:flex sm:flex-row justify-center sm:mt-5 mt-2 ">
                {optionButtons}
            </div>
            <hr className="mt-5"/>
        </article>
    )
}