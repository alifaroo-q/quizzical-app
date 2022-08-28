import React from "react"
import "../css/Landing.css"

export default function Landing({start}) {
    return (
        <main className="container ml-auto mr-auto flex flex-col items-center min-h-screen justify-center">
            <div className="p-3 flex flex-col items-center">
                <h1 className="app-name text-4xl mb-2 font-semibold">Quizzical</h1>
                <h5 className="mb-5 text-lg">Take a quiz to test your skills</h5>
            </div>
            <button
                className="btn-start rounded-2xl shadow-2xl transition-all" onClick={start}>Start quiz
            </button>
        </main>
    );
}