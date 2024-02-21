import React from "react";
import HeroCommunity from "@/app/components/hero-community";
import CommunityCardContainer from "@/app/components/community-card-container";

const Page = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 top-0 hidden w-1/5 p-5 md:mt-20 lg:flex bg-white">
        LEFT
      </div>
      <div className="min-h-screen w-full  md:w-4/5 lg:mx-auto lg:w-3/5">
        {/* {props.children} */}

        <HeroCommunity />
        <CommunityCardContainer />


      </div>
      <div className="fixed bottom-0 right-0 top-0 hidden w-1/5 p-5 md:mt-20 md:flex overflow-auto scroll-smooth bg-red-50">
        {/* {props.right} */}
        RIGHT
      </div>
    </div>
  );
};

export default Page;
