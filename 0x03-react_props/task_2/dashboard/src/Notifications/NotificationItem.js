import React from "react";

const NotificationItem = (props) => {
    if (!props.html) {
        return (
            <li data-notification-type={props.type}>
                {props.value} </li>
        );
    }
    return (
        <li
            data-notification-type={props.type}
            dangerouslySetInnerHTML={props.html}
        >{props.value}</li>
    );
}

export default NotificationItem;
