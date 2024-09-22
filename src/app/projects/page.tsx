import React from 'react';
import { AppleCardsCarouselDemo } from '@/app/components/AppleCardsCarouselDemo';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <AppleCardsCarouselDemo />
    </div>
  );
}