import React from "react";
import User from "@/app/components/user";
import LeftInfo from "@/app/components/left-info";
import UpComingContents from "@/app/components/upcoming-contents";
import CardButton from "@/app/components/card-button";
import ProfileCards from "@/app/components/profile-cards";
import CollapsBoxTitle from "@/app/components/collaps-box-title";
import CardButtonContent from "@/app/components/card-button-content";
import CardButtonCommunity from '@/app/components/card-button-community'

export default function userPage() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0 flex flex-col gap-4">
        <User />
        <LeftInfo />
      </div>
      <div className="basis-8/12 p-4 flex-grow-0 flex-shrink-0">
        <div className="grid grid-cols-3 gap-4">
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
          <CollapsBoxTitle title="Your Profiles" />
          <div className="grid grid-cols-3 gap-4">
            <ProfileCards
              profileTitle="Profile 1"
              profileImg="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
            <ProfileCards
              profileTitle="Profile 2"
              profileImg="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
            <ProfileCards
              profileTitle="Profile 1"
              profileImg="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
            <ProfileCards
              profileTitle="Profile 2"
              profileImg="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 rounded-none">
          <CollapsBoxTitle title="Your Community" />
          <div className="grid grid-cols-3 gap-4">
          <CardButtonCommunity
            title='Restaurant Owners of Badda'
            img='https://media.istockphoto.com/id/1357830750/vector/geometric-illustration-of-multi-coloured-human-figures.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=2uvkAa8B9pyBcMbMUoE6zQVXPrNAz8Tdysdfq8G3oKM='
            link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            avatar_img='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            btn_name='Visit Community'
          />
          <CardButtonCommunity
            title='All Mirpur Hardware Suppliers'
            img='https://img.freepik.com/premium-vector/illustration-people-different-races-defense-human-rights_724548-707.jpg'
            link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            avatar_img='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            btn_name='Visit Community'
          />
          <CardButtonCommunity
            title='Hotel Owners BD'
            img='https://thumbs.dreamstime.com/b/illustration-people-consumer-needs-wants-27368663.jpg'
            link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            avatar_img='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
            btn_name='Visit Community'
          />
          <CardButtonCommunity
            title='See more'
            img='https://static.vecteezy.com/system/resources/previews/017/375/847/non_2x/plus-sign-icon-white-neumorphism-soft-ui-design-for-web-design-application-ui-and-more-button-vector.jpg'
            link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            avatar_img='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            description='Click here to watch more items in this category'
            btn_name='Visit Community'
          />
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 rounded-none">
          <CollapsBoxTitle title="Your Contents" />
          <div className="grid grid-cols-3 gap-4">
            <CardButtonContent
              title='Content 1'
              img='https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png'
              description='Life is meaningless without a good burger'
              btn_name='Visit Content'
              date='Dec,2024'
            />
            <CardButtonContent
              title='Content 2'
              img='https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg'
              description='Life is meaningless without a good burger'
              btn_name='Visit Content'
              date='Oct,2024'
            />
            <CardButtonContent
              title='Content 3'
              img='https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg'
              description='Life is meaningless without a good burger'
              btn_name='Visit Content'
              date='Mar,2024'
            />
            <CardButtonContent
              title='Content 4'
              img='https://static.vecteezy.com/system/resources/previews/017/375/847/non_2x/plus-sign-icon-white-neumorphism-soft-ui-design-for-web-design-application-ui-and-more-button-vector.jpg'
              description='Life is meaningless without a good burger'
              btn_name='See more'
              date=''
            />
            </div>
        </div>
      </div>

      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0">
        <UpComingContents />
      </div>
    </div>
  );
}
