import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default class Calendar extends React.Component {
    
        

    render() {
        const api_url = process.env.REACT_APP_API_URL;
      return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={
            (`${api_url}/scheduler`)                 
          }
        />
      )
    }
  }