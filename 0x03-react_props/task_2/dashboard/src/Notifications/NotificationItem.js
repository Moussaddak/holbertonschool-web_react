import React from "react";

const NotificationItem = (props) => {
    if (!props.html) {
        return (
            <li data-priority={props.type}>
                {props.value} </li>
        );
    }
    return (
        <li
            data-priority={props.type}
            dangerouslySetInnerHTML={props.html}
        >{props.value}</li>
    );
}

export default NotificationItem;
