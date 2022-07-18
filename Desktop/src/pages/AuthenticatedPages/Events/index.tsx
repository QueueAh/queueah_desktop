import { useEffect, useState } from "react";
import OrganizerFinder from "services/organizers";
import { Button } from "antd";
import { Link } from "react-router-dom";
import EventList from "./EventList";
import './Events.css'

const Events = () => {
  const [events, setEvents] = useState<any>([]);

  const data = OrganizerFinder();
  useEffect(() => {
    console.log("fetching");
    fetch(`http://127.0.0.1:8000/events/${data._id}`)
      .then((res) => res.json())
      .then((res) => setEvents(res.events))
      .catch((err) => console.log(err));
  }, [data._id]);

  console.log(events);

  return (
    <>
      <div className="add-button-container">
        <Button style={{ marginLeft: "auto", background: 'black', border:"1px solid black" }} type="primary">
          <Link to="/add_event">Add Event</Link>
        </Button>
      </div>
      <div className="site-grid-system">
        <EventList data={events} />
      </div>
    </>
  );
};

export default Events;
