import { atom } from "recoil";
import events from "../components/calendar/events";
export const eventState = atom({
  key: "events",
  default: events,
});
