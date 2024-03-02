import {useState,useEffect} from 'react'

import ContentSectionHeader from "@/app/components/contents/content-section-header";
import BarChart from "@/app/components/contents/analytics-bar-chart";
import AnalyticsTripleReach from "@/app/components/contents/analytics-tripple-stats";

export default function facebook({children}) {
  const [analytics,setAnalytics]=useState(false);
  useEffect(() => {
    // console.log(content);
    // if(!content||!content.postIds||!content.postIds.length){
    //   console.log('we are here');
    //   return;
    // }
    let postId=children;
    // content.postIds.forEach((elem)=>{
    //   if(elem.status==='success'&&elem.platform==='facebook')
    //     postId=elem.id;
    // });
    // if(!postId)
    //   return;
    const url=`https://graph.facebook.com/v19.0/${postId}/insights?metric=post_reactions_by_type_total,post_impressions_unique,post_engaged_users,post_impressions_fan,post_impressions_by_story_type&access_token=${process.env.NEXT_PUBLIC_FACEBOOK_TOKEN}`;
    const fetchData = async () => {
      const response=await fetch(url);
      if(response.status==200){
        const data=await response.json();
        setAnalytics(data);
        setReactions(data.data[0].values[0].value);
      }
      else{
        console.log(response.statusText);
      }
    };
    fetchData();
  },[]);
  return (
    <div className="flex flex-col mt-16">
      <div className="mid w-8/12 self-center pt-4">
        <div className="card card-bordered bg-base-200 w-full shadow-xl p-4 gap-4">
          <ContentSectionHeader header="Content Analytics" />

          {analytics && <BarChart
            chartData={[
              {
                title: analytics.data[0].title,
                labels: ["anger", "haha", "like", "love", "sorry", "wow"],
                data: [toNumber(reactions.anger), toNumber(reactions.haha), toNumber(reactions.like), toNumber(reactions.love), toNumber(reactions.sorry), toNumber(reactions.wow)],
              },
              {
                title: `${analytics.data[1].title} and ${analytics.data[2].title}`,
                labels: [analytics.data[1].title, analytics.data[2].title],
                data: [typeof analytics.data[1].values[0].value === 'number' ? analytics.data[1].values[0].value : 0, typeof analytics.data[2].values[0].value === 'number' ? analytics.data[2].values[0].value : 0],
              }
            ]}
          />}

          {analytics && reactions && <AnalyticsTripleReach
            reactionCount={`${toNumber(reactions.anger) + toNumber(reactions.haha) + toNumber(reactions.like) + toNumber(reactions.love) + toNumber(reactions.sorry) + toNumber(reactions.wow)}`}
            postViews={`${typeof analytics.data[1].values[0].value === 'number' ? analytics.data[1].values[0].value : 0}`}
            fanViews={`${typeof analytics.data[3].values[0].value === 'number' ? analytics.data[3].values[0].value : 0}`}
            storyViews={`${typeof analytics.data[4].values[0].value === 'number' ? analytics.data[4].values[0].value : 0}`}
          />}
        </div>
      </div>
    </div>
  )
}
