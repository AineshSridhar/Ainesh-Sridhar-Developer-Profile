'use client';

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// NOTE: Replace these import paths with the actual location or URLs of your images.
const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500" size={24} />,
    url: "https://leetcode.com/u/aineshsridhar/",
    description:
      "👨‍💻 I'm actively solving problems on LeetCode to strengthen my data structures and algorithms knowledge. Check out my profile to see my contest ratings, badges, and solved problems.",
    image: "/LeetCodeProfile.png",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-700" size={24} />,
    url: "https://www.geeksforgeeks.org/user/aineshs16jk/",
    description:
      "📚 I regularly read and contribute to GeeksforGeeks to stay sharp on coding concepts and interview prep. Check my profile for coding articles, solved problems, and more.",
    image: "/GFGProfile.png",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" size={24} />,
    url: "https://github.com/AineshSridhar/",
    description:
      "💻 Explore my GitHub to see projects I've built, collaborated on, or contributed to. Includes React apps, coding challenges, and experimentations.",
    image: "/GithubProfile.png",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-700" size={24} />,
    url: "https://www.linkedin.com/in/aineshsridhar/",
    description:
      "🔗 Connect with me on LinkedIn to see my professional journey, achievements, and interests. Always happy to collaborate or discuss opportunities!",
    image: "/linkedin.png",
  },
];

export default function LogoBar() {
  const [activeProfile, setActiveProfile] = useState("LeetCode");
  const current = profiles.find((p) => p.name === activeProfile);

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-row flex-wrap gap-4 mb-6 justify-center">
        {profiles.map((profile) => (
          <button
            key={profile.name}
            onClick={() => setActiveProfile(profile.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition text-sm font-medium
            ${
              activeProfile === profile.name
                ? "bg-blue-100 border-blue-500 text-blue-700"
                : "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {profile.icon}
            {profile.name}
          </button>
        ))}
      </div>
      {/* Details block with image inside */}
      {current && (
        <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-md text-gray-800 shadow-inner flex flex-col md:flex-row gap-6 items-center">
          {/* The profile image inside content */}
          <img
            src={current.image}
            alt={`${current.name} profile`}
            className="rounded-lg shadow object-cover w-40 h-40 mb-4 md:mb-0"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">{current.name} Profile</h2>
            <p className="mb-4">{current.description}</p>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 font-semibold hover:underline"
            >
              Visit {current.name} →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}