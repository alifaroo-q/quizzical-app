import React, {useEffect} from "react"

export default function TryAgain() {

    const [reload, setReload] = React.useState(false)

    useEffect(() => {
        window.location.reload()
    }, [reload])

    return (
        <section className="flex justify-center items-center min-h-screen">
            <h1 className="text-4xl">Failed to load</h1>
            <button
                onClick={() => setReload(true)}
                className="btn-again rounded-2xl shadow-2xl transition-all mt-8">Try again
            </button>
        </section>
    )
}