import React from "react"


const Minutes = (props) => {
    
    // Transform Object Integer into String
    let count = JSON.stringify(props.count)
    // Add leading 0 when necessary
    if(count < 10){
        count = "0" + count
    }

    let formatedCount = count.split("")

    // Why this approach?: It's easier to replicate the needed
    // styles if each number for s, m & h is divided in singular 
    // html elements. 

    return(
        <>
        <p className="clockNumber">{formatedCount[0]}</p>
        <p className="clockNumber">{formatedCount[1]}</p>
        </>
    )
}


export default Minutes