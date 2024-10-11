'use client'

import { useEffect, useState } from "react";
import ScheduleForm from "@/app/components/scheduling/schedule-form";

const ScheduleButton = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div>
        <button
          className="btn btn-accent w-32 self-center"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Schedule
        </button>
      </div>
      <ScheduleForm show={showForm} setShow={setShowForm}>{children}</ScheduleForm>
    </>
  );
};

export default ScheduleButton;
