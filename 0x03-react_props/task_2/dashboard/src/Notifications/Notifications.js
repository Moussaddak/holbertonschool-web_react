import React, { Component } from "react";
import './Notifications.css';
import { getLatestNotification } from '../Utils/utils'
import NotificationItem from "./NotificationItem";

class Notifications extends Component {

    render() {
        const styles = {
            'display': 'inline-block',
            'float': 'right',
            'padding': '0',
            'margin': '0',
            'border': 'none',
            background: 'white',
            cursor: 'pointer',
        };
        return (
            <div className="Notifications">
                <button aria-label="Close" style={styles}
                        onClick={() => console.log('Close button has been clicked')}
                >
                    <span style={{'color':'black'}}>X</span>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type='default' value='New course available' />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' html={ { __html: getLatestNotification () } }/>
                </ul>
            </div>
        );
    }
}
export default Notifications;
