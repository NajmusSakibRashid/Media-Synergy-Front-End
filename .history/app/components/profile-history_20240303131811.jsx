"use Client";
import React from "react";
import HistoryTimeline from "@/app/components/history-timeline";

export default function ProfileHistory({ editHistoryLink }) {
  const items = [{}];
  return (
    <div className="card p-2 shadow-xl hover:bg-gray-200">
      <div className="card-title flex justify-between">
        History
        <div
          className="btn btn-neutral min-h-0 h-6"
          //   onClick={() => {
          //     window.location.href = editHistoryLink
          // }}
        >
          Edit
        </div>
      </div>
      <ul className="timeline timeline-vertical timeline-compact">
        {items.map((item,index) => (
          <div  className="">
            <li>
              <HistoryTimeline
                year="2020"
                description="Opening of the company"
              />
            </li>
            <li className="timeline-item">
              <HistoryTimeline
                year="2021"
                description="Company er profit 1 crore"
              />
            </li>
            <li className="timeline-item"
            >
              <HistoryTimeline
                year="2022"
                description="Mara kheye company bondho"
              />    
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
