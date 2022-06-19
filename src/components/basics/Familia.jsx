import React from "react";

export default function Familia(props) {
    return (
        <div>
            {props.children.map((el, i) => {
                return React.cloneElement(el, { ...props, key:i });
            })}
        </div>
    );
};