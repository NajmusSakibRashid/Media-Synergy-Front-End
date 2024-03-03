import React, { useState } from "react";

const ProfileCardDetails = ({ profile }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

    return (
      <div style={{ fontFamily: 'Times new Roman, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* Profile Name and Slogan */}
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}><b><big>Profiles</big></b></h1>
      {profile && (
        <>
          <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Name of the company</b></h2>
          <p style={{ color: '#666', marginBottom: '5px' }}>{profile.name}</p>
          <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Slogan</b></h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>{profile.slogan}</p>
        </>
      )}

      {/* Profile Logo */}
      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Logo</b></h2>
      {profile && <img src={profile.logo} alt={profile.name} style={{ maxWidth: '100%' }} />}
      <br />

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Description</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>This is the best company I hvavee ever seen</p>

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Goal</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>Our goal is to be the best company in the world</p>

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Physical Address</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}> 
      {/* {showMore? profile.slogan: profile.slogan.slice(0, 5)} */}
      1234 Main Street, Anytown, USA</p>
      {/* {profile.slogan.length > 1 && (
        <button onClick={toggleShowMore} className="text-blue-500 hover:underline">
          {showMore ? "See Less" : "See More"}
        </button>
      )} */}

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Email</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>abc@gmail.com</p>

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Website</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>www.abc.com</p>

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Business Hours</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>Monday: 9am-5pm</p>

      <h2 style={{ color: '#333', marginBottom: '10px' }}><b>Weekend</b></h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>Saturday, Sunday</p>


      {/* Profile Description */}
      {/* <h1>Description</h1>
      {profile && (
        <>
          {profile.description.aboutUs}
          <br />
          {profile.description.goal}
          <br />
        </>
      )} */}
    
      {/* Profile Contact */}
      {/* <h1>Contact</h1>
      {profile && (
        <>
          {profile.contact.physicalAddress}
          <br />
          {profile.contact.email}
          <br />
          {profile.contact.website && <a href={profile.contact.website}>{profile.contact.website}</a>}
          <br />
        </>
      )} */}
    
      {/* Profile Business Hours */}
      {/* <h1>Business Hours</h1>
      <ul>
        {profile &&
          Object.entries(profile.contact.businessHours).map(([day, hours]) => (
            <li key={day}>
              {day}: {hours}
            </li>
          ))}
      </ul> */}
    
      {/* Profile Weekend */}
      {/* <h1>Weekend</h1>
      {profile && profile.contact.weekend.join(', ')}
      <br />
    
      <hr />
    
      <h1>ProductConsumer</h1>
      <h1>Awards</h1>
      <h1>history</h1>
      <h1>Testimonial</h1> */}



    </div>
    
      );
    };
   
export default ProfileCardDetails;