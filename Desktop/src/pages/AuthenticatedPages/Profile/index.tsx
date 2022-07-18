import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import OrganizerFinder from "services/organizers";
import Loading from "helpers/loading";

const Profile = () => {
  const data = OrganizerFinder();
  const { isLoading, user } = useAuth0();
  const { name, email, _id, events } = data;

  const OrganzierInfo = (
    <>
      <div className="profile-card">
        <img src={user?.picture} alt={name} className="site-res-image" />
        <h1>{name}</h1>
        <p className="profile-title">Total Events : {events.length}</p>
        <p>{email}</p>
        <p className="profile-id-container">ID: {_id}</p>
      </div>
    </>
  );

  return isLoading ? <Loading /> : OrganzierInfo;
};

export default Profile;
