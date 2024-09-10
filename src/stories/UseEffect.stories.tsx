import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const  SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect at every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("useEffect at only first render (component DidMount)")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect at first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            <div>Hello, {fake} {counter}</div>
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}
export const  SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {

        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)

    }, [counter])

    return (
        <>
            <div>Hello, {fake} {counter}</div>
            <button onClick={() => setFake(fake + 1)}>+</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}
export const  SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SetIntervalExample")

    useEffect(() => {

        // setInterval(() => {
        //     console.log("tick: " + counter)
        //     setCounter((state) => state + 1)
        // }, 1000)

    }, [])

    return (
        <>
            <div>Hello, counter: {counter} -- fake: {fake}</div>
            {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        </>
    )
}
export const  MyClockExample = () => {
    const date = new Date()

    const [seconds, setSeconds] = useState(date.getSeconds())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [hours, setHours] = useState(date.getHours())

    console.log("MyClockExample")

    useEffect(() => {

        // setInterval(() => {
        //     console.log("seconds: " + seconds)
        //     setSeconds((state) => {
        //         return state < 59 ? state + 1 : 0
        //     })
        //     setMinutes((state) => {
        //         let a = date.getMinutes()
        //         return state === a ? state : state + 1
        //     })
        //
        // }, 1000)

    }, [])

    return (
        <>
            <h1>{hours}:{minutes}:{seconds}</h1>
            {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("ResetEffect")

    useEffect(() => {
        console.log("Effect occurred")

        return () => {
            console.log("Turn Down")
        }
    }, []);

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            console.log("Turn down")
            window.removeEventListener("keypress", handler)
        }
    }, [text]);



    return (
        <>
            Typed text: {text}
        </>
    )
}