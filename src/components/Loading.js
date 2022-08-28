import React from "react"

export default function Loading() {
    return (
        <section className="flex justify-center items-center min-h-screen">
            <h1 className="text-4xl">
                Loading
                <span className="animate-ping"> .</span>
                <span className="animate-pulse"> .</span>
                <span className="animate-ping"> .</span>
            </h1>
        </section>
    )
}