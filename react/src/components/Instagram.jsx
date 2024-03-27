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

  return (
    <div>
      {profileData && (
        <div>
          <h2>{profileData.username}</h2>
          {media.map((item) => (
            <img key={item.id} src={item.media_url} alt={item.caption} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramProfile;
