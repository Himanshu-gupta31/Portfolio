"use client";
import React from "react";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

const ResponsiveContent = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const ResponsiveLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-blue-500 hover:underline block text-center sm:text-left mb-4">
    {children}
  </Link>
);

const ResponsiveTweet = ({ tweetId }: { tweetId: string }) => (
  <div className="w-full max-w-md mx-auto">
    <TwitterTweetEmbed tweetId={tweetId} />
  </div>
);

const ResponsiveIframe = ({ src, height, width, title }: { src: string; height: string; width: string; title: string }) => (
  <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl mx-auto">
    <iframe
      src={src}
      height={height}
      width={width}
      frameBorder="0"
      allowFullScreen
      title={title}
      className="w-full h-full"
    />
  </div>
);



export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-8 max-sm:pt-8 max-sm:pb-0">
      
      <Carousel items={cards} />
    </div>
  );
}
export const data = [
    {
      category: "Built a platform for video streaming",
      title: "Video Verse",
      link: "https://videoverse-two.vercel.app/signin",
      src: "/assests/VideoVerse.png",
      content: (
        <ResponsiveContent>
          <ResponsiveLink href="https://videoverse-two.vercel.app/signin">
            <h2 className="text-xl font-bold mb-4">VideoVerse</h2>
          </ResponsiveLink>
          <ResponsiveTweet tweetId="1818734036598092229" />
        </ResponsiveContent>
      ),
    },
    {
      title: "Music Nest",
      category: "A Music Academy Project.",
      link: "https://music-nest.vercel.app/",
      src: "/assests/MusicNest.png",
      content: (
        <ResponsiveContent>
          <ResponsiveLink href="https://music-nest.vercel.app/">
            <h2 className="text-xl font-bold mb-4">Music Nest</h2>
          </ResponsiveLink>
          <ResponsiveTweet tweetId="1833074210379338095" />
        </ResponsiveContent>
      ),
    },
    
    {
      title: "Team Promotions Pvt Ltd. Website",
      link: "https://www.teampromotions.in/",
      category: "Internship project",
      src: "/assests/TeamPromotion.png",
      content: (
        <ResponsiveContent >
          <h1 className="text-2xl text-black font-bold mb-2 text-center sm:text-left">Internship Project</h1>
          <h2 className="text-xl mb-4 text-black text-center sm:text-left">Oct 2023 - Mar 2024 · 6 months</h2>
          <div className="space-y-4">
            <h2 className="text-lg text-black font-semibold">Project Overview:</h2>
            <p className="text-sm sm:text-base text-black">
              As part of the Tech Team at Team Promotions, we enhanced the
              websites`&asop;` interface. Worked on the UI as well as on the blog feature
              to help Admins to easily update company activities. We`&asop;`ve developed
              a user-friendly Content Management System (CMS) using Django and
              integrated a newsletter feature for regular updates.
            </p>
            <h2 className="text-lg font-semibold text-black">Key Features:</h2>
            <ul className="list-disc text-black list-inside text-sm sm:text-base">
              <li>HTML,CSS,Javascript</li>
              
            </ul>
          </div>
        </ResponsiveContent>
      ),
    },
    {
      title: "Builders Hub",
      category: "Collaborative project-building community fostering innovation and teamwork",
      link: "https://buildershub.vercel.app/",
      src: "/assests/BuilderHub.png",
      content: (
        <ResponsiveContent>
          <ResponsiveIframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7194200424168472577"
            height="684"
            width="504"
            title="Builders Hub LinkedIn Post"
          />
        </ResponsiveContent>
      ),
    },
    {
      title: "Temflo Pvt Ltd. Website",
      link: "https://www.temflo.co.in/",
      category: "Freelance project for Temflo Pvt. Ltd.",
      src: "/assests/Temflo.png",
      content: (
        <ResponsiveContent>
          <ResponsiveIframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230140304245317633"
            height="961"
            width="504"
            title="Temflo Pvt Ltd Website LinkedIn Post"
          />
        </ResponsiveContent>
      ),
    },
    
  ];