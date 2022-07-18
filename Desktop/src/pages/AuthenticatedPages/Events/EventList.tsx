import { useAuth0 } from "@auth0/auth0-react";
import { Card, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import { RandomImage } from "helpers/randomImage";
import { Link } from "react-router-dom";

interface EventListProps {
  data: {
    _id: String;
    event_name: String;
    description: String;
    venue_name: String;
    address: String;
    website: String;
    start_date: Date;
    end_date: Date;
    organizer: String;
    attendees: Number;
    admitted: Number;
    not_admitted: Number;
  }[];
}

const EventList = (props: EventListProps) => {
  const { user } = useAuth0();
  const eventList = props.data.map((evt, index) => {
    const cardImage = (
      <img
        alt="example"
        src={RandomImage()}
      />
    );

    return (
      <div className="site-col-3 m2-auto cursor-pointer" key={index}>
        <Link to={`/event/${evt._id}`}>
          <Card className="event-card" cover={cardImage}>
            <Meta
              className="event-meta"
              avatar={<Avatar src={user?.picture} />}
              title={evt.event_name}
              description={evt.description}
            />
          </Card>
        </Link>
      </div>
    );
  });
  return <>{eventList}</>;
};

export default EventList;
