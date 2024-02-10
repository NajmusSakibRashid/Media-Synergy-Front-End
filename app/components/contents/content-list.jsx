import React from "react";
import image from "../../../image/checkmark-final.jpeg";
function ContentList({ listName, lists }) {
  return (
    <div>
      <h2 className="card-title">{listName}</h2>
      <ul
        style={{ listStyleImage: "url({'../../../image/checkmark-final.jpeg'})" }}
        className="list-inside p-4"
      >
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;
