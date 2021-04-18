import React from "react";
import ChildThree from "./ChildThree";


const ChildTwo = (props : any) => {
    return (
        <div>
            <p>I'm Child two. No props passed here.</p>
            <ChildThree />
        </div>
    )
}

export default ChildTwo;