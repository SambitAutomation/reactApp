import React from "react"
import MyClassComponent from "./MyClassComponent"

export const MyComponent2 = () => {

    return(
        <React.Fragment>
            <span>My new Fragment 2 Holding <MyClassComponent /> </span>
        </React.Fragment>
    )
}