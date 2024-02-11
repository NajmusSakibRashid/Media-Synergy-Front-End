'use client'

import { useEffect, useState } from "react";
import ScheduleForm from "@/app/components/scheduling/schedule-form";

const ScheduleButton = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <button
          className="btn btn-accent w-32 self-center"
          onClick={() => {
            window.location.href = "";
          }}
        >
          Schedule
        </button>
      </div>
      <ScheduleForm show={show} setShow={setShow}>{children}</ScheduleForm>
    </>
  );
};

export default ScheduleButton;
