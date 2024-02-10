"use client";
import React, { useEffect } from "react";

import User from "@/app/components/user";
import ContentImage from "../../../components/contents/content-image";
import ProfileCardContent from "../../../components/contents/profile-cards-content";
import ContentTime from "../../../components/contents/content-time";
import ContentTextBox from "../../../components/contents/content-text-box";
import ContentList from "../../../components/contents/content-list";
import ContentTags from "../../../components/contents/content-tags";
import ContentScheduleButton from "../../../components/contents/content-schedule-button";
import ContentSectionHeader from "../../../components/contents/content-section-header";
import BarChart from "../../../components/contents/analytics-bar-chart";
import AnalyticsTripleReach from "../../../components/contents/analytics-tripple-stats";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
// import { Data } from "./Data";
// import PieChart from "../components/PieChart";
// import "./styles.css";

Chart.register(CategoryScale);

export default function profilePage({params}) {
  const [content, setContent] = useState(false);
  const [analytics,setAnalytics]=useState(false);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/${params.contentId}`;
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        setContent(response);
      } else {
        alert(promise.statusText);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(content);
    if(!content||!content.postIds||!content.postIds.length){
      console.log('we are here');
      return;
    }
    let postId=false;
    content.postIds.forEach((elem)=>{
      if(elem.status==='success'&&elem.platform==='facebook')
        postId=elem.id;
    });
    if(!postId)
      return;
    const url=`https://graph.facebook.com/v19.0/${postId}/insights?metric=post_reactions_by_type_total,post_impressions_unique,post_engaged_users&access_token=${process.env.NEXT_PUBLIC_FACEBOOK_TOKEN}`;
    const fetchData = async () => {
      const response=await fetch(url);
      if(response.status==200){
        const data=await response.json();
        setAnalytics(data);
      }
      else{
        console.log(response.statusText);
      }
    };
    fetchData();
  }, [content]);
  useEffect(() => {
    console.log('Analytics');
    console.log(analytics);
  }, [analytics]);
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
                    Edit
                  </button>
                  {content&&content.media&&<img
                    src={content.media[0]}
                    className="rounded-full"
                  />}
                </div>
                <div className="card-title border-b-2 justify-between">
                  Profiles Containing This Content
                  <button className="btn btn-neutral min-h-0 h-6 w-16">
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {content&&content.profile&&content.profile.map((profile) => <ProfileCardContent>{profile}</ProfileCardContent>)}
                </div>
              </div>
              <div className="card-body basis-1/2 flex flex-col justify-around">
                <ContentTextBox
                  text={content?.title}
                  buttonName="Edit"
                  description=""
                />

                {/* <ContentTime days={15} hours={10} min={24} sec={46} /> */}

                <ContentTextBox
                  text="Description"
                  buttonName="Edit"
                  description={content?.description}
                />

                <div className="flex justify-between">
                  <h2 className="card-title">Products and Consumer</h2>
                  <button className="btn btn-neutral min-h-0 h-6 w-16">
                    Edit
                  </button>
                </div>
                <div className="flex w-full justify-between">
                  {content&&content.productsServices&&<ContentList
                    listName="Products"
                    lists={content.productsServices}
                  />}
                  {content&&content.consumer&&<ContentList
                    listName='Consumers'
                    lists={content.consumer.map(consumer => <div>{`${consumer.ageFrom} to ${consumer.ageTo} ${consumer.gender.toLowerCase==='both'?'males and females':consumer.gender+'s'}`}</div>)}
                  />}
                </div>

                {/* <ContentTextBox
                  text="Hashtags"
                  buttonName="Edit"
                  description=""
                /> */}

                {/* <ContentTags tags={["tag1", "tag2", "tag3"]} /> */}
              </div>
            </div>

            <div className="self-center">
              <ContentScheduleButton />
            </div>
            <ContentSectionHeader header="Content Analytics" />

            <BarChart
              chartData={[
                {
                  title: {analytics.data[0].title},
                  labels: ["A", "B", "C"],
                  data: [10, 20, 30],
                },
                {
                  title: "Weekly Reach",
                  labels: ["X", "Y", "Z"],
                  data: [15, 25, 35],
                }
              ]}
            />


            <div className="card-title self-center">Reach</div>

            <AnalyticsTripleReach
              reactionCount="100"
              postViews="2.6M"
              fanViews="86"
              storyViews="14"
            />

            {/* <canvas id="lineChart"></canvas>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script src="../scripts/script.js"></script> */}
          </div>
        </div>
      </div>
    </div>
  );
}
