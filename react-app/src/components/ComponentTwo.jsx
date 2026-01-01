import React from "react";
import ComponentTwoChild from "./C1Child2";

function ComponentTwo() {
    return (
        <div>
            <h1>ComponentTwo</h1>
            <p>This is component two </p>
            <ComponentTwoChild/>
        </div>
    );
}
export default ComponentTwo;