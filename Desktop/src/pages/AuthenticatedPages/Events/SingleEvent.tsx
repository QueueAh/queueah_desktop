import { AlertFilled, MailOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import AntdTable from "components/AntdTable";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrganizerFinder from "services/organizers";

const SingleEvent = () => {
  const data = OrganizerFinder();
  const { event_id } = useParams();
  const [attendees, setAttendees] = useState<any>([]);

  useEffect(() => {
    if (attendees.length === 0) {
      fetch(`http://127.0.0.1:8000/attendees_list/${data._id}/${event_id}`)
        .then((res) => res.json())
        .then((res) => setAttendees(res.attendees))
        .catch((err) => console.log(err));
    }
  }, [event_id, data._id, attendees]);

  return (
    <>
      <div className="email-attendees-button">
        <Button>
          <Link to={`/event/add_attendees/${event_id}`}>Add Attendees</Link>
          <PlusCircleOutlined style={{ padding: "5px", color: "white" }} />
        </Button>
      </div>
      <div className="add-attendees-button">
        <Button className="">
          <Link to={`/event/email_attendees/${event_id}`}>Email Attendees </Link>
          <MailOutlined />
        </Button>
      </div>
      <AntdTable data={attendees} />;
    </>
  );
};

export default SingleEvent;
