import React from 'react';

const Profile = ({ profiles }) => {
  return (
    <div>
      <h1>Profiles </h1>
      {profiles?.length}
      {profiles?.map((profile, index) => (
        <div key={index}>
          <h2>{profile?.name}</h2>
          <img src={profile?.logo} alt={profile?.name} />
          <p>Slogan: {profile?.slogan}</p>
          <p>About Us: {profile?.description.aboutUs}</p>
          <p>Goal: {profile?.description.goal}</p>
          <p>Physical Address: {profile?.contact.physicalAddress}</p>
          <p>Email: {profile?.contact.email}</p>
          <p>Website: <a href={profile?.contact.website}>{profile?.contact.website}</a></p>
          <p>Business Hours:</p>
          <ul>
            {Object.entries(profile?.contact.businessHours).map(([day, hours]) => (
              <li key={day}>{day}: {hours}</li>
            ))}
          </ul>
          <p>Weekend: {profile.contact.weekend.join(', ')}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Profile;
