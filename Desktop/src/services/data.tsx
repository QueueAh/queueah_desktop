export const emptyAttendee = {
  _id: "",
  event_id: "",
  event_name: "",
  email: "",
  gender: "",
};

export const emptyEvent = {
  _id: "",
  address: "",
  admitted: 0,
  adults_only: false,
  attendees: 0,
  date: "",
  description: "",
  event_name: "",
  not_admitted: 0,
  organizer: "",
  venue_name: "",
  website: "",
};

export const emptyOrganizer = {
  _id: "",
  email: "",
  events: [emptyEvent],
  name: "",
};
