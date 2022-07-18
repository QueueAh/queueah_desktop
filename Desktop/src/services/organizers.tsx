import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { emptyOrganizer } from "./data";

const OrganizerFinder = () => {
  const [organizer, setOrganizer] = useState(emptyOrganizer);

  const { user } = useAuth0();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/organizer`, {
      method: "PUT",
      body: JSON.stringify({
        email: user?.email,
        name: user?.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setOrganizer(res.organizer);
      })
      .catch(err => console.log(err))
  }, [user?.email, user?.name]);

  return organizer;
};

export default OrganizerFinder;
