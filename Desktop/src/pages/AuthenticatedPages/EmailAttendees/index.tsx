import { Button, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrganizerFinder from "services/organizers";

const EmailAttendees = () => {
  const [email, setEmail] = useState(false);
  const organizer_id = OrganizerFinder()._id;
  const { event_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      fetch(`http://127.0.0.1:8000/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input_organizer: organizer_id,
          input_event: event_id,
        }),
      })
        .then(() => message.success("email posted!"))
        .then(() => navigate(`/event/${event_id}`))
        .catch((err) => console.log(err));
    }
  }, [email, event_id, navigate, organizer_id]);

  return (
    <div className="email-attendees-form">
      <h1>Are you sure you want to send qr code emails?</h1>
      <div className="confirm-buttons-container">
        <Button onClick={() => setEmail(true)} type="primary">
          Send Emails
        </Button>
        <Button
          onClick={() => navigate(`/event/${event_id}`)}
          danger
          type="primary"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EmailAttendees;
