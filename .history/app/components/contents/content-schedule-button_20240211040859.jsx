import { useEffect, useState } from "react";
import ScheduleForm from "@/app/components/scheduling/schedule-form";
// 'use client';

const ScheduleButton = ({ children }) => {
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
      <ScheduleForm>{children}</ScheduleForm>
    </>
  );
};

export default ScheduleButton;
