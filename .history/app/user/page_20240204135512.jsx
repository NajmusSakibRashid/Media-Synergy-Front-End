import User from "@/app/components/user";
import LeftInfo from "@/app/components/left-info";
import UpComingContents from "@/app/components/upcoming-contents";
import CardButton from "@/app/components/card-button";
import ProfileCardContainer from "@/app/components/profile-card-container";
import CollapsBoxTitle from "@/app/components/collaps-box-title";
import CardButtonContent from "@/app/components/card-button-content";
import CardButtonCommunity from '@/app/components/card-button-community'
import DashBoardStats from '@/app/components/dashboard-stats'
import CardButtonContentContainer from "@/app/components/card-button-content-container";

export default function userPage() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0 flex flex-col gap-4">
        <User />
        <LeftInfo />
      </div>
      <div className="basis-8/12 p-4 flex-grow-0 flex-shrink-0">
        <div className="p-4 grid grid-cols-3 gap-4">
          <CardButton
            title="Build Profile"
            img="https://static.vecteezy.com/system/resources/previews/010/336/740/original/construction-icon-isolated-on-transparent-background-png.png"
            link="/src/pages/build-profile.html"
          />
          <CardButton
            title="Create Content"
            img="https://cdni.iconscout.com/illustration/premium/thumb/content-creator-ideate-the-content-8628582-6873876.png?f=webp"
            link="/src/pages/build-profile.html"
          />
          <CardButton
            title="Community Suggestions"
            img="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
            link="/src/pages/build-profile.html"
          />
        </div>
        <div className="collapse collapse-arrow bg-base-200 rounded-none">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Your Profiles
          </div>
          <div className="collapse-content grid grid-cols-3 gap-4">
            <ProfileCardContainer />
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 rounded-none">
          <input type="radio" name="my-accordion-2" checked="checked"/>
          <div className="collapse-title text-xl font-medium">
            Your Contents
          </div>
          <div className="collapse-content">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <CardButtonContentContainer />
            </ul>
          </div>
        </div>
      </div>
      <div className='basis-2/12 p-4 flex-grow-0 flex-shrink-0'>
        <UpComingContents />
        <DashBoardStats />
        <DashBoardStats />
      </div>
    </div>
  );
}
