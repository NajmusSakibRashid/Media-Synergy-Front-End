import React from "react";
import Navbar from "./navbar";
import DrawerSide from "./drawer-side";

export default function drawer({ children }) {
  return (
    <div className="drawer">
      <input type="checkbox" id="my-drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar
          dropdownContent={[
            { title: "Settings", link: "/user" },
            { title: "Logout", link: "/user" },
          ]}
        />
        <div className="mt-16 p-4">{children}</div>
      </div>
      <DrawerSide>
        {[
          { title: "Dashboard", link: "/user" },
          { title: "Contents", link: "/user/contents" },
          { title: "Scheduling", link: "/user/schedules" },
          { title: "Analytics", link: "/user" },
          { title: "Communities", link: "/communities" },
        ]}
      </DrawerSide>
    </div>
  );
}
