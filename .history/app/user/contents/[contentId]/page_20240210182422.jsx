"use client";
// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests

import User from "@/app/components/user";
import ContentImage from "../components/contents/content-image";
import ProfileCardContent from "../components/contents/profile-cards-content";
import ContentTime from "../components/contents/content-time";
import ContentTextBox from "../components/contents/content-text-box";
import ContentList from "../components/contents/content-list";
import ContentTags from "../components/contents/content-tags";
import ContentScheduleButton from "../components/contents/content-schedule-button";
import ContentSectionHeader from "../components/contents/content-section-header";
import BarChart from "../components/contents/analytics-bar-chart";
import AnalyticsTripleReach from "../components/contents/analytics-tripple-stats";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import { useState } from "react";
// import { Data } from "./Data";
// import PieChart from "../components/PieChart";
// import "./styles.css";

Chart.register(CategoryScale);

export default function profilePage() {
  const access_token = process.env.ACCESS_TOKEN;
  // const access_token = "EABclpNe7DwcBO5MTrXlQApxDViK7DFZAxYvcSfHHMSZBmIWdMFIiZBrrQUxa4RRKzZAfZAgntHgqbZB7gZA71tolRhrBprh91hnIS8PQfuIZABYHCHvv9jNuMAXIZAlMIGX1v4hslRB4aISlYNkN5RQKH2mWWR5JYRL5koYopwJsAT75oKl4eHZAzp8MSEJ7YEMhunmctixHqeUn7Vnr0skbmo017Ye8ZBZCR734Oz7FgCAZD";
  const [apiData, setApiData] = useState(null);
  const base_url = "https://graph.facebook.com/v19.0";
  const page_id = "109297781230039";
  const post_id = "109297781230039_427236646102816";
  const reactionFetchMetrics = "insights?metric=post_reactions_by_type_total";
  const final_api_url = `${base_url}/${post_id}/${reactionFetchMetrics}&access_token=${access_token}`;
  console.log("final_api_url:", final_api_url);
  console.log("access_token:", access_token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get(
          final_api_url
          // "https://graph.facebook.com/v19.0/109297781230039_427236646102816/insights?metric=post_reactions_by_type_total&access_token=EABclpNe7DwcBO5MTrXlQApxDViK7DFZAxYvcSfHHMSZBmIWdMFIiZBrrQUxa4RRKzZAfZAgntHgqbZB7gZA71tolRhrBprh91hnIS8PQfuIZABYHCHvv9jNuMAXIZAlMIGX1v4hslRB4aISlYNkN5RQKH2mWWR5JYRL5koYopwJsAT75oKl4eHZAzp8MSEJ7YEMhunmctixHqeUn7Vnr0skbmo017Ye8ZBZCR734Oz7FgCAZD"
          // access_token
        );

        console.log("Data:", response.data);
        console.log("hi");
        // Update the state with the fetched data
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // data extraction
  let title, description, like, love, wow;
  if (apiData && apiData.data && apiData.data.length > 0) {
    const insightData = apiData.data[0];
    title = insightData.title;
    description = insightData.description;
    like = insightData.values[0].value.like;
    love = insightData.values[0].value.love;
    wow = insightData.values[0].value.wow;
  }

  return (
    <div>
      <div className="flex flex-col mt-16">
        <div className="mid w-8/12 self-center pt-4">
          <div className="card card-bordered bg-base-200 w-full shadow-xl p-4 gap-4">
            <ContentSectionHeader header="Content Details" />

            <div className="flex">
              <div className="basis-1/2 flex flex-col justify-around">
                <div className="relative">
                  <button className="btn btn-neutral min-h-0 h-6 w-16 absolute bottom-[10%] right-[10%]">
                    Edit Content
                  </button>
                  <img
                    src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                    className="rounded-full"
                  />
                </div>
                <div className="card-title border-b-2 justify-between">
                  Profiles Containing This Content
                  <button className="btn btn-neutral min-h-0 h-6 w-16">
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <ProfileCardContent
                    title="Profile 1"
                    img="https://png.pngtree.com/png-vector/20220309/ourlarge/pngtree-a-hardware-store-clip-art-store-illustration-vector-png-image_12545940.png"
                    description="hardware store"
                  />

                  <ProfileCardContent
                    title="Profile 2"
                    img="https://png.pngtree.com/png-vector/20220309/ourlarge/pngtree-a-hardware-store-clip-art-store-illustration-vector-png-image_12545940.png"
                    description="hardware store"
                  />

                  <ProfileCardContent
                    title="Profile 3"
                    img="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_52683-59856.jpg"
                    description="hardware golpo kori sobai mile
                    nice store    never think about it
                    "
                  />
                </div>
              </div>
              <div className="card-body basis-1/2 flex flex-col justify-around">
                <ContentTextBox
                  text="Content Title"
                  buttonName="Edit"
                  description=""
                />

                <ContentTime days="15" hours="10" min="24" sec="46" />

                <ContentTextBox
                  text="Description"
                  buttonName="Edit"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam"
                />

                <div className="flex justify-between">
                  <h2 className="card-title">Products and Consumer</h2>
                  <button className="btn btn-neutral min-h-0 h-6 w-16">
                    Edit
                  </button>
                </div>
                <div className="flex w-full justify-between">
                  <ContentList
                    listName="Products"
                    lists={["Product 1", "Product 2", "Product 3"]}
                  />
                  <ContentList
                    listName="Consumers"
                    lists={["Consumer 1", "Consumer 2", "Consumer 3"]}
                  />
                </div>

                <ContentTextBox
                  text="Hashtags"
                  buttonName="Edit"
                  description=""
                />

                {/* <ContentTags tags={["tag1", "tag2", "tag3"]} /> */}
              </div>
            </div>

            <div className="self-center">
              <ContentScheduleButton />
            </div>
            <ContentSectionHeader header="Content Analytics" />

            {/* <BarChart
              chartData={[
                {
                  title: "Daily Reach",
                  labels: ["A", "B", "C"],
                  data: [10, 20, 30],
                },
                {
                  title: "Weekly Reach",
                  labels: ["X", "Y", "Z"],
                  data: [15, 25, 35],
                },
                {
                  title: "Monthly Reach",
                  labels: ["X", "Y", "Z"],
                  data: [15, 25, 100],
                },
              ]}
            /> */}

            {/* <BarChart
            chartData={[
              {
                title: "Chart 1",
                labels: ["A", "B", "C", "D", "E"],
                data: [10, 20, 30, 40, 50],
              },
            ]}
          />

      {/* Second instance of BarChart */}
            {/* <BarChart
        chartData={[
          {
            title: "Chart 2",
            labels: ["X", "Y", "Z"],
            data: [15, 25, 35],
          },
        ]}
      />  */}

            <div className="card-title self-center">Reach</div>

            <AnalyticsTripleReach
              reactionCount="100"
              postViews="2.6M"
              fanViews="86"
              storyViews="14"
            />

            <div>
              <h2>Title: {title}</h2>
              <p>Description: {description}</p>
              <p>Like: {like}</p>
              <p>Love: {love}</p>
              <p>Wow: {wow}</p>
            </div>

            <BarChart
              chartData={[
                {
                  title: title,
                  description: description,
                  labels: ["Like", "Love", "Wow"],
                  data: [like, love, wow],
                },
              ]}
              barColors={["#0000FF", "#FF69B4", "#FFD700"]} // Custom colors for Like, Love, Wow
            />

            {/* <BarChart
              chartData={[
                {
                  title: "Post Reactions",
                  labels: ["Like", "Love", "Wow"],
                  data: [20, 30, 40],
                },
              ]}
              barColors={[
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
              ]}
            /> */}

            {/* <BarChart
              chartData={[
                {
                  title: "Post Reactions",
                  labels: ["Like", "Love", "Wow"],
                  data: [20, 30, 40],
                  colors: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                  ],
                },
              ]}
              barColors={[
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
              ]}
            /> */}

            {/* apiData: {apiData && JSON.stringify(apiData, null, 2)} */}

            <canvas id="lineChart"></canvas>
            {/* <div className="self-center">
              <p className="text-xl">
                <b>Search Appearance by Keywords</b>
              </p>
              <br />
              <p>
                <i>
                  <h6 className="text-blue-700">#discount</h6>
                </i>
              </p>
              <progress
                className="progress progress-success w-96"
                value="95"
                max="100"
              ></progress>
              <br />
              <p>
                <i>
                  <h6 className="text-blue-700">#juta</h6>
                </i>
              </p>
              <progress
                className="progress progress-error w-96"
                value="15"
                max="100"
              ></progress>
              <br />
              <p>
                <i>
                  <h6 class="text-blue-700">#bazar</h6>
                </i>Exit
                max="100"
              ></progress>
              <br />
              <p>
                <i>
                  <h6 className="text-blue-700">#shosta</h6>
                </i>
              </p>
              <progress
                className="progress progress-success w-96"
                value="75"
                max="100"
              ></progress>
              <br />
            </div> */}
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script src="../scripts/script.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
}
