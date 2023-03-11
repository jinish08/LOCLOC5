import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { modalState } from "../../atoms/modalState";
import { useRecoilState } from "recoil";
import EventModal from "./EventModal";
import { eventState } from "../../atoms/eventState";
moment.locale("en_IN");
const localizer = momentLocalizer(moment);

export default function Calender() {
  const [eventsData, setEventsData] = useRecoilState(eventState);
  const [modal, setModal] = useRecoilState(modalState);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const handleClick = (event) => {
    console.log(event.title);
    console.log(event.start);
    console.log(event.end);
  };
  const onButtonClick = () => {
    setStartTime(null);
    setEndTime(null);
    setModal(true);
  };
  const handleSelect = ({ start, end }) => {
    // console.log(start, end)
    setStartTime(start);
    setEndTime(end);
    setModal(true);
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center mb-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            onButtonClick();
          }}
        >
          Add Event
        </button>
      </div>
      {modal ? <EventModal startD={startTime} endD={endTime} /> : null}
      <Calendar
        views={["day", "week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        events={eventsData}
        style={{
          height: "80vh",
          width: "80vw",
          padding: 10,

          backgroundColor: "white",
        }}
        onSelectEvent={(e) => {
          handleClick(e);
        }}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
