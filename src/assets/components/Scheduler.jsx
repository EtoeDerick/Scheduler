import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid"

const Scheduler = () => {
    //domain: dev-x43kgis6dvrgv11w.us.auth0.com
    /*
    client secret: 3fXcxHmRgyKiXQBbNBcSyA8AlFqEa2y-Z-jSJ6b61wnfa_oIf3rLA1kUI8aM0jQD
    clientID: 6za7YzOSAQ9b5rfNs7GEc0E2udjrdcW4
    */
  return (
    <div className='h-[70vh] w-[80vw] px-[3rem]'>
        <div className="join join-vertical">
            <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Default" value="default" checked />
            <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Corporate" value="corporate" />
            <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Gourmet" value="gourmet" />
        </div>
      <FullCalendar 
        plugins={[dayGridPlugin,timeGridPlugin, interactionPlugin]}
        headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        initialView='dayGridMonth'
        weekends={true}
        firstDay={1}
        />
    </div>
  )
}

export default Scheduler
