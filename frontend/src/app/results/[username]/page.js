'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { User, Users, Image as LucideImage, MessageCircle, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ResultsPage = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCaptions, setExpandedCaptions] = useState({});
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Önce localStorage'dan veriyi kontrol edelim
        const cachedData = localStorage.getItem(`instagramAnalysis_${username}`);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // Eğer localStorage'da veri yoksa, API'ye istek atalım
        const response = await fetch(`/api/analyze`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username }),
        });
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
        // Yeni veriyi localStorage'a kaydedelim
        localStorage.setItem(`instagramAnalysis_${username}`, JSON.stringify(result));
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const toggleCaption = (index) => {
    setExpandedCaptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;
  if (!data || !data.user_profile || !data.user_posts) return <div className="text-white text-center">No data available</div>;

  const { user_profile, user_posts } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          Instagram Profil Analizi Sonuçları
        </motion.h1>
        
        {/* User Profile Information */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-8 shadow-2xl mb-12"
        >
          <div className="flex items-center mb-6">
            <Image 
              src={user_profile.hd_profile_pic_versions.url} 
              alt={user_profile.username} 
              width={120} 
              height={120} 
              className="rounded-full mr-6 border-4 border-pink-500"
            />
            <div>
              <h2 className="text-3xl font-bold">{user_profile.full_name}</h2>
              <p className="text-xl text-pink-400">@{user_profile.about.username}</p>
            </div>
          </div>
          <p className="mb-6 text-lg">{user_profile.biography}</p>
          <div className="flex justify-between mb-6">
            <StatCard icon={<LucideImage />} value={user_profile.media_count} label="Gönderiler" />
            <StatCard icon={<Users />} value={user_profile.follower_count} label="Takipçiler" />
            <StatCard icon={<User />} value={user_profile.following_count} label="Takip" />
          </div>
        </motion.div>

        {/* Top Posts */}
        <motion.h3 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-pink-400"
        >
          En Popüler Gönderiler
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {user_posts.items
            .sort((a, b) => b.like_count - a.like_count)
            .slice(0, 6)
            .map((post, index) => (
              <PostCard key={index} post={post} index={index} expandedCaptions={expandedCaptions} toggleCaption={toggleCaption} />
            ))}
        </div>

        {/* Detailed Analysis Button */}
        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDetailedAnalysis(!showDetailedAnalysis)}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            {showDetailedAnalysis ? 'Detaylı Analizi Gizle' : 'Detaylı Analizi Göster'}
            {showDetailedAnalysis ? <ChevronUp className="inline-block ml-2" /> : <ChevronDown className="inline-block ml-2" />}
          </motion.button>
        </div>

        {/* AI Analysis Section */}
        {showDetailedAnalysis && data.ai_analysis && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-8 shadow-2xl mt-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-pink-400">Yapay Zeka Analizi</h3>
            <pre className="whitespace-pre-wrap text-lg">
              {JSON.stringify(data.ai_analysis, null, 2)}
            </pre>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="text-center bg-gray-700 bg-opacity-50 rounded-lg p-4 flex flex-col items-center"
  >
    {React.cloneElement(icon, { className: "text-pink-400 mb-2", size: 24 })}
    <span className="text-2xl font-bold">{value}</span>
    <p className="text-gray-300">{label}</p>
  </motion.div>
);

const PostCard = ({ post, index, expandedCaptions, toggleCaption }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-lg p-4 shadow-lg"
  >
    <Image 
      src={post.thumbnail_url} 
      alt={`Gönderi ${index + 1}`} 
      width={400} 
      height={400}
      className="w-full h-64 object-cover mb-4 rounded-lg"
    />
    <div className={`text-sm mb-2 ${expandedCaptions[index] ? '' : 'h-12 overflow-hidden'}`}>
      {post.caption.text}
    </div>
    {post.caption.text.length > 100 && (
      <button 
        onClick={() => toggleCaption(index)}
        className="text-pink-400 text-sm mb-2 hover:underline"
      >
        {expandedCaptions[index] ? 'Daha az göster' : 'Devamını oku'}
      </button>
    )}
    <div className="flex justify-between text-sm text-gray-400">
      <span>
        <Heart className="inline-block mr-1 text-pink-500 fill-current" size={16} /> {post.like_count}
      </span>
      <span>
        <MessageCircle className="inline-block mr-1 text-blue-400" size={16} /> {post.comment_count}
      </span>
    </div>
  </motion.div>
);

export default ResultsPage;
