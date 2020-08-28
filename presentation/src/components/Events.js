import React from 'react';
import Event from './Event';
import CreateEvent from './CreateEvent';

class Events extends React.Component {
    state = {
        events: [ ]
    }    
    getEvent = () => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/scheduler`)
            .then(response => response.json())
            .then(data => this.setState({events:data}))
    }
    componentDidMount() {
        this.getEvent();
    }

    deleteEvent = (id, refresh) => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/scheduler/${id}`,{
            method: "DELETE"
        }) .then(response => response.json())
            .then(data => {
                console.log(data);
                refresh();
            })
    }

    render(){
        const displayEvent = this.state.events.map(event =>
        <Event 
            key={event._id} 
            event={event} 
            deleteEvent={this.deleteEvent}
            refresh={this.getEvent} />
            
        )
        return (
            <>
                <h2>Events </h2>
                <ul>
                    {displayEvent}
                </ul>
                <h4>New Event</h4>
                <CreateEvent refresh={this.getEvent}/>
            </>
        )
    }
}
export default Events;