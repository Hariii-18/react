import React from "react";
import ComponentOneChild from "./C1Child1";

function ComponentOne() {
    return (
        <div>
            <h1>ComponentOne</h1>
            <p>This is component one </p>
            <ComponentOneChild/>
        </div>
    );
}
export default ComponentOne;