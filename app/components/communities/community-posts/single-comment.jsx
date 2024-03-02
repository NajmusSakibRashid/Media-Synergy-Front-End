import React, { useState, useEffect } from "react";

const SingleComment = ({ userId, text }) => {
  const [author, setAuthor] = useState(null); // Initialize username as an empty string
  const [loading, setLoading] = useState(true); // Add loading state to handle fetching username

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/getUser/${userId}`;
        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
          method: "GET",
          headers: headers,
        };

        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error("Failed to fetch username");
        }
        const data = await response.json();
        console.log(data);
        setAuthor(data); // Set username to the fetched data
      } catch (error) {
        console.error("Error fetching username:", error);
      } finally {
        // setLoading(false); // Update loading state after fetching username
      }
    };

    fetchUser();
  }, []);
  // Render loading message if still loading or username is not a string
  // if (loading || typeof username !== "string") {
  //   return <div>Loading username...</div>;
  // }


  return (
    <div className="border border-primary rounded-lg mb-2 p-2 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-4 mb-1 mt-1 ml-1"
      >
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v11l-4 4z"></path>
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v11l-4 4z"></path>
        <line x1="15" y1="10" x2="21" y2="10"></line>
        <line x1="15" y1="14" x2="21" y2="14"></line>
        <line x1="15" y1="18" x2="21" y2="18"></line>
      </svg>

      <div>
        <h1 className="font-bold text-primary">{author && author.name}</h1>{" "}
        {/* Render username directly */}
        <h1 className="font-semibold">{text}</h1>
      </div>
    </div>
  );
};

export default SingleComment;
