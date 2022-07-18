import { useEffect, useState } from "react";
import { emptyAttendee } from "./data";

const AttendeesServices = (organizer_id: String, event_id: String) => {
  const [attendees, setAttendees] = useState([emptyAttendee]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/attendees_list/${organizer_id}/${event_id}`)
      .then((res) => res.json())
      .then((res) => setAttendees(res))
      .catch((err) => console.log(err));
  }, [event_id, organizer_id]);

  console.log(attendees);

  return attendees;
};

export default AttendeesServices;
