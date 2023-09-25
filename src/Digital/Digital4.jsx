import React, { useState, useEffect } from 'react'

 let Digital4 = () => {
     let[ct, setCT] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        setInterval(() => {
            setCT(new Date().toLocaleTimeString())
        }, [1000])
    }, [])
    return (
        <div>
            <h1>{ct}</h1>
        </div>
    )
}

export default Digital4