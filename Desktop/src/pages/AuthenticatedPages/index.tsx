import { QrcodeOutlined, UserOutlined } from "@ant-design/icons";
import Events from "./Events";
import AddEvent from "./AddEvent";
import Profile from "./Profile";
import SingleEvent from "./Events/SingleEvent";
import AddAttendees from "./AddAttendees";
import EmailAttendees from "./EmailAttendees";

const AuthticatedPages = [
  {
    key: "events",
    path: "/events",
    element: <Events />,
    icon: <QrcodeOutlined />,
  },
  {
    key: "profile",
    path: "/profile",
    element: <Profile />,
    icon: <UserOutlined />,
  },
  {
    key: "add_event",
    path: "/add_event",
    element: <AddEvent />,
    hidden: true,
  },
  {
    key: "singe_event",
    path: "event/:event_id",
    element: <SingleEvent />,
    hidden: true
  },
  {
    key: "add_attendees",
    path: "event/add_attendees/:event_id",
    element: <AddAttendees />,
    hidden: true
  },
  {
    key: "email_attendees",
    path: "event/email_attendees/:event_id",
    element: <EmailAttendees />,
    hidden: true
  }
];

export default AuthticatedPages;
