import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, message } from "antd/lib";
import { Link, useParams } from "react-router-dom";
import OrganizerFinder from "services/organizers";
import "./AddAttendees.css";

const AddAttendees = () => {
  const { event_id } = useParams();
  const { register, handleSubmit } = useForm();
  const organizer_data = OrganizerFinder();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("csv_file", data.file[0]);
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/add_attendees/${organizer_data._id}/${event_id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => message.success("worked"))
      .catch((res) => message.error("error"));
  };

  return (
    <>
      <div className="add-attendees-container">
      <div className="email-attendees-button">
        <Button>
          <Link to={`/event/${event_id}`} style={{ color: "white" }}>
            Back to Event
          </Link>
        </Button>
      </div>
        <h1>Add Attendees File here</h1>
        <form className="" onChange={handleSubmit(onSubmit)}>
          <input
            {...register("file")}
            className="sr-only"
            type="file"
            accept=".csv"
          />
        </form>
        <h3>(Please note: only csv files can only upload a csv file)</h3>
      </div>
    </>
  );
};

export default AddAttendees;
