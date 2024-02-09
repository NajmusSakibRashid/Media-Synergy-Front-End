"use Client";
import React from "react";
// import JoditEditor from "jodit-react";

export default function ContactInfoBreif({ editContactInfo }) {
  const items = [{}];
  return (
    <div className="card p-2 shadow-xl">
      <div className="card-title flex justify-between">
        Contact Informations
        <button
          className="btn btn-neutral min-h-0 h-6"
          //   onClick={() => {
          //     window.location.href = editContactInfo
          //   }}
        >
          Edit
        </button>
      </div>
      <div className="card-body p-0">
        <ul
            // style={{ listStyleType: "square" }
            className="list-inside p-4"
        >
          {items.map((item) => (
            <div>
              <li>
                <div className="card-title text-sm inline-block">
                  Physical Address:{" "}
                </div>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </li>
              <li>
                <div className="card-title text-sm inline-block">
                  Phone Number:
                </div>
                <ul>
                  <li>+8801123456789</li>
                  <li>+8801123456789</li>
                  <li>+8801123456789</li>
                </ul>
              </li>
              <li>
                <div className="card-title text-sm inline-block">
                  Email Address:{" "}
                </div>
                lorem@ipsum.com
              </li>
              <li>
                <div className="card-title text-sm inline-block">Website: </div>
                www.loremipsum.com
              </li>
              <li>
                <div className="card-title text-sm inline-block">
                  Business Hours:{" "}
                </div>
                9:00 AM - 5:00 PM
              </li>
              <li>
                <div className="card-title text-sm inline-block">Weekend: </div>
                Saturday, Sunday
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
