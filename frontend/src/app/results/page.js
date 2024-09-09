'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { User, Users, Image as LucideImage, MapPin, Heart, MessageCircle } from 'lucide-react';
import NextImage from 'next/image';

function ResultsContent() {
  const searchParams = useSearchParams();
  const dataString = searchParams.get('data');
  const data = dataString ? JSON.parse(dataString) : null;

  if (!data) {
    return <div className="text-white">No data available</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Instagram Profil Analizi Sonuçları</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <NextImage 
              src={data.profilePicUrl} 
              alt={data.username} 
              width={96} 
              height={96} 
              className="rounded-full mr-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder-avatar.png';
              }}
            />
            <div>
              <h2 className="text-2xl font-bold">{data.fullName}</h2>
              <p className="text-gray-400">@{data.username}</p>
            </div>
          </div>
          <p className="mb-4">{data.biography}</p>
          <div className="flex justify-between mb-6">
            <div className="text-center">
              <LucideImage className="inline-block mr-2" />
              <span className="font-bold">{data.postsCount}</span>
              <p>Gönderiler</p>
            </div>
            <div className="text-center">
              <Users className="inline-block mr-2" />
              <span className="font-bold">{data.followersCount}</span>
              <p>Takipçiler</p>
            </div>
            <div className="text-center">
              <Users className="inline-block mr-2" />
              <span className="font-bold">{data.followsCount}</span>
              <p>Takip</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">En Popüler Gönderiler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.topPosts && data.topPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <NextImage 
                src={post.imageUrl} 
                alt={`Gönderi ${index + 1}`} 
                width={400} 
                height={400}
                className="w-full h-64 object-cover mb-2 rounded"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder-post.png';
                }}
              />
              <p className="text-sm mb-2">{post.caption}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span><Heart className="inline-block mr-1" size={16} /> {post.likesCount}</span>
                <span><MessageCircle className="inline-block mr-1" size={16} /> {post.commentsCount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}