import React from "react";
import image from "../../../image/checkmark-final.jpeg";
function ContentList({ listName, lists }) {
  return (
    <div className="w-full">
      <h2 className="card-title">{listName}</h2>
      <ul
        style={{
            listStyleType: "none",
            paddingLeft: "20px", // Adjust the left padding for spacing
            fontSize: "16px", // Set the font size of the list items
            lineHeight: "1.5", // Set the line height for better readability
          }}
        className="list-inside"
      >
        {lists.map((item, index) => (
          <li key={index}>
            <div>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;
