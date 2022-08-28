import React from "react"
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

export default function App() {

    const [startQuiz, setStartQuiz] = React.useState(false);

    const startTheQuiz = () => {
        setStartQuiz(true);
    }

    return (
        <div className="App">
            {
                !startQuiz
                    ? <Landing start={startTheQuiz}/>
                    : <Quiz/>
            }
        </div>
    );
}