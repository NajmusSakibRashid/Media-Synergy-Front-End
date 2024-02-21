import React from "react";
import CommunityCard from "./community-card"; // Assuming CommunityCard component is in a separate file

const CardContainer = () => {
  // Dummy data for demonstration
  const cardsData = [
    {
      id: 1,
      title: "Shoes!",
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    // Add more card data as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card) => (
        <div key={card.id} className="grid grid-cols-3">
          <CommunityCard
            title={card.title}
            image={card.image}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
