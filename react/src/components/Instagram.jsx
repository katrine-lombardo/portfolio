import React, { useEffect, useState } from "react";

const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
const userId = import.meta.env.VITE_INSTAGRAM_USER_ID;

const InstagramProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
      );
      const data = await response.json();
      setProfileData(data);
    };

    const fetchMedia = async () => {
      const response = await fetch(
        `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
      );
      const data = await response.json();
      setMedia(data.data);
    };
    fetchProfileData();
    fetchMedia();
  }, []);

  const renderMediaItem = (item) => {
    switch (item.media_type) {
      case "IMAGE":
        return (
          <img
            key={item.id}
            src={item.media_url}
            alt={item.caption}
            className='w-full h-full object-cover'
          />
        );
      case "VIDEO":
        return (
          <video
            className='w-full max-h-full object-cover'
            key={item.id}
            controls
          >
            <source src={item.media_url} type='video/mp4' />
          </video>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md max-w-xl w-full mx-auto'>
      {profileData && (
        <div>
          <div className='flex items-start justify-center'>
            <img
              src='./images/domino_and_badingo.jpeg'
              className='w-24 aspect-square object-cover rounded-full border-4 border-white'
              alt='Domino and Badingo'
            />
          </div>
          <div className='flex items-center my-2'>
            <h2 className='text-xl font-bold mx-auto text-slate-600'>
              @{profileData.username}
            </h2>
          </div>
          <div className='grid grid-cols-3 gap-3 mx-auto'>
            {media.map(renderMediaItem)}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramProfile;
