import api from "./api";
import Event from "../models/Event";

export const getEvents = () => {
  return api.get("/events");
};

export const createEvent = (eventData: Event) => {
  return api.post("/events", eventData);
};
