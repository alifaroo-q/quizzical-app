import React, {useEffect, useState} from "react"
import "../css/Quiz.css"
import Question from "./Question";
import Loading from "./Loading";
import {nanoid} from "nanoid";

export default function Quiz() {

    const [questions, setQuestions] = useState(() => [])
    const [loading, setLoading] = useState(() => true)
    const [reset, setReset] = useState(false)

    const [score, setScore] = useState(() => 0)

    const [check, setCheck] = useState(false)

    const questionComponents = questions.map((question) => {
        return (
            <Question
                key={question.id}
                check={check}
                setScore={setScore}
                {...question}
            />
        )
    })

    useEffect(() => {
        setLoading(true)

        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {

                const transformedData = data.results.map((item) => {

                    let temp = item.incorrect_answers.map((answer) => {
                        return {
                            id: nanoid(),
                            option: answer,
                            isCorrect: false
                        }
                    })

                    temp.push({
                        id: nanoid(),
                        option: item.correct_answer,
                        isCorrect: true
                    })

                    temp.sort((a, b) => {
                        let fa = a.id.toLowerCase(), fb = b.id.toLowerCase();
                        if (fa < fb) return -1;
                        if (fa > fb) return 1;
                        return 0;
                    })

                    return {
                        id: nanoid(),
                        question: item.question,
                        choice: temp
                    }
                })

                setQuestions(transformedData)
                setLoading(false)
                setCheck(false)
                setReset(false)
                setScore(0)

            })
            .catch((error) => {
            })

    }, [reset])

    return (
        <>
            {
                loading
                    ?
                    <Loading/>
                    :
                    <main className="container ml-auto mr-auto flex flex-col items-center min-h-screen justify-center">
                        <section>
                            {questionComponents}
                        </section>
                        {
                            score === 0 && !check
                                ?
                                <button
                                    onClick={() => setCheck(true)}
                                    className="btn-check rounded-2xl shadow-2xl transition-all sm:mt-8 mt-1 mb-3">
                                    Check answers
                                </button>
                                :
                                <div className="sm:flex  sm:justify-center sm:items-center sm:content-center">
                                    <p className="text-xl text-center">You scored {score}/{questions.length}</p>
                                    <button
                                        onClick={() => setReset(true)}
                                        className="btn-check rounded-2xl shadow-2xl transition-all mx-5 my-2">
                                        Play again
                                    </button>
                                </div>
                        }

                    </main>
            }
        </>
    );
}