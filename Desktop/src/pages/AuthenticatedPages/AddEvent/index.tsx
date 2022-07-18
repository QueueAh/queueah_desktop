import { Form, Input, Button, message, DatePicker, Switch } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AddEventFunction } from "services/events";
import OrganizerFinder from "services/organizers";
import "./AddEvent.css";

const AddEventForm = () => {
  const [form] = Form.useForm();
  const { Item } = Form;

  const navigate = useNavigate()

  const organizerId = OrganizerFinder()._id;

  const onFinish = async (data: any) => {
    try {
      await AddEventFunction(data, organizerId);
      message.success("Event submitted!");
      form.resetFields();
      navigate('/events')
    } catch (err) {
      message.error("Submission Error, Invalid Form");
    }
  };

  const onFinishFailed = () => message.error("submit failed");

  return (
    <div className="event-form-container">
      <h1>Add a new Event!</h1>
      <Form
        form={form}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Item
          label="Name"
          name="event_name"
          rules={[{ required: true }]}
          children={<Input />}
        />
        <Item
          label="Descripton"
          name="description"
          rules={[{ required: true }]}
          children={<Input />}
        />
        <Item
          label="Venue"
          name="venue_name"
          rules={[{ required: true }]}
          children={<Input />}
        />
        <Item
          label="Address"
          name="address"
          rules={[{ required: true }]}
          children={<Input />}
        />
        <Item
          label="Website"
          name="website"
          rules={[
            { required: true },
            { type: "url" },
            { type: "string", min: 6 },
          ]}
          children={<Input placeholder="input placeholder" />}
        />
        <Item
          label="Starts"
          name="start_date"
          children={<DatePicker showTime format="YYYY-MM-DD HH:mm" />}
          rules={[{ required: true }]}
        />
        <Item
          label="Ends"
          name="end_date"
          children={<DatePicker showTime format="YYYY-MM-DD HH:mm" />}
          rules={[{ required: true }]}
        />
        <Item
          label="Adults Only"
          name="adults_only"
          valuePropName="checked"
          children={<Switch />}
        />
        <Button type="primary" htmlType="submit" className="add-event-button">
          Submit Event
        </Button>
        <Button type="primary" danger>
          <Link to="/events">Back to Events</Link>
        </Button>
      </Form>
    </div>
  );
};

export default AddEventForm;
