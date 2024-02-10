import React from "react";

import PlusButton from "@/app/components/scheduling/plus-button";
import ContentCard from "@/app/components/scheduling/content-card";
import Schedule from "@/app/components/scheduling/schedule";

function Page() {
  return (
    <div>
      {/* <div className=""> */}
      {/* <div className="drawer-content"> */}
      {/* <!-- <label for="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> --> */}

      {/* <!-- Add your components inside the following div --> */}
      <div className="flex">
        <div className="basis-4/12 flex flex-col justify-center p-4 gap-4">
          <div className="">
            <PlusButton btn_text="Create Content" />
            <br />
            <PlusButton btn_text="Search" />
          </div>
          {/* <div className="join">
                <input type="text" className="input input-accent p-4 join-item w-full" placeholder="Search Content">
                <button className="btn btn-accent join-item">Search</button>
              </div> */}

          <div className="grid grid-cols-2 gap-4">
            <ContentCard
              post_title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              image="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
            />

            <ContentCard
              post_title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              image="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
            />

            <ContentCard
              post_title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              image="https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg"
            />
          </div>
        </div>
        {/* <div className="basis-8/12 p-4">
          <div
            className="h-screen overflow-scroll grid auto-rows-auto"
            style={{ width: "66vw", gridTemplateColumns: "repeat(25,8rem)" }}
          >
            <div></div>
            <div className="sticky top-0 p-4">08:00 AM</div>
            <div className="sticky top-0 p-4">09:00 AM</div>
            <div className="sticky top-0 p-4">10:00 AM</div>
            <div className="sticky top-0 p-4">11:00 AM</div>
            <div className="sticky top-0 p-4">12:00 PM</div>
            <div className="sticky top-0 p-4">01:00 PM</div>
            <div className="sticky top-0 p-4">02:00 PM</div>
            <div className="sticky top-0 p-4">03:00 PM</div>
            <div className="sticky top-0 p-4">04:00 PM</div>
            <div className="sticky top-0 p-4">05:00 PM</div>
            <div className="sticky top-0 p-4">06:00 PM</div>
            <div className="sticky top-0 p-4">07:00 PM</div>
            <div className="sticky top-0 p-4">08:00 PM</div>
            <div className="sticky top-0 p-4">09:00 PM</div>
            <div className="sticky top-0 p-4">10:00 PM</div>
            <div className="sticky top-0 p-4">11:00 PM</div>
            <div className="sticky top-0 p-4">12:00 AM</div>
            <div className="sticky top-0 p-4">01:00 AM</div>
            <div className="sticky top-0 p-4">02:00 AM</div>
            <div className="sticky top-0 p-4">03:00 AM</div>
            <div className="sticky top-0 p-4">04:00 AM</div>
            <div className="sticky top-0 p-4">05:00 AM</div>
            <div className="sticky top-0 p-4">06:00 AM</div>
            <div className="sticky top-0 p-4">07:00 AM</div>
            <div className="sticky left-0">Saturday</div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
                <div
                  className="btn btn-primary btn-xs m-2"
                  onclick="document.getElementById('more-schedules').style.display='grid'"
                >
                  + 3 more
                </div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="sticky left-0">Sunday</div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="sticky left-0">Monday</div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="sticky left-0">Tuesday</div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="sticky left-0">Wednesday</div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="sticky left-0">Thursday</div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="sticky left-0">Friday</div>
            <div className="border-solid border-l-2 h-48 relative">
              <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
                <div className="avatar absolute -top-4 -left-4 z-10">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="badge badge-outline">Scheduled</div>
              </div>
            </div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
            <div className="border-solid border-l-2 h-48 relative"></div>
          </div>
        </div> */}

        <Schedule />
      </div>
      {/* <div
            id="scheduling-form"
            className="hidden z-40 fixed top-0 left-0 h-screen w-screen"
            style="background-color: rgba(0,0,0,.5);"
          >
            <div className="bg-base-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl p-4 max-h-screen overflow-y-scroll opacity-100">
              <div
                className="absolute right-0 top-0 p-1"
                onclick="document.getElementById('scheduling-form').style.display='none'"
              >
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                  alt=""
                  className="w-4"
                />
              </div>
              <div className="flex m-4">
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                  className="w-64"
                />
                <div className="flex flex-col justify-center items-center p-4 gap-4">
                  <div className="card-title">Lorem Ipsum</div>
                  <div className="card-body p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </div>
                </div>
              </div>
              <div className="menu-title">Select Social Media</div>
              <div className="flex justify-between items-center m-4">
                <input
                  id="facebook"
                  value="facebook"
                  type="checkbox"
                  className="checkbox checkbox-xl checkbox-primary"
                />
                <label htmlFor="facebook">
                  <img
                    className="rounded-full w-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                    alt=""
                  />
                </label>
                <input
                  id="twitter"
                  value="twitter"
                  type="checkbox"
                  className="checkbox checkbox-xl checkbox-primary"
                />
                <label htmlFor="twitter">
                  <img
                    className="rounded-full w-8"
                    src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
                    alt=""
                  />
                </label>
                <input
                  id="instagram"
                  value="instagram"
                  type="checkbox"
                  className="checkbox checkbox-xl checkbox-primary"
                />
                <label htmlFor="instagram">
                  <img
                    className="rounded-full w-8"
                    src="https://img.freepik.com/premium-vector/instagram-vector-social-media-icon-instagram-logo-illustration_153454-525.jpg"
                    alt=""
                  />
                </label>
                <input
                  id="youtube"
                  value="youtube"
                  type="checkbox"
                  className="checkbox checkbox-xl checkbox-primary"
                />
                <label htmlFor="youtube">
                  <img
                    className="rounded-full w-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png"
                    alt=""
                  />
                </label>
                <input
                  id="linkedin"
                  value="linkedin"
                  type="checkbox"
                  className="checkbox checkbox-xl checkbox-primary"
                />
                <label htmlFor="linkedin">
                  <img
                    className="rounded-full w-8"
                    src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                    alt=""
                  />
                </label>
                <input
                  id="tiktok"
                  value="tiktok"
                  type="checkbox"
                  className="checkbox checkbox-xl checkbox-primary"
                />
                <label htmlFor="tiktok">
                  <img
                    className="rounded-full w-8"
                    src="https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw"
                    alt=""
                  />
                </label>
              </div>
              <div className="menu-title">Select Schedule</div>
              <div className="flex flex-col m-4">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="input input-primary input-bordered"
                />
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="input input-primary input-bordered"
                />
                <label htmlFor="repeat">Repeat:</label>
                <select
                  name="repeat"
                  id="repeat"
                  className="select select-bordered select-primary w-full"
                >
                  <option value="none">None</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="flex justify-center items-center m-4">
                <button className="btn btn-primary">Schedule</button>
              </div>
            </div>
          </div> */}
      {/* <div
            id="more-schedules"
            className="hidden z-40 fixed top-0 left-0 h-screen w-screen"
            style="background-color: rgba(0,0,0,.5);"
          >
            <div className="grid bg-base-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl p-4 max-h-screen overflow-y-scroll grid-cols-3 gap-4">
              <div
                className="absolute right-0 top-0 p-1"
                onclick="document.getElementById('more-schedules').style.display='none'"
              >
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                  alt=""
                  className="w-4"
                />
              </div>
              <div className="card shadow-xl w-full p-4">
                <img
                  src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="card-body p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </div>
                <div className="card-actions whitespace-nowrap">
                  <button className="btn btn-accent w-full btn-sm">Schedule</button>
                  <button
                    className="btn btn-accent w-full btn-sm"
                    onclick="window.location.href='/src/pages/analytics_content.html'"
                  >
                    Details
                  </button>
                </div>
              </div>
              <div className="card shadow-xl w-full p-4">
                <img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="card-body p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </div>
                <div className="card-actions whitespace-nowrap">
                  <button className="btn btn-accent w-full btn-sm">Schedule</button>
                  <button
                    className="btn btn-accent w-full btn-sm"
                    onclick="window.location.href='/src/pages/analytics_content.html'"
                  >
                    Details
                  </button>
                </div>
              </div>
              <div className="card shadow-xl w-full p-4">
                <img
                  src="https://img.freepik.com/free-vector/hotel-building-concept-illustration_114360-12959.jpg"
                  alt=""
                />
                <div className="card-title">Lorem Ipsum</div>
                <div className="card-body p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </div>
                <div className="card-actions whitespace-nowrap">
                  <button className="btn btn-accent w-full btn-sm">Schedule</button>
                  <button
                    className="btn btn-accent w-full btn-sm"
                    onclick="window.location.href='/src/pages/analytics_content.html'"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Page;
