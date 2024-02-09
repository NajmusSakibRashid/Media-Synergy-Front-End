import React from "react";
import User from "@/app/components/user";
import ContentImage from "../components/contents/content-image";
import ProfileCardContent from "../components/contents/profile-cards-content";

export default function profilePage() {
  return (
    <div>
      <div class="flex flex-col mt-16">
        <div class="mid w-8/12 self-center pt-4">
          <div class="card card-bordered bg-base-200 w-full shadow-xl p-4 gap-4">
            <div class="card-title text-4xl border-solid border-b-2 w-full">
              Content Details
            </div>
            <div class="flex">
              <div class="basis-1/2 flex flex-col justify-around">
                <div class="relative">
                  <button class="btn btn-neutral min-h-0 h-6 w-16 absolute bottom-[10%] right-[10%]">
                    Edit Content
                  </button>
                  <img
                    src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"
                    class="rounded-full"
                  />
                </div>
                <div class="card-title border-b-2 justify-between">
                  Profiles Containing This Content
                  <button class="btn btn-neutral min-h-0 h-6 w-16">Edit</button>
                </div>
                <div class="grid grid-cols-2 gap-4">
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
              <div class="card-body basis-1/2 flex flex-col justify-around">
                <div class="flex justify-between">
                  <h2 class="card-title">Lorem Ipsum</h2>
                  <button class="btn btn-neutral min-h-0 h-6 w-16">Edit</button>
                </div>
                <div>
                  <h2 class="card-title">Time after posted:</h2>
                  <div class="flex gap-5">
                    <div>
                      <span class="countdown font-mono text-4xl">
                        {/* <span style="--value:15;"></span> */}
                      </span>
                      days
                    </div>
                    <div>
                      <span class="countdown font-mono text-4xl">
                        {/* <span style="--value:10;"></span> */}
                      </span>
                      hours
                    </div>
                    <div>
                      <span class="countdown font-mono text-4xl">
                        {/* <span style="--value:24;"></span> */}
                      </span>
                      min
                    </div>
                    <div>
                      <span class="countdown font-mono text-4xl">
                        {/* <span style="--value:46;"></span> */}
                      </span>
                      sec
                    </div>
                  </div>
                </div>
                <div class="flex justify-between">
                  <h2 class="card-title">Description</h2>
                  <button class="btn btn-neutral min-h-0 h-6 w-16">Edit</button>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
                <div class="flex justify-between">
                  <h2 class="card-title">Products and Consumer</h2>
                  <button class="btn btn-neutral min-h-0 h-6 w-16">Edit</button>
                </div>
                <div class="flex w-full justify-between">
                  {/* <ul style="list-style-image:url('../img/checkmark.png')" class="list-inside p-4">
                    <div class="card-title">Products:</div>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                  </ul> */}
                  {/* <ul style="list-style-image:url('../img/checkmark.png')" class="list-inside p-4">
                    <div class="card-title">Consumers:</div>
                    <li>Consumer 1</li>
                    <li>Consumer 2</li>
                    <li>Consumer 3</li>
                  </ul> */}
                </div>
                <div class="flex justify-between">
                  <h2 class="card-title">Key Words</h2>
                  <button class="btn btn-neutral min-h-0 h-6 w-16">Edit</button>
                </div>
                <div class="flex gap-5">
                  <div class="badge badge-outline badge-primary">Discount</div>
                  <div class="badge badge-outline badge-primary">Juta</div>
                  <div class="badge badge-outline badge-primary">Bazar</div>
                  <div class="badge badge-outline badge-primary">Shosta</div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-accent w-32 self-center"
              onclick="window.location.href='/src/pages/scheduling-dashboard.html'"
            >
              Schedule
            </button>
            <div class="card-title text-4xl border-solid border-b-2 w-full">
              Analytics
            </div>
            <div class="stats rounded-none border-solid">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Total Likes</div>
                <div class="stat-value text-primary">25.6K</div>
                <div class="stat-desc">21% more than last month</div>
              </div>
              <div class="stat">
                <div class="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Post Views</div>
                <div class="stat-value text-secondary">2.6M</div>
                <div class="stat-desc">21% more than last month</div>
              </div>

              <div class="stat">
                <div class="stat-figure text-secondary">
                  <div class="avatar online">
                    <div class="w-16 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
                <div class="stat-value">86%</div>
                <div class="stat-title">Liked and Followed</div>
                <div class="stat-desc text-secondary">31 tasks remaining</div>
              </div>
            </div>
            <div class="card-title self-center">Reach</div>
            <canvas id="lineChart"></canvas>
            {/* <div class="self-center">
              <p class="text-xl">
                <b>Search Appearance by Keywords</b>
              </p>
              <br />
              <p>
                <i>
                  <h6 class="text-blue-700">#discount</h6>
                </i>
              </p>
              <progress
                class="progress progress-success w-96"
                value="95"
                max="100"
              ></progress>
              <br />
              <p>
                <i>
                  <h6 class="text-blue-700">#juta</h6>
                </i>
              </p>
              <progress
                class="progress progress-error w-96"
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
                  <h6 class="text-blue-700">#shosta</h6>
                </i>
              </p>
              <progress
                class="progress progress-success w-96"
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
