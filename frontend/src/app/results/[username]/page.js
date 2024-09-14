'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { User, Users, Image as LucideImage, MessageCircle, Heart } from 'lucide-react';
import Image from 'next/image';

const ResultsPage = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCaptions, setExpandedCaptions] = useState({});

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Instagram Profil Analizi Sonuçları</h1>
        
        {/* User Profile Information */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <Image 
              src={user_profile.hd_profile_pic_versions.url} 
              alt={user_profile.username} 
              width={96} 
              height={96} 
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold">{user_profile.full_name}</h2>
              <p className="text-gray-400">@{user_profile.about.username}</p>
            </div>
          </div>
          <p className="mb-4">{user_profile.biography}</p>
          <div className="flex justify-between mb-6">
            <div className="text-center">
              <LucideImage className="inline-block mr-2" />
              <span className="font-bold">{user_profile.media_count}</span>
              <p>Gönderiler</p>
            </div>
            <div className="text-center">
              <Users className="inline-block mr-2" />
              <span className="font-bold">{user_profile.follower_count}</span>
              <p>Takipçiler</p>
            </div>
            <div className="text-center">
              <User className="inline-block mr-2" />
              <span className="font-bold">{user_profile.following_count}</span>
              <p>Takip</p>
            </div>
          </div>
        </div>

        {/* Top Posts */}
        <h3 className="text-2xl font-bold mb-4">En Popüler Gönderiler</h3>
        <div className="grid grid-cols-3 gap-4">
          {user_posts.items
            .sort((a, b) => b.like_count - a.like_count) // En çok beğeniden en aza sırala
            .slice(0, 6) // İlk 6 gönderiyi al
            .map((post, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <Image 
                src={post.thumbnail_url} 
                alt={`Gönderi ${index + 1}`} 
                width={400} 
                height={400}
                className="w-full h-64 object-cover mb-2 rounded"
              />
              <div className={`text-sm mb-2 ${expandedCaptions[index] ? '' : 'h-12 overflow-hidden'}`}>
                {post.caption.text}
              </div>
              {post.caption.text.length > 100 && (
                <button 
                  onClick={() => toggleCaption(index)}
                  className="text-blue-400 text-sm mb-2"
                >
                  {expandedCaptions[index] ? 'Daha az göster' : 'Devamını oku'}
                </button>
              )}
              <div className="flex justify-between text-sm text-gray-400">
                <span>
                  <Heart className="inline-block mr-1 text-red-500 fill-current" size={16} /> {post.like_count}
                </span>
                <span>
                  <MessageCircle className="inline-block mr-1" size={16} /> {post.comment_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* AI Analysis Section */}
      {data.ai_analysis && (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Yapay Zeka Analizi</h3>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(data.ai_analysis, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
