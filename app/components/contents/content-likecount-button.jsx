// Create a buttton that will display the number of likes a content has and when clicked it increases the number of likecount in the database
// in the backend the likecount is stored in the content table

import React, { useState } from 'react';
import { useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LikeCountButton = ({ contentId }) => {
    const [session, loading] = useSession();
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        if (session) {
        const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/${contentId}/like`;
        const token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        const fetchData = async () => {
            const promise = await fetch(url, requestOptions);
            if (promise.status == 200) {
            const response = await promise.json();
            setLikeCount(response.likeCount);
            setLiked(response.liked);
            } else {
            alert(promise.statusText);
            }
        };
        fetchData();
        }
    }, [session]);
    
    const handleLike = async () => {
        if (session) {
        const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/${contentId}/like`;
        const token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
        };
        const fetchData = async () => {
            const promise = await fetch(url, requestOptions);
            if (promise.status == 200) {
            const response = await promise.json();
            setLikeCount(response.likeCount);
            setLiked(response.liked);
            } else {
            alert(promise.statusText);
            }
        };
        fetchData();
        } else {
        router.push('/auth/signin');
        }
    };
    
    return (
        <div className="flex flex-row gap-2">
        <button
            className="btn btn-accent"
            onClick={() => {
            handleLike();
            }}
        >
            Like
        </button>
        <p>{likeCount}</p>
        </div>
    );
};

export default LikeCountButton;