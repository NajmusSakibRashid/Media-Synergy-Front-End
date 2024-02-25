import React from "react";
import Card from "./community-cards-large";

const CommunitieSuggestions = () => {
  // Dummy data for demonstration
  const communities = [
    {
      id: 1,
      title: "Food",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
      description:
        "Food is any substance consumed to provide nutritional support for an organism. It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
    },
    {
      id: 2,
      title: "Travel",
      image:
        "https://play-lh.googleusercontent.com/Zw2EmfHE_pUKtdMhHOOIn__DdsgKsd82guAvC5ei6WLjdMpqToe2LxE7_4TBvHe_s6c",
      description:
        "Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.",
    },
    {
      id: 3,
      title: "Technology",
      image: "https://wp.technologyreview.com/wp-content/uploads/2022/07/government-tech-insider.png",
      description:
        "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">
        <p>Suggested for You</p>
      </h1>
      <div className="grid-flex-row grid-cols-1">
        {communities.map((community) => (
          <Card
            key={community.id}
            title={community.title}
            image={community.image}
            description={community.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunitieSuggestions;
