"use Client";
import React from "react";
import ProfileAnalytics from "./profile-analytics";
import checkmark from "../../public/checkmark.png"

export default function ProfileDetails({}) {
  return (
    <div>
      <ProfileAnalytics />
      <br></br>
      <div className="card-title flex justify-between border-solid border-b-2">
        Introduction
        <div className="card-actions">
          <div className="btn btn-neutral h-6 min-h-0">Edit</div>
        </div>
      </div>
      <div className="box" style={{ backgroundColor: 'white', color: 'black', transform: 'perspective(1000px) rotateX(10deg)' }}>
        <p style={{ color: 'black', fontSize: '16px' }}>
          This is my page of the startup company. We are a group of young and ambitious people who 
          want to change the world. We are a group of young and ambitious people who want to change 
          the system. We will sell leather products. Quality will be addressed first and foremost.
        </p>
        <br></br>
      </div>

      <div className="card-title flex justify-between border-solid border-b-2">
        Mission Statement
        <div className="card-actions">
          <div className="btn btn-neutral h-6 min-h-0">Edit</div>
        </div>
      </div>
      <div className="box" style={{ backgroundColor: 'black', color: 'white', transform: 'perspective(1000px) rotateX(10deg)' }}>
        <p style={{ color: 'white', fontSize: '16px' }}>
          This is my page of the startup company. We are a group of young and ambitious people who 
          want to change the world. We are a group of young and ambitious people who want to change 
          the system. We will sell leather products. Quality will be addressed first and foremost.
        </p>
        
      </div>

      <br></br>

      
      <div className="card-title flex justify-between border-solid border-b-2">
        Product Collection to Target Consumer Mapping
        <div className="card-actions">
          <div className="btn btn-neutral h-6 min-h-0" onclick="document.getElementById('add-more-product').style.display='block'">Add More</div>
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <div className="card-title flex justify-between border-solid border-b-2">
            Products/Services
            {/* <!-- <div className="card-actions">
              <div className="btn btn-neutral h-6 min-h-0">Edit</div>
            </div> --> */}
          </div>
          <div className="m-4 flex flex-col">
            <ul style={{listStyleImage: `url(${checkmark})` }} className="list-inside">
              
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-block">Product 1</div>
              </li>
              <div className="m-4">
                <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesnt harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-block">Product 2</div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-block">Product 3</div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-block"> Product 4</div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
            </ul>
            {/* <!-- <div className="btn btn-neutral self-center">See More</div> --> */}
          </div>
        </div>
        <div>
          <div className="card-title flex justify-between border-solid border-b-2">
            Target Consumers
            {/* <!-- <div className="card-actions">
              <div className="btn btn-neutral h-6 min-h-0">Edit</div>
            </div> --> */}
          </div>
          <div className="m-4 flex flex-col">
            <ul style={{ listStyleImage: "url('../public/checkmark.png')" }} className="list-inside">
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-flex w-11/12 justify-between">
                  Consumer 1
                  <div>
                    <button className="btn btn-neutral min-h-0 h-6">Edit</button>
                    <button className="btn btn-neutral min-h-0 h-6">Delete</button>
                  </div>
                </div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-flex w-11/12 justify-between">
                  Consumer 2
                  <div>
                    <button className="btn btn-neutral min-h-0 h-6">Edit</button>
                    <button className="btn btn-neutral min-h-0 h-6">Delete</button>
                  </div>
                </div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-flex w-11/12 justify-between">
                  Consumer 3
                  <div>
                    <button className="btn btn-neutral min-h-0 h-6">Edit</button>
                    <button className="btn btn-neutral min-h-0 h-6">Delete</button>
                  </div>
                </div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
              <li className="border-solid border-b-2">
                <div className="card-title text-sm inline-flex w-11/12 justify-between">
                  Consumer 4
                  <div>
                    <button className="btn btn-neutral min-h-0 h-6">Edit</button>
                    <button className="btn btn-neutral min-h-0 h-6">Delete</button>
                  </div>
                </div>
              </li>
              <div className="m-4">
              <div className="box" style={{ backgroundColor: 'white', color: 'black' }}>
                  <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
                    <li>This is a leather product. Our company has LWG certifications.</li>
                    <li>So our leather production doesn't harm the environment.</li>
                    <li>The leather product is made in Bangladesh.</li>
                    <li>It has been made with value addition.</li>
                    <li>The product is made in a way that it can be used for a long time.</li>
                    <li>The product has premium quality.</li>
                    <li>The leather is tanned in our country but processed in Italy.</li>
                  </ul>
                </div>
              </div>
            </ul>
            {/* <!-- <div className="btn btn-neutral self-center">See More</div> --> */}
          </div>
        </div>
      </div>
      <div className="btn btn-neutral w-32 self-center">See More</div>

      <br></br>
      <br></br>

      <div className="card-title flex justify-between border-solid border-b-2">
        Awards and Achievements
        <div className="card-actions">
          <div className="btn btn-neutral h-6 min-h-0" onclick="document.getElementById('add-award-achievements').style.display='block'">Add More</div>
        </div>
      </div>

      <div className="flex">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img
              src="https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-gold-award-ribbon-icon-cartoon-style-png-image_1996929.jpg"
              alt=""/>
          </div>
        </div>
        <div>
          <div className="card-title w-full justify-between">
            Achievement '09
            <div>
              <button className="btn btn-neutral min-h-0 h-6">Edit</button>
              <button className="btn btn-neutral min-h-0 h-6">Delete</button>
            </div>
          </div>
          In 2009 we won the best leather product award. We are proud of this achievement.
          We are proud of this achievement. We are proud of this achievement. We are proud of this achievement.
          We are proud of this achievement. We are proud of this achievement. We are proud of this achievement.
        </div>
      </div>

      <br></br>

      <div className="flex">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src="https://clipart-library.com/data_images/355637.png" alt=""/>
          </div>
        </div>
        <div>
          <div className="card-title w-full justify-between">
            Achievement '11
            <div>
              <button className="btn btn-neutral min-h-0 h-6">Edit</button>
              <button className="btn btn-neutral min-h-0 h-6">Delete</button>
            </div>
          </div>
          In 2011 we won the best leather product award. We are proud of this achievement.
          We are proud of this achievement. We are proud of this achievement. We are proud of this achievement.
          We are proud of this achievement. We are proud of this achievement. We are proud of this achievement.
        </div>
      </div>

      <br></br>

      <div className="flex">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img
              src="https://classroomclipart.com/image/static7/preview2/silver-award-medal-on-blue-red-ribbon-clip-art-58856.jpg"
              alt=""/>
          </div>
        </div>
        <div>
          <div class="card-title w-full justify-between">
            Achievement '13
            <div>
              <button class="btn btn-neutral min-h-0 h-6">Edit</button>
              <button class="btn btn-neutral min-h-0 h-6">Delete</button>
            </div>
          </div>
          In 2011 we won the best leather product award. We are proud of this achievement.
          We are proud of this achievement. We are proud of this achievement. We are proud of this achievement.
          We are proud of this achievement. We are proud of this achievement. We are proud of this achievement.
        </div>
      </div>

      <br></br>

      <div className="btn btn-neutral w-32 self-center">See More</div>

      <br></br>
      <br></br>

      <div className="card-title flex justify-between border-solid border-b-2">
        Testimonials
        <div className="card-actions">
          <div className="btn btn-neutral h-6 min-h-0">Add More</div>
        </div>
      </div>
      <div className="flex">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt=""/>
          </div>
        </div>
        <div>
          <div className="card-title w-full justify-between">
            Lorem Ipsum
            <div>
              <button className="btn btn-neutral min-h-0 h-6">Edit</button>
              <button className="btn btn-neutral min-h-0 h-6">Delete</button>
            </div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <br></br>

      <div className="flex">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          </div>
        </div>
        <div>
          <div className="card-title w-full justify-between">
            Lorem Ipsum
            <div>
              <button className="btn btn-neutral min-h-0 h-6">Edit</button>
              <button className="btn btn-neutral min-h-0 h-6">Delete</button>
            </div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <br></br>

      <div className="flex">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          </div>
        </div>
        <div>
          <div className="card-title w-full justify-between">
            Lorem Ipsum
            <div>
              <button className="btn btn-neutral min-h-0 h-6">Edit</button>
              <button className="btn btn-neutral min-h-0 h-6">Delete</button>
            </div>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <br></br>

      <div className="btn btn-neutral w-32 self-center">See More</div>
      

      
    </div>
  );
}
