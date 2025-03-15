"use client";

import { useState, useEffect } from "react";
import { UserCircle, Sparkles, Mic, Upload, ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Twitter, 
  Linkedin, 
  FileText, 
  Radio, 
  MessageSquare, 
  Newspaper,
  Brain,
  Headphones,
  Podcast,
  Music,
  Clock,
  Settings,
  BookOpen,
  Layers,
  Zap,
  Rss
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const SpotifyIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-8 h-8 text-[#1DB954]"
    fill="currentColor"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm4.521 17.34c-.24.371-.841.491-1.271.231-3.051-1.86-6.672-2.131-10.162-1.2-.36.09-.75-.15-.84-.51-.09-.36.15-.75.51-.84 3.931-1.021 8.012-.63 11.452 1.38.42.26.54.87.27 1.29zm1.2-2.64c-.3.42-.84.6-1.261.3-3.091-1.891-7.651-2.461-11.442-1.35-.45.12-.9-.12-1.021-.57-.12-.45.12-.9.57-1.021 4.471-1.35 9.672-.69 13.232 1.5.42.3.6.84.3 1.261zm.099-2.76c-3.721-2.191-9.792-2.401-13.332-1.33-.54.15-1.08-.15-1.23-.69-.15-.54.15-1.08.69-1.23 4.111-1.23 10.932-.99 15.262 1.53.51.3.69.99.39 1.53-.3.51-.991.69-1.53.39z"/>
  </svg>
);

const ApplePodcastIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-8 h-8 text-[#DA2C84]"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c3.213 0 5.827 2.614 5.827 5.827 0 .72-.132 1.407-.374 2.04-.138.362-.518.553-.88.416-.362-.138-.553-.518-.416-.88.186-.49.283-1.017.283-1.576 0-2.431-1.978-4.409-4.44-4.409s-4.44 1.978-4.44 4.409c0 .559.097 1.086.283 1.576.138.362-.054.742-.416.88-.362.138-.742-.054-.88-.416A5.828 5.828 0 0 1 6.173 9.427C6.173 6.214 8.787 3.6 12 3.6zm0 3.6c1.227 0 2.227 1 2.227 2.227s-1 2.227-2.227 2.227-2.227-1-2.227-2.227S10.773 7.2 12 7.2zm0 4.8c2.813 0 5.093 2.28 5.093 5.093 0 .36-.293.653-.653.653s-.653-.293-.653-.653c0-2.084-1.703-3.787-3.787-3.787s-3.787 1.703-3.787 3.787c0 .36-.293.653-.653.653s-.653-.293-.653-.653C6.907 14.28 9.187 12 12 12z"/>
  </svg>
);

export function HowItWorksSection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('flow-diagram');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const cards = [
    {
      title: "1. Choose Your Topics",
      description: "Select your interests and preferred news sources to create your personalized content feed.",
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      details: (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">Choose from various content sources:</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <Twitter className="w-5 h-5 text-[#1DA1F2]" />, label: "Twitter" },
              { icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />, label: "LinkedIn" },
              { icon: <MessageSquare className="w-5 h-5 text-[#FF4500]" />, label: "Reddit" },
              { icon: <FileText className="w-5 h-5 text-purple-600" />, label: "RSS Feeds" },
              { icon: <Newspaper className="w-5 h-5 text-purple-600" />, label: "News" },
              { icon: <Radio className="w-5 h-5 text-purple-600" />, label: "Forums" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "2. AI Curation",
      description: "Our AI analyzes and summarizes the most relevant content, creating a concise briefing just for you.",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      details: (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">AI-powered content processing:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Content Aggregation</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Smart Summarization</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Script Generation</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. Listen & Learn",
      description: "Start your day with a personalized audio briefing that keeps you informed and inspired.",
      icon: <Headphones className="w-6 h-6 text-purple-600" />,
      details: (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">Delivery options:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Podcast className="w-4 h-4 text-[#8940FA]" />
              <span className="text-sm">Multiple Podcast Platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Customizable AI Voices</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Flexible Scheduling</span>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  // Update the technologies array
  const technologies = [
    { 
      name: "Spotify", 
      icon: "spotify",
      position: 0, // Right side, top
      color: "#1DB954" 
    },
    { 
      name: "Apple Music", 
      icon: "applemusic",
      position: 1, // Right side, middle
      color: "#FA243C" 
    },
    { 
      name: "Reddit", 
      icon: "reddit",
      position: 4, // Left side, middle
      color: "#FF4500" 
    },
    { 
      name: "Medium", 
      icon: "medium",
      position: 5, // Bottom left - ensure this is a number
      color: "#000000" 
    },
    { 
      name: "Hacker News", 
      icon: "hackernews",
      position: 6, // Left side, top
      color: "#FF6600" 
    },
  ];

  return (
    <section id="how-it-works" className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-900 py-12 md:py-0">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-5 md:p-8 
                rounded-xl md:rounded-2xl shadow-lg border border-gray-200/50 
                dark:border-gray-700/50 transition-all duration-300
                hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {card.title}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{card.description}</p>
              {card.details}
            </div>
          ))}
        </div>
        
        {/* Replace the Flow Diagram with Hub-Spoke Diagram */}
        <div id="flow-diagram" className="max-w-6xl mx-auto mb-16">
          
          {/* Hub and Spoke Diagram */}
          <div className="relative w-full aspect-square max-w-3xl mx-auto">
            {/* Connecting Lines First (so they appear behind the nodes) */}
            <svg className="absolute inset-0 w-full h-full z-0">
              {/* Define animation for the flowing dots */}
              <defs>
                <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
                  <circle cx="5" cy="5" r="3" fill="#8940FA" />
                </marker>
                
                {/* Animation definitions */}
                <linearGradient id="leftFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,0,0,0)">
                    <animate id="leftFlowAnim1" attributeName="offset" values="0;1" dur="1.2s" begin="0s; rightFlowAnim1.end" repeatCount="1" />
                  </stop>
                  <stop offset="5%" stopColor="rgba(137,64,250,0.6)">
                    <animate id="leftFlowAnim2" attributeName="offset" values="0.05;1.05" dur="1.2s" begin="0s; rightFlowAnim2.end" repeatCount="1" />
                  </stop>
                  <stop offset="10%" stopColor="rgba(0,0,0,0)">
                    <animate id="leftFlowAnim3" attributeName="offset" values="0.1;1.1" dur="1.2s" begin="0s; rightFlowAnim3.end" repeatCount="1" />
                  </stop>
                </linearGradient>
                
                {/* Right flow gradient - with animation that starts when left flow completes */}
                <linearGradient id="rightFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,0,0,0)">
                    <animate id="rightFlowAnim1" attributeName="offset" values="0;1" dur="1.2s" begin="leftFlowAnim1.end" repeatCount="1" />
                  </stop>
                  <stop offset="5%" stopColor="rgba(137,64,250,0.6)">
                    <animate id="rightFlowAnim2" attributeName="offset" values="0.05;1.05" dur="1.2s" begin="leftFlowAnim2.end" repeatCount="1" />
                  </stop>
                  <stop offset="10%" stopColor="rgba(0,0,0,0)">
                    <animate id="rightFlowAnim3" attributeName="offset" values="0.1;1.1" dur="1.2s" begin="leftFlowAnim3.end" repeatCount="1" />
                  </stop>
                </linearGradient>
              </defs>

              {technologies.map((tech, index) => {
                // Group spokes by side (left or right)
                let angle, yOffset;
                
                // Right side spokes (positions 0, 1, 2)
                if ([0, 1, 2].includes(tech.position)) {
                  angle = 0; // All right spokes point horizontally right
                  
                  // Count how many right spokes we have
                  const rightSpokes = technologies.filter(t => [0, 1, 2].includes(t.position));
                  const rightSpokeCount = rightSpokes.length;
                  
                  // Calculate vertical position based on index within right spokes
                  const rightIndex = rightSpokes.indexOf(tech);
                  
                  // Distribute evenly from top to bottom
                  // For 3 items: -30, 0, 30
                  // For 2 items: -15, 15
                  // For 1 item: 0
                  yOffset = rightSpokeCount > 1 
                    ? -30 + (60 * rightIndex / (rightSpokeCount - 1)) 
                    : 0;
                }
                // Left side spokes (positions 4, 5, 6)
                else {
                  angle = Math.PI; // All left spokes point horizontally left
                  
                  // Count how many left spokes we have
                  const leftSpokes = technologies.filter(t => [4, 5, 6].includes(t.position));
                  const leftSpokeCount = leftSpokes.length;
                  
                  // Calculate vertical position based on index within left spokes
                  const leftIndex = leftSpokes.indexOf(tech);
                  
                  // Distribute evenly from top to bottom
                  // For 3 items: -30, 0, 30
                  // For 2 items: -15, 15
                  // For 1 item: 0
                  yOffset = leftSpokeCount > 1 
                    ? -30 + (60 * leftIndex / (leftSpokeCount - 1)) 
                    : 0;
                }
                
                const spokeLengthPercent = 42; // Percentage of radius
                const x2 = 50 + spokeLengthPercent * Math.cos(angle);
                const y2 = 50 + yOffset;
                
                console.log(`Tech: ${tech.name}, Position: ${tech.position}, Is Left Side: ${[4, 5, 6].includes(tech.position)}`);
                
                return (
                  <React.Fragment key={`line-${index}`}>
                    {/* Static line */}
                    <motion.line
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      x1="50%" 
                      y1="50%" 
                      x2={`${x2}%`} 
                      y2={`${y2}%`}
                      stroke="rgba(0, 0, 0, 0.3)"
                      strokeWidth="2"
                    />
                    
                    {/* Animated data flow overlay - left to center first */}
                    {(tech.position === 4 || tech.position === 5 || tech.position === 6) && (
                      <motion.line
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                        x1={`${x2}%`}
                        y1={`${y2}%`}
                        x2="50%"
                        y2="50%"
                        stroke="url(#leftFlow)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    )}
                    
                    {/* Data flow from center to right nodes - with animation that starts after left flow */}
                    {[0, 1, 2].includes(tech.position) && (
                      <motion.line
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                        x1="50%"
                        y1="50%"
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="url(#rightFlow)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </svg>
            
            {/* Central Hub */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full p-5 shadow-lg border-2 border-purple-500">
                <div className="w-24 h-24 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="80" height="80">
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="12" 
                      fill="#8940FA" 
                    />
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="8" 
                      fill="#ffffff" 
                      fillOpacity="0.2" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Technology Nodes */}
            {technologies.map((tech, index) => {
              // Group nodes by side (left or right)
              let angle, yOffset;
              
              // Right side nodes (positions 0, 1, 2)
              if ([0, 1, 2].includes(tech.position)) {
                angle = 0; // All right nodes point horizontally right
                
                // Count how many right nodes we have
                const rightNodes = technologies.filter(t => [0, 1, 2].includes(t.position));
                const rightNodeCount = rightNodes.length;
                
                // Calculate vertical position based on index within right nodes
                const rightIndex = rightNodes.indexOf(tech);
                
                // Distribute evenly from top to bottom
                // For 3 items: -30, 0, 30
                // For 2 items: -15, 15
                // For 1 item: 0
                yOffset = rightNodeCount > 1 
                  ? -30 + (60 * rightIndex / (rightNodeCount - 1)) 
                  : 0;
              }
              // Left side nodes (positions 4, 5, 6)
              else {
                angle = Math.PI; // All left nodes point horizontally left
                
                // Count how many left nodes we have
                const leftNodes = technologies.filter(t => [4, 5, 6].includes(t.position));
                const leftNodeCount = leftNodes.length;
                
                // Calculate vertical position based on index within left nodes
                const leftIndex = leftNodes.indexOf(tech);
                
                // Distribute evenly from top to bottom
                // For 3 items: -30, 0, 30
                // For 2 items: -15, 15
                // For 1 item: 0
                yOffset = leftNodeCount > 1 
                  ? -30 + (60 * leftIndex / (leftNodeCount - 1)) 
                  : 0;
              }
              
              const nodeDistancePercent = 42; // Percentage of radius
              const x = 50 + nodeDistancePercent * Math.cos(angle);
              const y = 50 + yOffset;
              
              return (
                <motion.div
                  key={`node-${index}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="absolute z-20 bg-white dark:bg-gray-800 rounded-full p-4 shadow-md transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`
                  }}
                >
                  {getTechIcon(tech.icon)}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToWaitlist}
            size="lg"
            className="group"
          >
            Join the Waitlist
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Helper function to render technology icons
function getTechIcon(icon: string) {
  switch(icon) {
    case 'spotify':
      return (
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src="/spotify_logo.png" 
            alt="Spotify" 
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    case 'applemusic':
      return (
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src="/apple_music_logo.png" 
            alt="Apple Music" 
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    case 'hackernews':
      return (
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src="/hacker_news_logo.png" 
            alt="Hacker News" 
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    case 'reddit':
      return (
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src="/reddit_logo.png" 
            alt="Reddit" 
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    case 'medium':
      return (
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src="/medium_logo.png" 
            alt="Medium" 
            className="w-8 h-8 object-contain"
          />
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
          <span className="text-gray-500">?</span>
        </div>
      );
  }
} 