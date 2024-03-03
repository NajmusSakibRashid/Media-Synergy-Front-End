'use client';
import ProfileCards from "@/app/components/profile-cards";
import LoadingIcon from "./utilities/loading-icon";
import { useState, useEffect } from 'react';

export default function ProfileCardContainer() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const fetchData = async () => {
      try {
        const promise = await fetch(url, requestOptions);
        if (promise.status === 200) {
          const response = await promise.json();
          setProfiles(response);
        } else {
          throw new Error(promise.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading state to false when data fetching is completed
      }
    };

    fetchData();
  }, []);

  return (
      
    profiles?.map((profile) => (
      <div key={profile._id}>
        <ProfileCards>{profile}</ProfileCards>
      </div>
    ))
  );
}
