import React, { useState } from 'react';
import UpdateEvent from './UpdateEvent';

const Event = ({event, deleteEvent, refresh}) => {
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
    return(
        <li>
            <button
            onClick={()=> toggleForm()}>Update</button>
            {event.title},
            {event.date}
            <button
                onClick={() => deleteEvent(event._id, refresh)} >X
            </button>

        {update ? 
        <UpdateEvent event={event}
            toggleForm={toggleForm}
            refresh={refresh} /> : ''}
        </li>
    )
}

export default Event