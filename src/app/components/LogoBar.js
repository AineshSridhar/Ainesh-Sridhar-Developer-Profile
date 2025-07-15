'use client';

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500" size={24} />,
    url: "https://leetcode.com/u/aineshsridhar/",
    description: "👨‍💻 I'm actively solving problems on LeetCode to strengthen my data structures and algorithms knowledge. Check out my profile to see my contest ratings, badges, and solved problems.",
    image: "/LeetCodeProfile.png",
    stats: {
      solved: 620,
      daysActive: "333/365",
      contestsAttended: 40,
      contestRating: "1844 (Top 6.11%)"
    }
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-700" size={24} />,
    url: "https://www.geeksforgeeks.org/user/aineshs16jk/",
    description: "📚 I regularly read and contribute to GeeksforGeeks to stay sharp on coding concepts and interview prep. Check my profile for coding articles, solved problems, and more.",
    image: "/GFGProfile.png",
    stats: {
      articles: 12,
      problemsSolved: 290,
      campusChapters: 1
    }
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" size={24} />,
    url: "https://github.com/AineshSridhar/",
    description: "💻 Explore my GitHub to see projects I've built, collaborated on, or contributed to. Includes React apps, coding challenges, and experimentations.",
    image: "/GithubProfile.png",
    stats: {
      repos: 43,
      followers: 120,
      stars: 75
    }
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-700" size={24} />,
    url: "https://www.linkedin.com/in/aineshsridhar/",
    description: "🔗 Connect with me on LinkedIn to see my professional journey, achievements, and interests. Always happy to collaborate or discuss opportunities!",
    image: "/linkedin.png",
    stats: {
      connections: 800,
      endorsements: 28,
      recommendations: 6
    }
  },
];

export default function LogoBar() {
  const [activeProfile, setActiveProfile] = useState("LeetCode");
  const current = profiles.find((p) => p.name === activeProfile);

  // Helper to render relevant stats
  function renderStats(stats, name) {
    switch (name) {
      case "LeetCode":
        return (
          <>
            <p>Questions solved: {stats.solved}</p>
            <p>Days active this year: {stats.daysActive}</p>
            <p>Contests attended: {stats.contestsAttended}</p>
            <p>Contest rating: {stats.contestRating}</p>
          </>
        );
      case "GeeksforGeeks":
        return (
          <>
            <p>Problems solved: {stats.problemsSolved}</p>
            <p>Articles written: {stats.articles}</p>
            <p>Campus chapters: {stats.campusChapters}</p>
          </>
        );
      case "GitHub":
        return (
          <>
            <p>Repositories: {stats.repos}</p>
            <p>Followers: {stats.followers}</p>
            <p>Stars: {stats.stars}</p>
          </>
        );
      case "LinkedIn":
        return (
          <>
            <p>Connections: {stats.connections}</p>
            <p>Skill endorsements: {stats.endorsements}</p>
            <p>Recommendations: {stats.recommendations}</p>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className="p-6 rounded-xl shadow max-w-6xl mx-auto bg-[#0F1116] border border-slate-800">
      {/* Tabs */}
      <div className="flex flex-row flex-wrap gap-4 mb-6 justify-center">
        {profiles.map((profile) => (
          <button
            key={profile.name}
            onClick={() => setActiveProfile(profile.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition text-sm font-medium ${
              activeProfile === profile.name
                ? "bg-yellow-900 border-yellow-500 text-yellow-400"
                : "bg-[#1E2027] border-slate-700 text-yellow-300 hover:bg-[#22242B]"
            }`}
          >
            {profile.icon}
            {profile.name}
          </button>
        ))}
      </div>
      {/* Details */}
      {current && (
        <div className="bg-[#13151A] border-l-4 border-yellow-500 p-6 rounded-md text-yellow-400 shadow-inner flex flex-col md:flex-row gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">{current.name} Profile</h2>
            <p className="mb-4">{current.description}</p>
            {current.stats && renderStats(current.stats, current.name)}
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-yellow-300 font-semibold hover:underline"
            >
              Visit {current.name} →
            </a>
          </div>
          <img
            src={current.image}
            alt={`${current.name} profile`}
            className="rounded-lg shadow object-cover w-350 h-70 mb-4 md:mb-0"
          />
        </div>
      )}
    </div>
  );
}
