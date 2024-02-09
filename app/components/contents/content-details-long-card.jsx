import React from 'react';

const ContentDetailsLongCard = () => {
  return (
    <div>
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
  );
};

export default ContentDetailsLongCard;
