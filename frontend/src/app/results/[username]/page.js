'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { User, Image as LucideImage, MessageCircle, Heart, Link as LinkIcon, Camera, Lock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LoadingAnimation = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const ResultsPage = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

      // Local storage'dan veri kontrolü
      const cachedData = localStorage.getItem(`instagram_data_${username}`);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/analyze`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username }),
        });

        if (!response.ok) throw new Error('Failed to fetch data');
        
        const result = await response.json();
        setData(result);
        // Veriyi local storage'a kaydet
        localStorage.setItem(`instagram_data_${username}`, JSON.stringify(result));
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <LoadingAnimation />;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!data) return <div className="text-center">Veri bulunamadı.</div>;

  const { user_info, user_feed, stories } = data;

  // Tüm feed verilerini state'de tutuyoruz, ama sadece top 6'yı gösteriyoruz
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader user={user_info} />
        {user_info.is_private ? (
          <PrivateAccountMessage username={user_info.username} />
        ) : (
          <>
            <StoriesSection stories={stories} />
            <TopPostsSection feed={user_feed} />
          </>
        )}
      </div>
    </div>
  );
};

const TopPostsSection = ({ feed }) => {
  if (!feed || feed.length === 0) return null;

  // Gönderileri beğeni sayısına göre sırala ve en çok beğenilen 6 tanesini al
  const topPosts = [...feed]
    .sort((a, b) => b.like_count - a.like_count)
    .slice(0, 6);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-pink-300">En Çok Beğenilen Gönderiler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const ProfileHeader = ({ user }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl mb-8"
  >
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="relative">
        <Image
          src={user.profile_pic_url}
          alt={user.username}
          width={150}
          height={150}
          className="rounded-full border-4 border-pink-500"
        />
        <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
          <Camera size={24} />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          {user.full_name}
        </h1>
        <p className="text-xl text-gray-300">@{user.username}</p>
        <p className="mt-2 text-gray-200">{user.biography}</p>
        {user.external_url && (
          <a href={user.external_url} target="_blank" rel="noopener noreferrer" 
             className="mt-2 text-pink-400 hover:text-pink-300 flex items-center justify-center md:justify-start">
            <LinkIcon size={16} className="mr-1" /> {user.external_url}
          </a>
        )}
      </div>
    </div>
    <div className="flex justify-around mt-8">
      <StatItem label="Gönderiler" value={user.media_count} />
      <StatItem label="Takipçiler" value={user.follower_count} />
      <StatItem label="Takip" value={user.following_count} />
    </div>
  </motion.div>
);

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);

const StoriesSection = ({ stories }) => {
  if (!stories || !stories['Highlighted Stories'] || stories['Highlighted Stories'].length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-pink-300">Öne Çıkan Hikayeler</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {stories['Highlighted Stories'].map((story, index) => (
          <div key={index} className="flex-shrink-0 w-24">
            <div className="w-20 h-20 rounded-full border-2 border-pink-500 p-1">
              <Image
                src={story.cover_image_url}
                alt={story.title}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <p className="text-center text-sm mt-2 text-gray-300">{story.title}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PostCard = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg"
  >
    <div className="relative aspect-square">
      <Image
        src={post.thumbnail_url}
        alt={`Post ${post.id}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4">
      <p className="text-sm mb-2 line-clamp-2 text-gray-200">{post.caption}</p>
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="flex items-center text-pink-400">
          <Heart className="mr-1" size={16} /> {post.like_count}
        </span>
        <span className="flex items-center text-blue-400">
          <MessageCircle className="mr-1" size={16} /> {post.comment_count}
        </span>
      </div>
    </div>
  </motion.div>
);

const PrivateAccountMessage = ({ username }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl mb-8 text-center"
  >
    <Lock size={48} className="mx-auto mb-4 text-pink-500" />
    <h2 className="text-2xl font-bold mb-2">Gizli Hesap</h2>
    <p className="text-gray-300">
      @{username} kullanıcısının hesabı gizli olduğu için daha fazla veri çekilemiyor.
    </p>
    <p className="mt-4 text-sm text-gray-400">
      Gizli hesapların içeriği sadece onaylanmış takipçiler tarafından görüntülenebilir.
    </p>
  </motion.div>
);

export default ResultsPage;
