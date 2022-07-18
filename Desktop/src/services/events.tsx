import axios from "axios";
import { useEffect, useState } from "react";
import { emptyEvent } from "./data";

export const GetEvent = (organizer_id: String, event_id: String) => {
  
  const [event, setEvent] = useState(emptyEvent);

  const FetchUrl = `http://127.0.0.1:8000/event/${organizer_id}/${event_id}`;

  useEffect(() => {
    fetch(FetchUrl)
      .then((res) => res.json())
      .then((res) => {
        setEvent(res);
      });
  }, [FetchUrl]);

  return event;
};

export const AddEventFunction = async (data: any, organizer_id: string) => {
  try {
    const res = await axios({
      method: "POST",
      url: `http://127.0.0.1:8000/add_event`,
      data: {
        input_body: data,
        input_organizer: organizer_id,
      },
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
    return res;
  } catch (err) {
    return console.log(err);
  }
};
