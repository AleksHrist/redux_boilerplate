import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoggedIn, setLoggedIn} from "./redux/reducers/global.reducer";


const ChildThree = (props : any) => {
    //For setters of the reducer. I like to store it in dispatch constant.
    const dispatch = useDispatch();

    //The value we need which is stored in the reducer
    const trulyLoggedIn : boolean = useSelector(getLoggedIn);


    const handleClick = (e : any) => {
        e.preventDefault();

        //Dispatch the setter method of the reducer
        dispatch(setLoggedIn(!trulyLoggedIn));
    }

    return (
        <div>
            <p>I'm Child Three i handle the loggin</p>
            <button onClick = {handleClick}> {trulyLoggedIn ? "Logout" : "Login"} </button>
        </div>
    )
}

export default ChildThree;