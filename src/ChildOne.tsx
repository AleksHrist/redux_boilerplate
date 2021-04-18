import React from "react";
import ChildTwo from "./ChildTwo";
import {useSelector} from "react-redux";
import {getLoggedIn} from "./redux/reducers/global.reducer";


const ChildOne = (props : any) => {
    //
    const trulyLoggedIn : boolean = useSelector(getLoggedIn);

    return (
        <div>
            <p>I'm Child one, also am i logged in? <h3>{trulyLoggedIn.toString()}</h3></p>
            <ChildTwo />
        </div>
    )
}

export default ChildOne;