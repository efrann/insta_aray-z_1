'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const InstagramAnalyzer = dynamic(() => import('../components/InstagramAnalyzer'), {
  loading: () => <p className="text-white">Loading...</p>,
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Suspense fallback={<p className="text-white">Loading Instagram Analyzer...</p>}>
        <InstagramAnalyzer />
      </Suspense>
    </main>
  );
}