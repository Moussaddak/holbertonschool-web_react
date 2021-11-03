import React, { Component } from "react";
import './Notifications.css';
import { getLatestNotification } from './utils'

// const Notification = () => <div className="Notifications">
//     <p>Here is the list of notifications</p>
// </div>
class Notification extends Component {

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
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={ { __html: getLatestNotification () } }></li>
                </ul>
            </div>
        );
    }
}
export default Notification;
