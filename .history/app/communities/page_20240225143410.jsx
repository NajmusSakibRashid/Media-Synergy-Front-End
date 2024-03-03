"use client";
import React, { useState, useEffect } from "react";
import HeroCommunity from "@/app/components/hero-community";
import CommunityCardContainer from "@/app/components/community-card-container";
import LeftLayout from "@/app/components/communities/community-filter-search";
import RightLayout from "@/app/components/communities/community-suggestions";

const Page = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACK_END}/communities`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch communities");
      }
      const data = await response.json();
      setCommunities(data);
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("communityCardContainer");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="fixed bottom-0 left-0 top-0 hidden w-1/5 p-5 md:mt-20 lg:flex bg-base-200 rounded-lg scroll-smooth">
        <LeftLayout />
      </section>
      <section className="min-h-screen w-full md:w-4/5 lg:mx-auto lg:w-3/5 rounded-lg">
        <HeroCommunity scrollToNextSection={scrollToNextSection} />
      </section>
      <section
        id="communityCardContainer"
        className="min-h-screen w-full md:w-4/5 lg:mx-auto lg:w-3/5 rounded-lg"
      >
        <CommunityCardContainer communities={communities} />
      </section>
      <section className="fixed bottom-0 right-0 top-0 hidden w-1/5 p-5 md:mt-20 md:flex overflow-auto scroll-smooth bg-base-200 rounded-lg">
        <RightLayout />
      </section>
    </div>
  );
};

export default Page;
